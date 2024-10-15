
from datetime import datetime
from typing import Any
import psycopg2
from ..domain.Client import Client
from ..domain.Vehicle import Vehicle, VehicleType
from ..domain.Parking import Parking, ParkingState
from ..domain.ParkingRepository import ParkingRepository

class PostgresParkingRepository(ParkingRepository):
    def __init__(self, connectionData):
        super().__init__()
        self.connectionData = connectionData
    
    def initConnection(self):
         return psycopg2.connect(
                host=str(self.connectionData["host"]),
                database=str(self.connectionData["dbname"]),
                user=str(self.connectionData["user"]),
                password=str(self.connectionData["password"]),
                port=int(self.connectionData["port"])
            )
    
    async def register(self, parkingData: Parking):
        
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    # Insertar parqueo
                    cursor.execute("""INSERT INTO parqueos (idcliente, idvehiculo, horaentrada, estado)
                                    VALUES (%s, %s, %s, %s)""",
                                (parkingData.clientData.id, parkingData.vehicleData.id, parkingData.entranceDate, parkingData.state.value))
                conn.commit()

            response = {
                "responseData": parkingData,
                "statusCode": 201,
                "message": "Parqueo creado correctamente."
            }
            return response

        except Exception as e:
            print(f"Error al registrar el parqueo: {e}")
            response = {
                "responseData": None,
                "statusCode": 500,
                "message": "Error al crear el parqueo."
            }
            return response
                
    async def getAll(self):
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute("""SELECT p.*, c.*, v.*  FROM parqueos p
                                    INNER JOIN clientes c ON p.idcliente = c.id 
                                    INNER JOIN vehiculos v ON v.id = p.idvehiculo
                                    WHERE p.estado != %s;""",
                                    (ParkingState.DELETED.value,))
                    
                    parkingList =  cursor.fetchall()
                    
                    def tupleToDomain(parkingRow: tuple[Any,...]):
                        clientData = Client(
                            id = parkingRow[6],
                            cc = parkingRow[7],
                            fullName = parkingRow[8], 
                            email = parkingRow[9]
                        )
                        
                        vehicleData = Vehicle(
                            id = parkingRow[10],
                            licensePlate = parkingRow[11],
                            type = VehicleType._value2member_map_.get(parkingRow[12]), 
                            color = parkingRow[13], 
                            model = parkingRow[14]
                        )
                        
                        parkingData = Parking(
                            id = parkingRow[0],
                            clientData = clientData,
                            vehicleData = vehicleData,
                            entranceDate = parkingRow[3],
                            exitDate = parkingRow[4],
                            state = ParkingState._value2member_map_.get(parkingRow[5])
                        )
                        
                        return parkingData 
                    
                    parkingDataList = list(map(tupleToDomain,parkingList))
                    
                    response = {
                        "responseData:": parkingDataList,
                        "statusCode": 200,
                        "message": "Parqueos recuperados correctamente."
                    }
                    
                    return response
        except Exception as error:
            raise error
    
    async def getOneById(self, parkingID: str):
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute("""SELECT * FROM parqueos WHERE id = %s AND estado != %s""",(parkingID,ParkingState.DELETED.value))
                    parkingFound = cursor.fetchone()
                   
                    cursor.execute("""SELECT * FROM clientes WHERE id = %s""",(parkingFound[1],))
                    clientFound = cursor.fetchone()
                    
                    cursor.execute("""SELECT * FROM vehiculos WHERE id = %s""",(parkingFound[2],))
                    vehicleFound = cursor.fetchone()
                    
                    clientData = Client(
                        id = clientFound[0],
                        cc = clientFound[1],
                        fullName = clientFound[2], 
                        email = clientFound[3]
                    )
                    
                    vehicleData = Vehicle(
                        id = vehicleFound[0],
                        licensePlate = vehicleFound[1],
                        type = VehicleType._value2member_map_.get(vehicleFound[2]), 
                        color = vehicleFound[3], 
                        model = vehicleFound[4]
                    )
                    
                    parkingData = Parking(
                        id = parkingFound[0],
                        clientData = clientData,
                        vehicleData = vehicleData,
                        entranceDate = parkingFound[3],
                        exitDate = parkingFound[4],
                        state = ParkingState._value2member_map_.get(parkingFound[5])
                    )
                    
                    response = {
                        "responseData": parkingData,
                        "statusCode": 200,
                        "message": "Parqueo recuperado correctamente."
                    }
                    return response
        except Exception as error:
            raise error
    
    async def delete(self, parkingID: str):
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute("""UPDATE parqueos 
                                SET estado = %s 
                                WHERE id = %s""",(ParkingState.DELETED.value, parkingID))
                
                response = {
                    "responseData": None,
                    "statusCode": 200,
                    "message": "Parqueo eliminado correctamente."
                }
                conn.commit()
            return response
        except Exception as error:
            raise error
        pass
    
    async def exit(self,parkingID: str):
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    exitDate = datetime.now()
                    
                    cursor.execute("""UPDATE parqueos 
                                SET estado = %s, horasalida = %s
                                WHERE id = %s""",(ParkingState.OUTSIDE.value, exitDate, parkingID))
                
                response = {
                    "responseData": None,
                    "statusCode": 200,
                    "message": "Salida de vehículo guardada correctamente."
                }
                conn.commit()
            return response
        except Exception as error:
            raise error
    
    async def saveClient(self, clientData: Client):
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    # Buscar cliente
                    cursor.execute("SELECT * FROM clientes WHERE cc = %s", (clientData.cc,))
                    foundClient = cursor.fetchone()
                    
                    if foundClient:
                        clientID = foundClient[0]
                        cursor.execute("""UPDATE clientes 
                                        SET nombre_completo = %s, email = %s 
                                        WHERE id = %s""",
                                    (clientData.fullName, clientData.email, clientID))
                        
                    else:
                        cursor.execute("""INSERT INTO clientes (cc, nombre_completo, email)
                                        VALUES (%s, %s, %s) RETURNING id""",
                                    (clientData.cc, clientData.fullName, clientData.email))
                        clientID = cursor.fetchone()[0]
                conn.commit()
                
            response = {
                "responseData": {
                    "clientID": clientID
                },
                "statusCode": 201,
                "message": "Cliente guardado correctamente."
            }
            return response

        except Exception as e:
            print(f"Error al registrar el cliente: {e}")
            response = {
                "responseData": None,
                "statusCode": 500,
                "message": "Error al guardar el cliente."
            }
            return response
        pass
    
    async def getOneByLicensePlate(self, licensePlate: str):
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute("""SELECT * FROM vehiculos WHERE placa = %s""",(licensePlate,))
                    vehicleFound = cursor.fetchone()
                    
                    cursor.execute("""SELECT * FROM parqueos WHERE idvehiculo = %s AND estado = %s""",(vehicleFound[0],ParkingState.PARKED.value))
                    parkingFound = cursor.fetchone()
                   
                    cursor.execute("""SELECT * FROM clientes WHERE id = %s""",(parkingFound[1],))
                    clientFound = cursor.fetchone()
                    
                    
                    clientData = Client(
                        id = clientFound[0],
                        cc = clientFound[1],
                        fullName = clientFound[2], 
                        email = clientFound[3]
                    )
                    
                    vehicleData = Vehicle(
                        id = vehicleFound[0],
                        licensePlate = vehicleFound[1],
                        type = VehicleType._value2member_map_.get(vehicleFound[2]), 
                        color = vehicleFound[3], 
                        model = vehicleFound[4]
                    )
                    
                    parkingData = Parking(
                        id = parkingFound[0],
                        clientData = clientData,
                        vehicleData = vehicleData,
                        entranceDate = parkingFound[3],
                        exitDate = parkingFound[4],
                        state = ParkingState._value2member_map_.get(parkingFound[5])
                    )
                    
                    response = {
                        "responseData": parkingData,
                        "statusCode": 200,
                        "message": "Parqueo recuperado correctamente."
                    }
                    return response
        except Exception as error:
            raise error
 
    async def saveVehicle(self,vehicleData: Vehicle):
        try:
            with self.initConnection() as conn:
                with conn.cursor() as cursor:
                    
                    
                    # Buscar vehículo
                    cursor.execute("SELECT * FROM vehiculos WHERE placa = %s", (vehicleData.licensePlate,))
                    foundVehicle = cursor.fetchone()
                    
                    
                    
                    if foundVehicle:
                        vehicleID = foundVehicle[0]
                        cursor.execute("""UPDATE vehiculos 
                                        SET tipo = %s, color = %s, modelo = %s 
                                        WHERE id = %s""",
                                    (vehicleData.type.value, vehicleData.color, vehicleData.model, vehicleID))
                    else:
                        
                        cursor.execute("""INSERT INTO vehiculos (placa, tipo, color, modelo)
                                        VALUES (%s, %s, %s, %s) RETURNING id""",
                                    (vehicleData.licensePlate, vehicleData.type.value, vehicleData.color, vehicleData.model))
                        vehicleID = cursor.fetchone()[0]
                conn.commit()

            response = {
                "responseData": {
                    "vehicleID": vehicleID
                },
                "statusCode": 201,
                "message": "Vehiculo guardado correctamente."
            }
            return response

        except Exception as e:
            response = {
                "responseData": None,
                "statusCode": 500,
                "message": "Error al guardar el vehiculo."
            }
            return response
        pass

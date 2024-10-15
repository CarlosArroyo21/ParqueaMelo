from datetime import datetime
from src.lib.parking.api.models.ParkingModel import ParkingModel
from src.lib.parking.domain.ParkingRepository import ParkingRepository


class ParkingRegisterUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self, parkingDataModel: ParkingModel):
        try:
            
            parkingDataDomain = parkingDataModel.toDomain()
            parkingDataDomain.setEntranceDate(datetime.now())
            
            # clientResponse: {
            #     responseData: {
            #         clientID: int,
            #     } || None,
            #     statusCode: int
            #     message: str
            # }
            clientResponse = await self.parkingRepository.saveClient(parkingDataDomain.clientData)
            
            
            # vehicleResponse: {
            #     responseData: {
            #         vehicleID: int,
            #     } || None,
            #     statusCode: int
            #     message: str
            # }parkingData
            vehicleResponse = await self.parkingRepository.saveVehicle(parkingDataDomain.vehicleData)
            
            parkingDataDomain.clientData.setId(str(clientResponse["responseData"]["clientID"]))
            parkingDataDomain.vehicleData.setId(vehicleResponse["responseData"]["vehicleID"])
            
            # parkingResponse: {
            #     responseData: Parking,
            #     statusCode: int
            #     message: str
            # }
            parkingResponse = await self.parkingRepository.register(parkingDataDomain)
            return parkingResponse
        except Exception as e:
            raise e
            pass
        
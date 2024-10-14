from abc import ABC, abstractmethod
from src.lib.parking.domain.Parking import Parking
from src.lib.parking.domain.Client import Client
from src.lib.parking.domain.Vehicle import VehicleType, Vehicle


class ParkingRepository(ABC):
    
    @abstractmethod
    async def register(parkingData: Parking):
        pass
    
    @abstractmethod
    async def getAll():
        pass
    
    @abstractmethod
    async def getOneById(parkingID: str):
        pass
    
    @abstractmethod
    async def update(parkingData: Parking):
        pass
    
    @abstractmethod
    async def delete(parkingID: str):
        pass
    
    @abstractmethod
    async def exit(parkingID: str):
        pass
    
    @abstractmethod
    async def getClientById(clientID: str):
        pass
    
    @abstractmethod
    async def saveClient(clientData: Client):
        pass
    
    @abstractmethod
    async def getVehicleByLicensePlate(licensePlate: str):
        pass
 
    @abstractmethod
    async def saveVehicle(licensePlate: str, type: VehicleType, model: str, color: str):
        pass
from abc import ABC, abstractmethod
from .Parking import Parking
from .Client import Client
from .Vehicle import Vehicle


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
    async def getOneByLicensePlate(licensePlate: str):
        pass
    
    @abstractmethod
    async def delete(parkingID: str):
        pass
    
    @abstractmethod
    async def exit(parkingID: str):
        pass
    
    @abstractmethod
    async def saveClient(self, clientData: Client):
        pass
    
 
    @abstractmethod
    async def saveVehicle(vehicleData: Vehicle):
        pass
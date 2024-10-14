from abc import ABC, abstractmethod
from src.lib.parking.domain.Vehicle import VehicleType


class ParkingRepository(ABC):
    
    @abstractmethod
    async def register(licensePlate: str, vehicleType: VehicleType, model: str, color: str, cc: str, fullName: str, email: str):
        pass
    
    @abstractmethod
    async def getClientById(clientID: str):
        pass
    
    @abstractmethod
    async def registerClient(fullName: str, email: str):
        pass
    
    @abstractmethod
    async def modifyClient(clientID: str, fullName: str, email: str):
        pass
    
    @abstractmethod
    async def getVehicleByLicensePlate(licensePlate: str):
        pass
    
    @abstractmethod
    async def modifyVehicle(licenseID: str, vehicleType: VehicleType, model: str, color: str):
        pass
 
    @abstractmethod
    async def registerVehicle(licensePlate: str, type: VehicleType, model: str, color: str):
        pass
    
    @abstractmethod
    async def getAll():
        pass
    
    @abstractmethod
    async def modify(parkingID: str, licensePlate: str, vehicleType: VehicleType, model: str, color: str, cc: str, fullName: str, email: str):
        pass
    
    @abstractmethod
    async def delete(parkingID: str):
        pass
    
    @abstractmethod
    async def exit(parkingID: str):
        pass
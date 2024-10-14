from src.lib.parking.domain.Parking import Parking
from src.lib.parking.domain.ParkingRepository import ParkingRepository

class ParkingUpdateUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self, parkingData: Parking):
        try:
            
            # clientResponse: {
            #     responseData: None,
            #     statusCode: int
            #     message: str
            # }
            clientResponse = await self.parkingRepository.saveClient(parkingData.clientData)
            
            # vehicleResponse: {
            #     responseData: None,
            #     statusCode: int
            #     message: str
            # }
            vehicleResponse = await self.parkingRepository.saveVehicle(parkingData.vehicleData)
            
            # parkingResponse: {
            #     responseData: None,
            #     statusCode: int
            #     message: str
            # }
            parkingResponse = await self.parkingRepository.update(parkingData)
        except:
            
            pass
        finally:
            return parkingResponse
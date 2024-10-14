from datetime import datetime
from src.lib.parking.domain.Parking import Parking
from src.lib.parking.domain.ParkingRepository import ParkingRepository


class ParkingRegisterUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self, parkingData: Parking):
        try:
            
            # clientResponse: {
            #     responseData: {
            #         newId: int,
            #     } || None,
            #     statusCode: int
            #     message: str
            # }
            clientResponse = await self.parkingRepository.saveClient(parkingData.clientData)
            
            # vehicleResponse: {
            #     responseData: {
            #         newId: int,
            #     } || None,
            #     statusCode: int
            #     message: str
            # }
            vehicleResponse = await self.parkingRepository.saveVehicle(parkingData.vehicleData)
            
            parkingData.clientData.setId(clientResponse["newId"])
            parkingData.vehicleData.setId(vehicleResponse["newId"])
            
            # parkingResponse: {
            #     responseData: None,
            #     statusCode: int
            #     message: str
            # }
            parkingResponse = await self.parkingRepository.register(parkingData)
        except:
            
            pass
        finally:
            return parkingResponse
        
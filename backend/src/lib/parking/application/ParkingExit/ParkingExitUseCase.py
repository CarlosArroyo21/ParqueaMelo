from src.lib.parking.domain.ParkingRepository import ParkingRepository

class ParkingUpdateUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self, parkingID: str):
        try:
            
            # parkingResponse: {
            #     responseData: None,
            #     statusCode: int
            #     message: str
            # }
            parkingResponse = await self.parkingRepository.exit(parkingID)
        except:
            
            pass
        finally:
            return parkingResponse
from src.lib.parking.domain.ParkingRepository import ParkingRepository

class ParkingQueryByIdUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self, parkingID: str):
        try:
            
            # parkingResponse: {
            #     responseData: Parking,
            #     statusCode: int
            #     message: str
            # }
            parkingResponse = await self.parkingRepository.getOneById(parkingID)
        except:
            
            pass
        finally:
            return parkingResponse
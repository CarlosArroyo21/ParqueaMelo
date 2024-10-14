from src.lib.parking.domain.ParkingRepository import ParkingRepository

class ParkingQueryUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self):
        try:
            
            # parkingResponse: {
            #     statusCode: int
            #     message: str
            #     parkingList: Parking[]
            # }
            parkingResponse = await self.parkingRepository.getAll()
        except:
            
            pass
        finally:
            return parkingResponse
        
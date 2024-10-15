from src.lib.parking.domain.ParkingRepository import ParkingRepository

class ParkingQueryUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self):
        try:
            
            # parkingResponse: {
            #     responseData: list[Parking]
            #     statusCode: int
            #     message: str
            # }
            parkingResponse = await self.parkingRepository.getAll()
            return parkingResponse
        except Exception as error:
            return {
                "responseData": None,
                "statusCode": 500,
                "message": error.__str__()
            }
        
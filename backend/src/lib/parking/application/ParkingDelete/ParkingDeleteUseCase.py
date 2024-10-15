from src.lib.parking.domain.ParkingRepository import ParkingRepository

class ParkingDeleteUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self, parkingID: str):
        try:
            
            # parkingResponse: {
            #     responseData: None,
            #     statusCode: int
            #     message: str
            # }
            parkingResponse = await self.parkingRepository.delete(parkingID)
            return parkingResponse
        except Exception as error:
            return {
                "responseData": None,
                "statusCode": 500,
                "message": error.__str__()
            }
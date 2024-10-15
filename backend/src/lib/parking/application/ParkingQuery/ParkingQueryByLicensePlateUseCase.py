from src.lib.parking.domain.ParkingRepository import ParkingRepository

class ParkingQueryByLicensePlateUseCase:
    def __init__(self, parkingRepository: ParkingRepository):
        self.parkingRepository = parkingRepository
    
    async def execute(self, parkingID: str):
        try:
            
            # parkingResponse: {
            #     responseData: Parking,
            #     statusCode: int
            #     message: str
            # }
            vehicleResponse = await self.parkingRepository.getOneByLicensePlate(parkingID)
            return vehicleResponse
        except Exception as error:
            return {
                "responseData": None,
                "statusCode": 500,
                "message": error.__str__()
            }
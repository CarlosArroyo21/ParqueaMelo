from src.lib.parking.application.ParkingQuery.ParkingQueryUseCase import ParkingQueryUseCase
from src.lib.parking.application.ParkingExit.ParkingExitUseCase import ParkingExitUseCase
from src.lib.parking.application.ParkingQuery.ParkingQueryByLicensePlateUseCase import ParkingQueryByLicensePlateUseCase
from src.lib.parking.application.ParkingDelete.ParkingDeleteUseCase import ParkingDeleteUseCase
from src.lib.parking.application.ParkingQuery.ParkingQueryByIdUseCase import ParkingQueryByIdUseCase
from src.lib.parking.application.ParkingRegister.ParkingRegisterUseCase import ParkingRegisterUseCase
from src.lib.parking.infrastructure.PostgresParkingRepository import PostgresParkingRepository
from src.lib.auth.application.RegisterUser.RegisterUserUseCase import RegisterUserUseCase
from src.lib.auth.application.LoginUser.LoginUserUseCase import LoginUserUseCase
from src.lib.auth.infrastructure.PostgresAuthRepository import PostgresAuthRepository

connectionData = {"host":"localhost", "dbname":"ParqueaMeloDB", "user":"postgres", "password":"admin", "port":5432}

authRepository = PostgresAuthRepository(connectionData)
parkingRepository = PostgresParkingRepository(connectionData)

useCasesDictionary = {
    "auth": {
        "login": LoginUserUseCase(authRepository),
        "register": RegisterUserUseCase(authRepository)
    },
    "parking": {
        "register": ParkingRegisterUseCase(parkingRepository),
        "getOneByID": ParkingQueryByIdUseCase(parkingRepository),
        "delete": ParkingDeleteUseCase(parkingRepository),
        "getOneByLicensePlate": ParkingQueryByLicensePlateUseCase(parkingRepository),
        "exit": ParkingExitUseCase(parkingRepository),
        "getAll": ParkingQueryUseCase(parkingRepository)
    }
}

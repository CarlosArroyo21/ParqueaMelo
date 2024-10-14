from src.lib.auth.application.RegisterUser.RegisterUserUseCase import RegisterUserUseCase
from src.lib.auth.application.LoginUser.LoginUserUseCase import LoginUserUseCase
from src.lib.auth.infrastructure.PostgresAuthRepository import PostgresAuthRepository, connectionData

authRepository = PostgresAuthRepository(connectionData=connectionData)

useCasesDictionary = {
    "auth": {
        "login": LoginUserUseCase(authRepository),
        "register": RegisterUserUseCase(authRepository)
    }
}

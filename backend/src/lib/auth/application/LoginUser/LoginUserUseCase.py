from src.lib.auth.domain.UserErrors import IncorrectCredentials
from src.lib.auth.domain import AuthRepository

class LoginUserUseCase:
    def __init__(self, authRepository: AuthRepository):
        self.authRepository = authRepository
    
    async def execute(self, email: str, password: str):
        try:
            response = await self.authRepository.login(email, password)
        except IncorrectCredentials as error:
            response = {
                    "statusCode": error.statusCode,
                    "message": error.message
            }
        except Exception as error:
            raise error
        finally:
            return response
            
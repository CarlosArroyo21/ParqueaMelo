from src.lib.auth.domain.UserErrors import ExistingUser


class RegisterUserUseCase:
    def __init__(self, authRepository):
        self.authRepository = authRepository
    
    async def execute(self, name: str, email: str, password: str):
        try:
            response = await self.authRepository.register(name, email, password)
        except ExistingUser as error:
            response = {
                    "statusCode": error.statusCode,
                    "message": error.message
            }
        except Exception as error:
            raise error
        finally:
            return response
    

class LoginUser:
    def __init__(self, authRepository):
        self.authRepository = authRepository
    
    async def execute(self, email: str, password: str):
        response = await self.authRepository.login(email, password)
        return response
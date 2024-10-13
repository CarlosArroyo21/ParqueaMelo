class RegisterUser:
    def __init__(self, authRepository):
        self.authRepository = authRepository
    
    async def execute(self, name: str, email: str, password: str):
        userRegistered = await self.authRepository.register(name, email, password)
        return userRegistered
    
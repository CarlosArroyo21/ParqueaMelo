from abc import ABC, abstractmethod

class AuthRepository(ABC):

    @abstractmethod
    async def login(self, email: str, password: str):
        pass

    @abstractmethod
    async def register(self, name: str, email: str, password: str):
        pass

from typing import Optional
from pydantic import BaseModel
from src.lib.parking.domain.Client import Client

class ClientModel(BaseModel):
    id: Optional[str]
    cc: str
    fullName: str
    email: str
    
    def toDomain(self):
            return Client(
                self.cc,
                self.fullName,
                self.email,
                self.id
            )
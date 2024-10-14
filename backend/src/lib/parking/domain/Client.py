from pydantic import BaseModel


class Client(BaseModel):
    id: str
    def __init__(self, cc: str ,fullName: str ,email: str):
        self.cc = cc
        self.fullName = fullName
        self.email = email
        
    def setId(self, newId: str):
        self.id = newId
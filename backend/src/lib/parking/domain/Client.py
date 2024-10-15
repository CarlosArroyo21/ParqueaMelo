from typing import Optional


class Client():
    id: Optional[str]
    cc: str
    fullName: str
    email: str
    
    def __init__(self, cc: str ,fullName: str ,email: str, id: Optional[str] = None):
        self.id = id
        self.cc = cc
        self.fullName = fullName
        self.email = email
        
    def setId(self, newId: str):
        self.id = newId
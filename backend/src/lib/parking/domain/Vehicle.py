from enum import Enum

from pydantic import BaseModel

class VehicleType(Enum):
    MOTORBIKE = "MOTO"
    CAR = "AUTOMOVIL"

class Vehicle(BaseModel):
    id: str
    licensePlate: str
    type: VehicleType
    model: str
    color: str

    def __init__(self, licensePlate, type, model, color):
        self.licensePlate = licensePlate
        self.type = type
        self.model = model
        self,color = color
    
    def setId(self, newId: str):
        self.id = newId


    
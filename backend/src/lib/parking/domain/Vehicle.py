from enum import Enum
from typing import Optional

class VehicleType(Enum):
    MOTORBIKE = "MOTO"
    CAR = "AUTOMOVIL"

class Vehicle():
    id: Optional[str]
    licensePlate: str
    type: VehicleType
    model: str
    color: str

    def __init__(self, licensePlate, type, model, color, id: Optional[str] = None):
        self.id = id
        self.licensePlate = licensePlate
        self.type = type
        self.model = model
        self.color = color
    
    def setId(self, newId: str):
        self.id = newId


    
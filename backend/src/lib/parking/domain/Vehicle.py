from enum import Enum

class VehicleType(Enum):
    MOTORBIKE = "MOTO"
    CAR = "AUTOMOVIL"

class Vehicle:
    licensePlate: str
    type: VehicleType
    model: str
    color: str

    def __init__(self, licensePlate, type, model, color):
        self.licensePlate = licensePlate
        self.type = type
        self.model = model
        self,color = color
    


    
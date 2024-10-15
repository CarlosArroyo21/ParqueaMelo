from typing import Optional
from pydantic import BaseModel
from src.lib.parking.domain.Vehicle import Vehicle, VehicleType

class VehicleModel(BaseModel):
    id: Optional[str]
    licensePlate: str
    type: str
    model: str
    color: str
    
    def toDomain(self):
        return Vehicle(
            self.licensePlate,
            VehicleType._value2member_map_[self.type],
            self.model,
            self.color,
            self.id
        )

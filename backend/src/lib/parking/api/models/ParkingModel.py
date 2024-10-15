from typing import Optional
from pydantic import BaseModel
from src.lib.parking.domain.Client import Client
from src.lib.parking.domain.Vehicle import Vehicle
from src.lib.parking.api.models.ClientModel import ClientModel
from src.lib.parking.api.models.VehicleModel import VehicleModel
from src.lib.parking.domain.Parking import Parking, ParkingState
from datetime import datetime

class ParkingModel(BaseModel):
    vehicleData: VehicleModel
    clientData: ClientModel
    entranceDate: datetime
    exitDate: Optional[datetime]
    state: str
    
    def toDomain(self):
        return Parking(
            self.vehicleData.toDomain(), 
            self.clientData.toDomain(), 
            self.entranceDate, 
            ParkingState._value2member_map_[self.state], 
            self.exitDate,
            None
        )
    
        
    

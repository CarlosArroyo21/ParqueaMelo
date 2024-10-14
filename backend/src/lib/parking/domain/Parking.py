from typing import Optional

from pydantic import BaseModel
from src.lib.parking.domain.Client import Client
from src.lib.parking.domain.Vehicle import Vehicle
from datetime import datetime
from enum import Enum


class ParkingState(Enum):
    PARKED = "PARQUEADO"
    OUTSIDE = "FUERA"
    DELETED = "BORRADO"
    

class Parking(BaseModel):
    id: str
    vehicleData: Vehicle
    clientData: Client
    entranceDate: datetime
    exitDate: Optional[datetime]
    state: ParkingState
    
    def __init__(self, vehìcleData, clientData, entranceDate, state = ParkingState.PARKED, exitDate: Optional[datetime] = None ,id: Optional[str] = ""):
        self.id = id
        self.vehicleData = vehìcleData
        self.clientData = clientData
        self.entranceDate = entranceDate
        self.exitDate = exitDate
        self.state = state
    
        
    
    

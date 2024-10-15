from typing import Optional
from src.lib.parking.domain.Client import Client
from src.lib.parking.domain.Vehicle import Vehicle
from datetime import datetime
from enum import Enum


class ParkingState(Enum):
    PARKED = "PARQUEADO"
    OUTSIDE = "FUERA"
    DELETED = "BORRADO"
    

class Parking():
    id: Optional[str]
    vehicleData: Vehicle
    clientData: Client
    entranceDate: datetime
    exitDate: Optional[datetime]
    state: ParkingState
    
    def __init__(self, vehicleData: Vehicle, clientData: Client, entranceDate: datetime, state = ParkingState.PARKED, exitDate: Optional[datetime] = None ,id: Optional[str] = None):
        self.id = id
        self.vehicleData = vehicleData
        self.clientData = clientData
        self.entranceDate = entranceDate
        self.exitDate = exitDate
        self.state = state
    
    def setEntranceDate(self, entraceDate: datetime):
        self.entranceDate = entraceDate
    
        
    
    

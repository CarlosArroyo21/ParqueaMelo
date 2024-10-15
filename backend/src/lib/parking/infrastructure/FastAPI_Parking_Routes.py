from fastapi import APIRouter
from ..api.models.ParkingModel import ParkingModel
from src.lib.shared.infrastructure.ServiceContainer import useCasesDictionary

router = APIRouter(prefix="/parking", tags=["Parking"])

@router.post("/register")
async def register(parkingData: ParkingModel):
    try:
        response = await useCasesDictionary["parking"]["register"].execute(parkingData)
        return response
    except Exception as error:
        raise error

@router.get("/getSingleById")
async def getOneById(parkingID: str):
    try:
        response = await useCasesDictionary["parking"]["getOneByID"].execute(parkingID)
        return response
    except Exception as error:
        raise error

@router.get("/getAll")
async def getAll():
    try:
        response = await useCasesDictionary["parking"]["getAll"].execute()
        return response
    except Exception as error:
        raise error

@router.get("/getSingleByLicensePlate")
async def getOneByLicensePlate(licensePlate: str):
    try:
        response = await useCasesDictionary["parking"]["getOneByLicensePlate"].execute(licensePlate)
        return response
    except Exception as error:
        raise error

@router.post("/delete")
async def delete(parkingID: str):
    try:
        response = await useCasesDictionary["parking"]["delete"].execute(parkingID)
        return response
    except Exception as error:
        raise error
    
@router.post("/exit")
async def exit(parkingID: str):
    try:
        response = await useCasesDictionary["parking"]["exit"].execute(parkingID)
        return response
    except Exception as error:
        raise error

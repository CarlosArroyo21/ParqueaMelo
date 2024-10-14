from fastapi import APIRouter
from src.lib.shared.infrastructure.ServiceContainer import useCasesDictionary

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login")
async def login(email: str, password: str):
    try:
        response = await useCasesDictionary["auth"]["login"].execute(email, password)
        return response
    except Exception as error:
        raise error
    
@router.post("/register")
async def register(name: str, email: str, password: str):
    try:
        response = await useCasesDictionary["auth"]["register"].execute(name=name, email=email, password=password)
        return response
    except Exception as error:
        raise error
        
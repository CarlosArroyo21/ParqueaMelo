from fastapi import FastAPI
from src.lib.auth.infrastructure.FastAPI_Auth_routes import router as auth_router
from src.lib.parking.infrastructure.FastAPI_Parking_Routes import router as parking_router


app = FastAPI()

app.include_router(auth_router)
app.include_router(parking_router)

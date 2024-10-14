from fastapi import FastAPI
from src.lib.auth.infrastructure.FastAPI_Auth_routes import router as auth_router


app = FastAPI()

app.include_router(auth_router)

import asyncio
import psycopg2

from src.lib.auth.domain.User import AuthUser
from src.lib.auth.domain.UserErrors import ExistingUser, IncorrectCredentials
from ..domain.AuthRepository import AuthRepository

connectionData={"host":"localhost", "dbname":"ParqueaMeloDB", "user":"postgres", "password":"admin", "port":5432}

class PostgresAuthRepository(AuthRepository):

    def __init__(self, connectionData):
        self.connectionData = connectionData
        
    def initConnection(self):
         return psycopg2.connect(
                host=str(self.connectionData["host"]),
                database=str(self.connectionData["dbname"]),
                user=str(self.connectionData["user"]),
                password=str(self.connectionData["password"]),
                port=int(self.connectionData["port"])
            )

    async def login(self, email: str, password: str):            
        with self.initConnection() as conn:
            with conn.cursor() as cursor:
                
                cursor.execute("SELECT * FROM usuarios WHERE email = %s",(email,))
                userFound = cursor.fetchone()
                
                if not userFound or (userFound[1] != password):
                    raise IncorrectCredentials()
                
                response = {
                    "statusCode": 200,
                    "message": "Usuario autenticado correctamente."
                }
                print(response)
        return response
        


    async def register(self, name: str, email: str, password: str):
        with self.initConnection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM usuarios WHERE email = %s",(email,))
                userFound = cursor.fetchone()
                
                if userFound:
                    raise ExistingUser()
                
                newUser = AuthUser(name=name, email=email, password=password)
                
                cursor.execute("""INSERT INTO usuarios (nombre, contrasena, email)
                               VALUES (%s, %s, %s)""",(newUser.name, newUser.password, newUser.email))
                
                response = {
                    "statusCode": 201,
                    "message": "Usuario registrado correctamente."
                }
                
                print(response)
        return response
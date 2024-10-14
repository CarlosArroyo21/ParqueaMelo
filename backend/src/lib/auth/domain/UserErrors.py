# class UserNotFoundError(Exception):
#     def __init__(self):
#         super().__init__()
#         self.message = "No hay un usuario con el email ingresado"
#         self.statusCode = 404

class IncorrectCredentials(Exception):
    def __init__(self):
        super().__init__()
        self.message = "El correo o la contraseña son incorrectos"
        self.statusCode = 404

class ExistingUser(Exception):
    def __init__(self):
        super().__init__()
        self.message = "El correo ingresado ya existe."
        self.statusCode = 409
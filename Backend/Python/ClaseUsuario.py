class usuario:
    def __init__(self,idUsuario,nombre,apellido,email,password,fechaNacimiento):
        self.IdUsuario = idUsuario
        self.Nombre = nombre
        self.Apellido = apellido
        self.Email = email
        self.Password = password
        self.Nacimiento = fechaNacimiento

    def mostrarNombre(self):
        print(self.Nombre)

    def cambiarPassword(self,password):
        self.Password = password


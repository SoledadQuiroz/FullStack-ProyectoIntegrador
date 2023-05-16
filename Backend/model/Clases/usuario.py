class Usuario:
    def __init__(self, nombre_usuario, email, contrasena):
        self.nombre_usuario = nombre_usuario
        self.email = email
        self.contrasena = contrasena
        self.esta_logueado = False
    
    def iniciar_sesion(self, email, contrasena):
        if self.email == email and self.contrasena == contrasena:
            self.esta_logueado = True
            print("Sesión iniciada correctamente")
        else:
            print("Error en la autenticación")
    
    def cerrar_sesion(self):
        self.esta_logueado = False
        print("Sesión cerrada correctamente")
    
    def cambiar_contrasena(self, nueva_contrasena):
        self.contrasena = nueva_contrasena
        print("Contraseña cambiada correctamente")
    
    def modificar_datos(self, nombre_usuario=None, email=None):
        if nombre_usuario is not None:
            self.nombre_usuario = nombre_usuario
            print("Nombre de usuario modificado correctamente")
        if email is not None:
            self.email = email
            print("Correo electrónico modificado correctamente")

import mysql.connector 

class Conectar():
    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                user = 'root',
                password = '214172',
                db = 'gardeningfriend'
            )
            print("Conexion Lograda")
        except mysql.connector.Error as descripcionError:
            print('No se pudo conectar', descripcionError)

    #OPERACION CRUD: CREATE
    def crearUsuario(self,idUsuario,Nombre,Apellido,Email,Contraseña,FechaNacimiento):
        if self.conexion.is_connected():
            try:
                cursor= self.conexion.cursor()
                sentenciaSQL= "INSERT INTO usuario VALUES(%s,%s,%s,%s,%s,%s);"
                data=(idUsuario,Nombre,Apellido,Email,Contraseña,FechaNacimiento)

                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()
                print("Registro insertado con Exito")

            except:
                print("No se pudo insertar registro")

    #OPERACION CRUD: READ
    def buscarUsuario(self,nombre):
        if self.conexion.is_connected():
            try:
                cursor= self.conexion.cursor()
                sentenciaSQL= "SELECT * FROM usuario WHERE nombre LIKE '%p%';"
                cursor.execute(sentenciaSQL)
                resultadoREAD= cursor.fetchall()
                for READ in resultadoREAD:
                    print(READ)
                self.conexion.close()

            except:
                print("No se pudo leer los datos")

    #OPERACION CRUD: UPDATE
    def cambiarPassword(self,id,Contraseña):
        try:
            cursor= self.conexion.cursor()
            sentenciaSQL= """UPDATE usuario SET Contraseña= %s WHERE idUsuario = %s;"""
            data=(Contraseña,id)
            cursor.execute(sentenciaSQL,data)
            self.conexion.commit()
            print("registro actualizado")

        except mysql.connector.Error as error: 
            print("Fallo en actualizar {}".format(error))

        finally:
            if self.conexion.is_connected():
                self.conexion.close()
                print("MySQL connection is closed")


    #OPERACION CRUD: DELETE
    def EliminarUsuario(self,id):
        if self.conexion.is_connected():
            try:
                cursor= self.conexion.cursor()
                sentenciaSQL= """DELETE FROM usuario WHERE idUsuario = %s;"""
                data= id
                cursor.execute(sentenciaSQL,(data,))

                self.conexion.commit()
                self.conexion.close()
                print("Registro Eliminado")
                
            except mysql.connector.Error as error: 
                print("Fallo en actualizar {}".format(error))





nuevoUsuario = Conectar()
#nuevoUsuario.crearUsuario(3,"Pablo","Gonzales","pablo_g@gmail.com","1234","2000-05-25")
#nuevoUsuario.buscarUsuario("Nombre")
#nuevoUsuario.cambiarPassword(3,'Gonzales12')
nuevoUsuario.EliminarUsuario(3)
print(nuevoUsuario)

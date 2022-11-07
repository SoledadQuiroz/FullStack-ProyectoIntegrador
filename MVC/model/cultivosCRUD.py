import mysql.connector
from mysql.connector import Error

class Cultivos():
    def __init__(self) -> None:
        try:
            self.connection= mysql.connector.connect(
                host='localhost',
                database='gardeningfriend',
                user='root',
                password='214172')
            if self.connection.is_connected():
                db_info= self.connection.get_server_info()
                print("Conectando a la version de MySQL Server ", db_info)
                cursor= self.connection.cursor()
                cursor.execute("select database();")
                record= cursor.fetchone()
                cursor.close()
                print("Estas conectado a la bd:", record) 

        except Error as e:
            print("Error mientras se conectaba a MySQL", e)


    #OPERACION CRUD: CREATE
    def insertarCultivo(self,idCultivo,Nombre,Tipo,Categoria,Favorito,
                        Usuario_idUsuario):
        try:
            cursor= self.connection.cursor()
            mySql_insert_query= """INSERT INTO cultivo(idCultivo,
                            Nombre,Tipo,Categoria,Favorito,Usuario_idUsuario)
                            VALUES(%s,%s,%s,%s,%s,%s);"""
            record=(idCultivo,Nombre,Tipo,Categoria,Favorito,Usuario_idUsuario)
            cursor.execute(mySql_insert_query, record)
            self.connection.commit()
            print("Registro insertado con exito")

        except mysql.connector.Error as e:
            print("Fallo en insertar el registro".format(e))

        finally:
            if self.connection.is_connected():
                cursor.close()
                self.connection.close()
                print("Conexion con MySQL cerrada")


    #OPERACION CRUD: READ
    def mostrarCultivo(self,idCultivo):
        try:
            cursor= self.connection.cursor()
            sql_select_query= """SELECT * FROM cultivo WHERE idCultivo = %s;"""
            cursor.execute(sql_select_query,(idCultivo,))
            record= cursor.fetchall()

            for row in record:
                print("IdCultivo = ", row[0], )
                print("Nombre = ", row[1])
                print("Tipo = ", row[2])
                print("Categoria = ", row[3])
                print("Favorito = ", row[4])
                print("idUsuario = ", row[5], "\n")
            self.connection.close()

        except mysql.connector.Error as e:
            print("Fallo en obtener el registro: {}".format(e))
    

    #OPERACION CRUD: UPDATE
    def agregarFavoritos(self,idCultivo,Favorito):
        try:
            cursor= self.connection.cursor()
            sql_update_query= """UPDATE cultivo SET Favorito = %s WHERE
                            idCultivo = %s;"""
            data= (Favorito,idCultivo)
            cursor.execute(sql_update_query,data)
            self.connection.commit()
            print("Registro actualizado con exito")

        except mysql.connector.Error as e:
            print("Fallo en actualizar el registro: {}".format(e))

        finally:
            if self.connection.is_connected():
                cursor.close()
                self.connection.close()
                print("Conexion con MySQL cerrada")

    #OPERACION CRUD: DELETE
    def eliminarCultivo(self,idCultivo):
        try:
            cursor= self.connection.cursor()
            sql_delete_query= """DELETE FROM cultivo WHERE idCultivo = %s;"""
            cultivoId= (idCultivo)
            cursor.execute(sql_delete_query,(cultivoId,))
            self.connection.commit()
            print("Registro eliminado con exito")

        except mysql.connector.Error as e:
            print("Fallo en eliminar el registro: {}".format(e))

        finally:
            if self.connection.is_connected():
                cursor.close()
                self.connection.close()
                print("Conexion con MySQL cerrada")
        


nuevoCultivo = Cultivos()
#nuevoCultivo.insertarCultivo(3,"Tomate","Sin Flor","Fruta","No",1)
#nuevoCultivo.mostrarCultivo(3)
#nuevoCultivo.agregarFavoritos(3,'Si')
nuevoCultivo.eliminarCultivo(3)
print(nuevoCultivo)
    

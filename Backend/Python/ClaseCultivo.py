class Cultivo:
    def __init__(self,idCultivo,nombre,tipo,categoria,favorito):
        self.IdCultivo = idCultivo
        self.Nombre - nombre
        self.Tipo = tipo
        self.Categoria = categoria
        self.Favorito = favorito

    def agregarFavorito(self):
        if self.Favorito == True:
            self.Favorito = False
        else:
            self.Favorito = True
        


#--Clase Crecimiento--#
class Crecimiento:
    def __init__(self,tiempoGerminacio,tiempoSiembra,tiempoCosecha):
        self.Germinacion = tiempoGerminacion
        self.Siembra = tiempoSiembra
        self.Cosecha = tiempoCosecha

    def mostrarTiempos(self):
        print("El tiempo de germinacion es" + self.Germinacion +
              "/n El tiempo de siembra es" + self.Siembra +
              "/n El tiempo de cosecha es" + self.Cosecha)



#--Clase Temperatura--#
class Temperatura:
    def __init__(self,valorTemperatura,fecha,hora):
        self.Temperatura = valorTemperatura
        self.Fecha = fecha
        self.hora = hora

    def mostrarTemperatura(self):
        print(self.Temperatura)

    def mostrarFechayHora(self):
        print(self.Fecha, self.Hora)

        

#--Clase Riego--#
class Riego:
    def __init__(self,modo,fecha,hora):
        self.Modo = modo
        self.Fecha = fecha
        self.Hora = hora

    def mostrarModo(self):
        print(self.Modo)

    def mostrarFechayHora(self):
        print(self.Fecha, self.Hora)


#--Clase Iluminacion--#

class Iluminacion:
    def __init__(self,descripcion):
        self.Descripcion = descripcion

    def mostrarDescripcion(self):
        print(self.Descripcion)



#--Clase Jardin--#
class Jardin:
    def __init__(self,cultivos):
        self.Cultivos = cultivos

    def mostrarHuerta(self):
        print(self.Cultivos)
    









        

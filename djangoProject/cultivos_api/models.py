from django.db import models

class Cultivo(models.Model):
    estaciones = [
        ('autumn','Otoño'),
        ('winter','Invierno'),
        ('spring','Primavera'),
        ('summer','Verano'),
        ('autumn-winter','Otoño, Invierno'),
        ('spring-summer','Primavera, Verano'),
        ('all','Todas las estaciones'),
    ]

    luzSolar = [
        ('poca','Poca luz'),
        ('moderada','Luz Moderada'),
        ('mucha','Bastante Luz')
    ]

    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    imagen = models.CharField(max_length=250)
    tipo = models.CharField(max_length=50)
    germina = models.IntegerField()
    cosecha = models.IntegerField()
    temporada = models.CharField(max_length=15, choices=estaciones)
    temperaturaMax = models.IntegerField()
    temperaturaMin = models.IntegerField()
    riego = models.CharField(max_length=50)
    luz = models.CharField(max_length=15, choices=luzSolar)
    profundidadSembrado = models.IntegerField()
    espacioPlantas = models.IntegerField()


class Meta:
    db_table = "Cultivo"

def __str__(self):
    if self.name==None:
        return "ERROR-CULTIVO NAME IS NULL"
    return self.name
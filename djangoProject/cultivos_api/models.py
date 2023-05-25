from django.db import models

class Cultivo(models.Model):
    estaciones = [
        ('Otoño','autumn'),
        ('Invierno','winter'),
        ('Primavera','spring'),
        ('Verano','summer'),
        ('Otoño, Invierno','autumn-winter'),
        ('Primavera, Verano','spring-summer'),
        ('Todas las estaciones','all'),
    ]

    luzSolar = [
        ('Poca luz','poca'),
        ('Luz Moderada','moderada'),
        ('Bastante Luz','mucha')
    ]

    riegoCantidad = [
        ('Mucha o diariamente','bastante'),
        ('Moderada o cada 3 días','moderada'),
        ('poca o cada 5 días','poca'),
    ]

    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    imagen = models.CharField(max_length=250)
    tipo = models.CharField(max_length=50)
    germina = models.IntegerField()
    cosecha = models.IntegerField()
    temporada = models.CharField(max_length=50, choices=estaciones)
    temperaturaMax = models.IntegerField()
    temperaturaMin = models.IntegerField()
    riego = models.CharField(max_length=50, choices=riegoCantidad)
    luz = models.CharField(max_length=15, choices=luzSolar)
    profundidadSembrado = models.IntegerField()
    espacioPlantas = models.IntegerField()


class Meta:
    db_table = "Cultivo"

def __str__(self):
    if self.name==None:
        return "ERROR-CULTIVO NAME IS NULL"
    return self.name
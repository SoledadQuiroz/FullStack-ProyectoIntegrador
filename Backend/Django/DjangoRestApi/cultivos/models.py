from django.db import models

# Create your models here.
class Crop(models.Model):
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
        ('Regular o cada 3 días','regular'),
        ('poca o cada 5 días','poca'),
    ]

    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    imagen = models.CharField(max_length=250)
    tipo = models.CharField(max_length=50)
    germina = models.IntegerField()
    cosecha = models.IntegerField()
    temporada = models.CharField(max_length=50, choices=estaciones, blank=False)
    temperaturaMax = models.IntegerField()
    temperaturaMin = models.IntegerField()
    riego = models.CharField(max_length=50, choices=riegoCantidad, blank=False)
    luz = models.CharField(max_length=15, choices=luzSolar, blank=False)
    profundidadSembrado = models.IntegerField()
    espacioPlantas = models.IntegerField()

class Meta:
    db_table = 'crop'
    verbose_name = 'Crop'
    verbose_name_plural = 'Crops'

def __str__(self):
    if self.nombre==None:
        return "ERROR-CROPS NOMBRE IS NULL"
    return self.nombre
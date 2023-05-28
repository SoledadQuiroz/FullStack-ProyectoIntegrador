from django.db import models

# Create your models here.
class Productos(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    imagen = models.CharField(max_length=250)
    precio = models.IntegerField()
    categoria = models.CharField(max_length=100)
    peso = models.FloatField()
    dimensiones = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=250)
    stock = models.IntegerField()

class Meta:
    db_table = "Productos"

def __str__(self):
    if self.nombre==None:
        return "ERROR-PRODUCTOS NOMBRE IS NULL"
    return self.nombre
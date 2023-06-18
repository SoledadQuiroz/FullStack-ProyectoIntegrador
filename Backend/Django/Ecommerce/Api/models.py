from django.db import models
from datetime import datetime
# Create your models here.
class user(models.Model):
    
    nombre=models.CharField(max_length=1000, blank=False)
    apellido=models.CharField(max_length=1000, blank=False)
    fecha_nac = models.DateField(default=datetime.now)
    correo=models.EmailField(max_length=1000, blank=False)
    password=models.CharField(blank=False, null=False, max_length=50)
    
    class Meta:
        db_table = 'user'
        verbose_name = 'User'
        verbose_name_plural = 'Users'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class product(models.Model):
    
    nombre=models.CharField(max_length=1000, blank=False)
    costo=models.IntegerField()
    valor=models.IntegerField()
    cantidad=models.IntegerField()
    descripcion = models.CharField(max_length=250, blank=False)
    
    class Meta:
        db_table = 'product'
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
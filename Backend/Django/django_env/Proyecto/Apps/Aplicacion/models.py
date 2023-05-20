from django.db import models

# Create your models here.
class provincia(models.Model):
    id_provincia=models.AutoField(primary_key=True)
    nombre=models.CharField(blank=True, null=True, max_length=200)
    def __str(self):
        return"{}".format(self.nombre)
    def __str__(self):
        return self.nombre
    
class ciudad(models.Model):
    id_ciudad=models.AutoField(primary_key=True)
    nombre=models.CharField(blank=True, null=True, max_length=200)
    id_provincia=models.ForeignKey(provincia, on_delete=models.CASCADE)
    def __str(self):
        return"{}".format(self.nombre)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name_plural='Ciudades'
    
class usuario(models.Model):
    id_usuario=models.AutoField(primary_key=True)
    nombre=models.CharField(blank=True,null=True, max_length=200)
    apellido=models.CharField(blank=True, null=True, max_length=200)
    direccion=models.CharField(blank=True, max_length=200)
    correo=models.EmailField(blank=True, max_length=200)
    provincia=models.CharField(max_length=200)
    localidad=models.CharField(max_length=200)
    telefono=models.BigIntegerField()
    password=models.CharField(blank=True, null=True, max_length=50)
    id_ciudad=models.ForeignKey(ciudad, on_delete=models.CASCADE)
    def nombre_completo(self):
        return "{} , {}".format(self.apellido,self.nombre)
    def __str__(self):
        return self.nombre_completo()


class cultivo(models.Model):
    id_cultivo=models.AutoField(primary_key=True)
    tipo=models.CharField(blank=True, null=True, max_length=200)
    categoria=models.CharField(blank=True, null=True, max_length=200)
    favorito=models.CharField(blank=True, null=True, max_length=200)
    def __str(self):
        return"{}".format(self.tipo)
    def __str__(self):
        return self.tipo
    
class crecimiento(models.Model):
    id_crecimiento=models.AutoField(primary_key=True)
    cosecha=models.CharField(blank=True, null=True, max_length=200)
    siembra=models.CharField(blank=True, null=True, max_length=200)
    germinacion=models.CharField(blank=True, null=True, max_length=200)
    id_cultivo=models.ForeignKey(cultivo, on_delete=models.CASCADE)
    def __str(self):
        return"{}".format(self.cosecha)
    def __str__(self):
        return self.cosecha
    
class jardin(models.Model):
    id_jardin=models.AutoField(primary_key=True)
    nombre_cultivo=models.CharField(blank=True, null=True, max_length=200)
    fecha_siembra=models.DateTimeField(auto_now_add=True)
    fecha_germinacion=models.DateTimeField(auto_now_add=True)
    id_cultivo=models.ForeignKey(cultivo, on_delete=models.CASCADE)
    id_crecimiento=models.ForeignKey(crecimiento, on_delete=models.CASCADE)
    id_usuario=models.ForeignKey(usuario, on_delete=models.CASCADE)
    def __str(self):
        return"{}".format(self.nombre_cultivo)
    def __str__(self):
        return self.nombre_cultivo
    class Meta:
        verbose_name_plural='Jardines'
    
    
class tipo_prod(models.Model):
    id_tipo_prod=models.AutoField(primary_key=True)
    nombre=models.CharField(blank=True, null=True, max_length=200)
    def __str(self):
        return"{}".format(self.nombre)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name_plural='Tipo_productos'
    
class producto(models.Model):
    id_producto=models.AutoField(primary_key=True)
    nombre=models.CharField(blank=True, max_length=200, null=True)
    costo=models.IntegerField()
    valor=models.IntegerField()
    cantidad=models.IntegerField()
    fecha_ingreso=models.DateField(auto_now_add=True)
    id_tipo_prod=models.ForeignKey(tipo_prod, on_delete=models.CASCADE)
    def __str(self):
        return"{}".format(self.nombre)
    def __str__(self):
        return self.nombre

class factura(models.Model):
    id_factura=models.AutoField(primary_key=True)
    nombre=models.CharField(blank=True, null=True, max_length=200)
    total=models.IntegerField()
    tipo=models.IntegerField()
    fecha_apertura=models.DateField(auto_now_add=True)
    fecha_cierre=models.DateField(auto_now_add=True)
    dir_envio=models.TextField(blank=True, null=True, max_length=300)
    id_usuario=models.ForeignKey(usuario, on_delete=models.CASCADE)
    def __str(self):
        return"{}".format(self.nombre)
    def __str__(self):
        return self.nombre

class venta(models.Model):
    id_venta=models.AutoField(primary_key=True)
    descripcion=models.TextField(blank=True, null=True, max_length=300)
    cantidad=models.IntegerField()
    descuento=models.FloatField()
    id_producto=models.ForeignKey(producto, on_delete=models.CASCADE)
    id_factura=models.ForeignKey(factura, on_delete= models.CASCADE)
    def __str__(self):
        return self.descripcion
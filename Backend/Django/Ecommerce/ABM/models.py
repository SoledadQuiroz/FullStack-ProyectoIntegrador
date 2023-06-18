from django.db import models
from datetime import datetime
# Create your models here.
class provincia(models.Model):
    id_provincia=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=1000, blank=False)
    class Meta:
        db_table = 'provincia'
        verbose_name = 'Provincia'
        verbose_name_plural = 'Provincias'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class ciudad(models.Model):
    id_ciudad=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=1000, blank=False)
    id_provincia=models.ForeignKey(provincia, on_delete=models.CASCADE)
    class Meta:
        db_table = 'ciudad'
        verbose_name = 'Ciudad'
        verbose_name_plural = 'Ciudades'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class municipio(models.Model):
    id_municipio=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=1000, blank=False)
    id_provincia=models.ForeignKey(provincia, on_delete=models.CASCADE)
    class Meta:
        db_table = 'municipio'
        verbose_name = 'Municipio'
        verbose_name_plural = 'Municipios'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class usuario(models.Model):
    id_usuario=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=1000, blank=False)
    apellido=models.CharField(max_length=1000, blank=False)
    direccion=models.TextField(max_length=1000, blank=False)
    correo=models.EmailField(max_length=1000, blank=False)
    provincia=models.CharField(max_length=1000, blank=False)
    localidad=models.CharField(max_length=1000, blank=False)
    telefono=models.IntegerField()
    password=models.CharField(blank=False, null=False, max_length=50)
    id_ciudad=models.ForeignKey(ciudad, on_delete=models.CASCADE)
    class Meta:
        db_table = 'usuario'
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
  

class cultivo(models.Model):
    id_cultivo = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=1000, blank=False)
    imagen = models.CharField(max_length=250, blank=False)
    categoria = models.CharField(max_length=1000, blank=False)
    tipo = models.CharField(max_length=1000, blank=False)
    favorito = models.CharField(max_length=1000, blank=False)
    class Meta:
        db_table = 'cultivo'
        verbose_name = 'Cultivo'
        verbose_name_plural = 'Cultivos'
    def __unicode__(self):
        return self.tipo
    def __str__(self):
        return self.tipo
    
class crecimiento(models.Model):
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

    id_crecimiento = models.AutoField(primary_key=True)
    cosecha = models.CharField(max_length=1000, blank=False)
    siembra = models.CharField(max_length=1000, blank=False)
    germinacion = models.CharField(max_length=1000, blank=False)
    temporada = models.CharField(max_length=50, choices=estaciones, blank=False)
    temperaturaMax = models.IntegerField()
    temperaturaMin = models.IntegerField()
    riego = models.CharField(max_length=50, choices=riegoCantidad, blank=False)
    luz = models.CharField(max_length=15, choices=luzSolar, blank=False)
    profundidadSembrado = models.IntegerField()
    espacioPlantas = models.IntegerField()
    id_cultivo = models.ForeignKey(cultivo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'crecimiento'
        verbose_name = 'Crecimiento'
        verbose_name_plural = 'Crecimientos'
    def __unicode__(self):
        return self.cosecha
    def __str__(self):
        return self.cosecha
    
class jardin(models.Model):
    id_jardin=models.AutoField(primary_key=True)
    nombre_cultivo=models.CharField(max_length=1000, blank=False)
    fecha_siembra=models.DateField(default=datetime.now)
    fecha_germinacion=models.DateField(default=datetime.now)
    id_cultivo=models.ForeignKey(cultivo, on_delete=models.CASCADE)
    id_crecimiento=models.ForeignKey(crecimiento, on_delete=models.CASCADE)
    id_usuario=models.ForeignKey(usuario, on_delete=models.CASCADE)
    class Meta:
        db_table = 'jardin'
        verbose_name = 'Jardin'
        verbose_name_plural = 'Jardines'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
    
class tipo_produto(models.Model):
    id_tipo_producto=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=1000, blank=False)
    class Meta:
        db_table = 'tipo_producto'
        verbose_name = 'Tipo_Producto'
        verbose_name_plural = 'Tipos_Productos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class producto(models.Model):
    id_producto=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=1000, blank=False)
    imagen = models.CharField(max_length=250, blank=False)
    costo=models.IntegerField()
    valor=models.IntegerField()
    cantidad=models.IntegerField()
    peso = models.FloatField()
    dimensiones = models.CharField(max_length=100, blank=False)
    descripcion = models.CharField(max_length=250, blank=False)
    fecha_ingreso=models.DateField(default=datetime.now)
    id_tipo_prod=models.ForeignKey(tipo_produto, on_delete=models.CASCADE)
    class Meta:
        db_table = 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class factura(models.Model):
    id_factura=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=1000, blank=False)
    total=models.IntegerField()
    tipo=models.IntegerField()
    fecha_apertura=models.DateField(default=datetime.now)
    fecha_cierre=models.DateField(default=datetime.now)
    dir_envio=models.TextField(max_length=1000, blank=False)
    id_usuario=models.ForeignKey(usuario, on_delete=models.CASCADE)
    class Meta:
        db_table = 'factura'
        verbose_name = 'Factura'
        verbose_name_plural = 'Facturas'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class venta(models.Model):
    id_venta=models.AutoField(primary_key=True)
    descripcion=models.TextField(max_length=1000, blank=False)
    cantidad=models.IntegerField()
    descuento=models.FloatField()
    id_producto=models.ForeignKey(producto, on_delete=models.CASCADE)
    id_factura=models.ForeignKey(factura, on_delete= models.CASCADE)
    class Meta:
        db_table = 'venta'
        verbose_name = 'Venta'
        verbose_name_plural = 'Ventas'
    def __unicode__(self):
        return self.descripcion
    def __str__(self):
        return self.descripcion


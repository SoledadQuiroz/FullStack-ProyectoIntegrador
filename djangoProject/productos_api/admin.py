from django.contrib import admin
from .models import Productos

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list = ('id', 'nombre', 'imagen', 'precio', 'categoria', 'peso', 'dimensiones', 'descripcion', 'stock')
    admin.site.register(Productos)
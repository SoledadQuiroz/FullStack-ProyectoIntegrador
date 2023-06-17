from django.contrib import admin
from .models import CarritoCompras, Categoria, Cultivo
from .models import Producto
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin


# Register your models here.
class CultivoAdmin(admin.ModelAdmin):
    list_display = ("name" , "category")
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("nombre" , "descripcion")
class ProductoAdmin(admin.ModelAdmin):
    list_display = ("nombre", "imagen", "descripcion", "peso", "precio", "cantidad", "id_categoria")

@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass

admin.site.register(Cultivo, CultivoAdmin)
admin.site.register(Categoria,CategoriaAdmin)
admin.site.register(Producto,ProductoAdmin)
admin.site.register(CarritoCompras)
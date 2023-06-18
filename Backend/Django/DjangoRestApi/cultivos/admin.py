from django.contrib import admin
from .models import Crop

# Register your models here.

class CultivoAdmin(admin.ModelAdmin):
    list =(
        'nombre', 'tipo', 'imagen', 'germina', 'cosecha', 'temporada', 'temperaturaMax', 'temperaturaMin', 'riego', 'luz', 'profundidadSembrado', 'espacioPlantas')
    
    admin.site.register(Crop)

from django.contrib import admin
from .models import Cultivo

class UserAdmin(admin.ModelAdmin):
    list = ('id','nombre','imagen','tipo','germina','cosecha','temporada',
            'temperaturaMax','temperaturaMin','riego','luz','profundidadSembrado',
            'espacioPlantas')
    
    admin.site.register(Cultivo)
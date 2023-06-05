from django.contrib import admin
from .models import user
from .models import product
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display =('nombre','apellido','fecha_nac','correo','password')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'costo', 'valor', 'cantidad', 'descripcion')

admin.site.register(user, UserAdmin)
admin.site.register(product, ProductAdmin)

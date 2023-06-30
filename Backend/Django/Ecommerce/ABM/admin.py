from django.contrib import admin
from .models import provincia
from .models import ciudad
from .models import usuario
from .models import cultivo
from .models import crecimiento
from .models import jardin
from .models import tipo_produto
from .models import factura
from .models import producto
from .models import Deatalle_Factura
from .models import municipio


# Register your models here.
class ProvinciaAdmin(admin.ModelAdmin):
    list_display =('nombre','id_provincia')
class CiudadAdmin(admin.ModelAdmin):
    list_display =('nombre', 'id_ciudad')
class MunicipioAdmin(admin.ModelAdmin):
    list_display =('nombre', 'id_municipio')
class UsuarioAdmin(admin.ModelAdmin):
    list_display =('nombre', 'apellido', 'direccion', 'email', 'edad','telefono','password', 'id_usuario')
class CultivoAdmin(admin.ModelAdmin):
    list_display =('tipo', 'imagen', 'categoria', 'favorito', 'id_cultivo')
class CrecimientoAdmin(admin.ModelAdmin):
    list_display =('cosecha', 'siembra', 'germinacion', 'temporada', 'temperaturaMax', 'temperaturaMin', 'riego', 'luz', 'profundidadSembrado', 'espacioPlantas', 'id_crecimiento')
class JardinAdmin(admin.ModelAdmin):
    list_display =('nombre_cultivo', 'fecha_siembra', 'fecha_germinacion','id_jardin')
class Tipo_ProductoAdmin(admin.ModelAdmin):
    list_display =('nombre', 'id_tipo_producto')
class ProductoAdmin(admin.ModelAdmin):
    list_display =('nombre', 'imagen', 'precio','cantidad', 'peso','descripcion', 'fecha_ingreso','id_producto')
class FacturaAdmin(admin.ModelAdmin):
    list_display =('nombre','total','tipo','dir_envio', 'id_factura')
class Detalle_FacturaAdmin(admin.ModelAdmin):
    list_display =('descripcion','cantidad', 'descuento','id_prod_factura')

admin.site.register(provincia, ProvinciaAdmin)
admin.site.register(ciudad, CiudadAdmin)
admin.site.register(municipio, MunicipioAdmin)
admin.site.register(usuario,UsuarioAdmin)
admin.site.register(cultivo,CultivoAdmin)
admin.site.register(crecimiento,CrecimientoAdmin)
admin.site.register(jardin,JardinAdmin)
admin.site.register(tipo_produto, Tipo_ProductoAdmin)
admin.site.register(producto,ProductoAdmin)
admin.site.register(factura,FacturaAdmin)
admin.site.register(Deatalle_Factura,Detalle_FacturaAdmin)
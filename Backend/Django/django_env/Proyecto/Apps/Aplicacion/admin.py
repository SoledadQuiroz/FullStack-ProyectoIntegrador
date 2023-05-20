from django.contrib import admin
from django.contrib import admin
from .models import provincia
from .models import ciudad
from .models import usuario
from .models import cultivo
from .models import crecimiento
from .models import jardin
from .models import tipo_prod
from .models import factura
from .models import producto
from .models import venta
# Register your models here.
admin.site.register(provincia)
admin.site.register(ciudad)
admin.site.register(usuario)
admin.site.register(cultivo)
admin.site.register(crecimiento)
admin.site.register(jardin)
admin.site.register(tipo_prod)
admin.site.register(producto)
admin.site.register(factura)
admin.site.register(venta)
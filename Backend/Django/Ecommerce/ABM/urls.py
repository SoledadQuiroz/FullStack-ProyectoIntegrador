from .views import UsuarioViewSet, CultivoViewSet, TipoProductoViewSet
from rest_framework.routers import DefaultRouter
from ABM import views

router = DefaultRouter()
router.register(r'usuarios', views.UsuarioViewSet, basename='usuarios')
router.register(r'cultivos', views.CultivoViewSet, basename='cultivos')
router.register(r'tipo-productos', views.TipoProductoViewSet, basename='tipo-productos')
router.register(r'productos', views.ProductoViewSet, basename='productos')
router.register(r'crecimiento', views.CrecimientoViewSet, basename='crecimiento')
urlpatterns = router.urls
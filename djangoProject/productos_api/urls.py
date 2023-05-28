from productos_api.views import ProductosViewSet
from rest_framework.routers import DefaultRouter
from productos_api import views

router = DefaultRouter()
router.register(r'productos', views.ProductosViewSet, basename='productos')
urlpatterns = router.urls
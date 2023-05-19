from cultivos_api.views import CultivoViewSet
from rest_framework.routers import DefaultRouter
from cultivos_api import views

router = DefaultRouter()
router.register(r'cultivos', views.CultivoViewSet, basename='cultivos')
urlpatterns = router.urls

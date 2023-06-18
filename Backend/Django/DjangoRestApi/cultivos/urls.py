from .views import CropViewSet
from rest_framework.routers import DefaultRouter
from cultivos import views

router = DefaultRouter()
router.register(r'crops', views.CropViewSet, basename='crops')
urlpatterns = router.urls
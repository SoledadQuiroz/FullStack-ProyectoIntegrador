from .views import UserViewSet
from rest_framework.routers import DefaultRouter
from Api import views

router = DefaultRouter()
router.register(r'user', views.UserViewSet, basename='user')
router.register(r'product', views.ProductViewSet, basename='product')
urlpatterns = router.urls
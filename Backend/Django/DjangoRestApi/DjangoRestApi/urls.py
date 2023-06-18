"""DjangoRestApi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from django_api import views

# Api router
router = routers.DefaultRouter()
router.register('productos', views.verProductos, basename='Producto')
router.register('categorias', views.verCategorias, basename='Categoria')
# router.register('cultivos', views.CultivoView, basename='Cultivo')

urlpatterns = [
    path('admin/', admin.site.urls),
    # Api routes
    path('django_api/', include('django_api.urls')),
    path('django_api/', include(router.urls)),
    path('cultivos/', include('cultivos.urls'))
]

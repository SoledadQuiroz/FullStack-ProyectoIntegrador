from django.urls import path
from . import views

urlpatterns = [
    path('api/registro/', views.registro, name="registro")
    
]
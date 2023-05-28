from django.shortcuts import render
from .models import Productos
from .serializers import ProductosSerializer
from rest_framework import viewsets

# Create your views here.
class ProductosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()
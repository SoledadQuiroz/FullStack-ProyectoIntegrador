from django.shortcuts import render
from .models import cultivo, tipo_produto, usuario, producto, crecimiento
from rest_framework import viewsets
from .serializers import CultivoSerializer, TipoProductoSerializer, UsuarioSerializer, ProductoSerializer, CrecimientoSerializer

# Create your views here.

class CultivoViewSet(viewsets.ModelViewSet):
    serializer_class = CultivoSerializer
    queryset = cultivo.objects.all()

class TipoProductoViewSet(viewsets.ModelViewSet):
    serializer_class = TipoProductoSerializer
    queryset = tipo_produto.objects.all()

class UsuarioViewSet(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = usuario.objects.all()

class ProductoViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = producto.objects.all()

class CrecimientoViewSet(viewsets.ModelViewSet):
    serializer_class = CrecimientoSerializer
    queryset = crecimiento.objects.all()
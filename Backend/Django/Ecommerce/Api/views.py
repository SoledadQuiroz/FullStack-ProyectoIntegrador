from django.shortcuts import render
from .models import user
from .models import product
from rest_framework import viewsets
from .serializers import UserSerializer
from .serializers import ProductSerializer
# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = user.objects.all()
    
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = product.objects.all()
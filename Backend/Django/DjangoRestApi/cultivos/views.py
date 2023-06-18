from django.shortcuts import render
from .models import Crop
from .serializers import CropSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

# Create your views here.

class CropViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = CropSerializer
    queryset = Crop.objects.all()

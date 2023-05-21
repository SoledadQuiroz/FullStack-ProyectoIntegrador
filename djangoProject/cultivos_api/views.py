from django.shortcuts import render
from .models import Cultivo
from .serializers import CultivoSerializer
from rest_framework import viewsets

class CultivoViewSet(viewsets.ModelViewSet):
    serializer_class = CultivoSerializer
    queryset = Cultivo.objects.all()

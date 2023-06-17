from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import CarritoCompras, Categoria, Producto, Cultivo, Garden
from django.contrib.auth.hashers import make_password
from django.db import models

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    name = serializers.CharField(required=True)
    birth_date = serializers.DateField(required=True)
    password = serializers.CharField(min_length=8)

    class Meta:
        model = get_user_model()
        fields = ('username', 'name', 'email', 'birth_date', 'password')

    def create(self, validated_data):
        # Hash the password before saving the user
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
    
class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = '__all__'

class CultivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cultivo
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        #fields = ('nombre', 'descripcion')

class ProductoSerializer(serializers.ModelSerializer):
    id_categoria = serializers.SlugRelatedField(
        queryset=Categoria.objects.all(), slug_field="nombre"
    )

    class Meta:
        model = Producto
        fields = '__all__'
        #fields = ('codigodeBarras',"nombre" ,'descripcion','peso','precio','cantidad')


class CarritoCompraSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.CharField(max_length=200)
    producto_precio = serializers.FloatField()
    producto_cantidad = serializers.IntegerField(required=False, default=1)

    class Meta:
        model = CarritoCompras
        fields = ('__all__')
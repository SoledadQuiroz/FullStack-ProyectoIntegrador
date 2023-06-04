from rest_framework import serializers
from .models import cultivo, crecimiento, producto, tipo_produto, usuario

class CrecimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = crecimiento
        fields = '__all__'

class CultivoSerializer(serializers.ModelSerializer):
    crecimiento_set = CrecimientoSerializer(many=True)
    class Meta:
        model = cultivo
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = producto
        fields = '__all__'

class TipoProductoSerializer(serializers.ModelSerializer):
    producto_set = ProductoSerializer(many=True)
    class Meta:
        model = tipo_produto
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields = '__all__'
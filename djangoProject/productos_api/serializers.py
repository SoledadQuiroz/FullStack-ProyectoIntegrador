from rest_framework import serializers
from productos_api.models import Productos

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'

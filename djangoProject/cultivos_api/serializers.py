from rest_framework import serializers
from cultivos_api.models import Cultivo

class CultivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cultivo
        fields = '__all__'
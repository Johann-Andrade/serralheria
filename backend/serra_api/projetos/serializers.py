from rest_framework import serializers
from .models import Casa, Obra
class CasaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casa
        fields = '__all__'
class ObraSerializer(serializers.ModelSerializer):
    casa = CasaSerializer(read_only=True)
    casa_id = serializers.PrimaryKeyRelatedField(queryset=Casa.objects, source='casa', write_only=True)
    class Meta:
        model = Obra
        fields = '__all__'
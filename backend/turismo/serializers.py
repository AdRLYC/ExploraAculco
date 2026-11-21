from rest_framework import serializers
from .models import LugarTuristico, ServicioTuristico, Contacto, Comentario, Favorito

class LugarTuristicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LugarTuristico
        fields = '__all__'

class ServicioTuristicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicioTuristico
        fields = '__all__'

class ContactoSerializer(serializers.ModelSerializer):
    mensaje = serializers.CharField(max_length=1000, write_only=True)

    class Meta:
        model = Contacto
        fields = ("id", "nombre", "correo", "telefono", "fecha_visita", "lugar_interes", "mensaje")
        extra_kwargs = {
            field: {"write_only": True}
            for field in ("nombre", "correo", "telefono", "fecha_visita", "lugar_interes")
        }

class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = '__all__'

class FavoritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = '__all__'
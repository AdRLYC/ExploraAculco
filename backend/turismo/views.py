from rest_framework import mixins, viewsets
from rest_framework.permissions import AllowAny, IsAdminUser, SAFE_METHODS

from .models import LugarTuristico, ServicioTuristico, Contacto, Comentario
from .serializers import (
    LugarTuristicoSerializer,
    ServicioTuristicoSerializer,
    ContactoSerializer,
    ComentarioSerializer,
)


class CatalogoViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        permission = AllowAny if self.request.method in SAFE_METHODS else IsAdminUser
        return [permission()]


class LugarTuristicoViewSet(CatalogoViewSet):
    queryset = LugarTuristico.objects.order_by("id")
    serializer_class = LugarTuristicoSerializer


class ServicioTuristicoViewSet(CatalogoViewSet):
    queryset = ServicioTuristico.objects.order_by("id")
    serializer_class = ServicioTuristicoSerializer


class ContactoViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer
    permission_classes = [AllowAny]
    authentication_classes = []


class ComentarioViewSet(viewsets.ModelViewSet):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer
    permission_classes = [IsAdminUser]

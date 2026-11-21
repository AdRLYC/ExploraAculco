from django.contrib import admin

from .models import LugarTuristico, ServicioTuristico, Comentario, Contacto


@admin.register(LugarTuristico)
class LugarTuristicoAdmin(admin.ModelAdmin):
    list_display = ("nombre", "categoria", "ubicacion", "fecha_actualizacion")
    list_filter = ("categoria",)
    search_fields = ("nombre", "ubicacion")
    readonly_fields = ("fecha_actualizacion",)


admin.site.site_header = "Administración de Explora Aculco"
admin.site.register(ServicioTuristico)
admin.site.register(Comentario)
admin.site.register(Contacto)

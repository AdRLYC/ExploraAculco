from pathlib import Path

from django.conf import settings
from django.contrib import admin
from django.core.exceptions import SuspiciousFileOperation
from django.http import FileResponse, Http404
from django.urls import include, path
from django.utils._os import safe_join
from django.views.generic import TemplateView


def imagen_turistica(request, archivo):
    if Path(archivo).suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        raise Http404
    try:
        ruta = safe_join(settings.MEDIA_ROOT, "lugares", archivo)
        return FileResponse(open(ruta, "rb"))
    except (OSError, SuspiciousFileOperation):
        raise Http404 from None


urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html")),
    path("admin/", admin.site.urls),
    path("api/", include("turismo.urls")),
    path("media/lugares/<str:archivo>", imagen_turistica),
]

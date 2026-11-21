#!/bin/sh
set -eu
python manage.py migrate --noinput
python manage.py collectstatic --noinput

if [ -n "${MEDIA_ROOT:-}" ]; then
    mkdir -p "$MEDIA_ROOT/lugares"
    for foto in media/lugares/*; do
        destino="$MEDIA_ROOT/lugares/${foto##*/}"
        if [ ! -e "$destino" ]; then
            cp "$foto" "$destino"
        fi
    done
fi

exec gunicorn backend.wsgi:application --bind "0.0.0.0:${PORT:-8000}"

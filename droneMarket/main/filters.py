from django.db import models
from django_filters import rest_framework as filters
from .models import Images


class ImageFilter(filters.FilterSet):
    class Meta:
        model = Images
        fields = {
            'id_image': ['exact'],
            'id_product': ['exact'],
        }
        filter_overrides = {
            models.FileField: {
                'filter_class': filters.CharFilter,
            },
        }

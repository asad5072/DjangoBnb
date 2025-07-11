from rest_framework import serializers
from .models import Property

class PropertiesListSerializer(serializers.ModelSerializer):
    # image_url = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = (
            'id',
            'title',
            'price_per_night',
            'image_url',
        )

    # def get_image_url(self, obj):
    #     request = self.context.get('request')
    #     if obj.image and request:
    #         return request.build_absolute_uri(obj.image.url).replace("localhost", "127.0.0.1")
    #     return None

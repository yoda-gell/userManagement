from rest_framework import serializers
from .models import Tik


class TikSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tik
        fields = '__all__'
        
        

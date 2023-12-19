from rest_framework import serializers
from .models import User, Client
from mission.serializers import MissionSerializer
from tik.serializers import TikSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class ClientSerializer(UserSerializer):
    missions = MissionSerializer(many=True, read_only=True)
    tik = TikSerializer(many=True, read_only=True)
    
    class Meta:
        model = Client
        fields = '__all__'

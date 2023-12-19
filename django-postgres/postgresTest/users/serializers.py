from rest_framework import serializers
from .models import User,Client

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class ClientSerializer(UserSerializer):
    class Meta:
        model = Client
        fields = '__all__'


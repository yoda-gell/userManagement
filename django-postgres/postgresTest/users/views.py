from .models import User ,Client,Admin
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import UserSerializer,ClientSerializer,AdminSerializer
from django.shortcuts import get_object_or_404

 
 
@api_view(['GET'])
def client_list(request):
    events = Client.objects.all()
    serializer = ClientSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def client_add(request):
    serializer = ClientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def client_del(request,pk):
    event = get_object_or_404(Client, pk=pk)
    event.delete()
    return Response('the user delete',status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def client_up(request,pk):
    event = get_object_or_404(Client, pk=pk)
    serializer = ClientSerializer(event, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def client_find(request,pk):
    event = get_object_or_404(Client, pk=pk)
    serializer = ClientSerializer(event)
    return Response(serializer.data)

@api_view(['POST'])
def login(request):
    method = request.method
    if method == 'POST':
        email = request.data['email']
        password = request.data['password']
        if not Client.objects.filter(email=email, password=password).exists():
            return Response("Incorrect Password!", status=status.HTTP_401_UNAUTHORIZED)
        else:
            for client in Client.objects.filter(email=email, password=password):
                
                    return Response({"user_id": client.id, "email": client.email})
                    
            return Response("Incorrect Password!", status=status.HTTP_401_UNAUTHORIZED)



######################################################################################################################

@api_view(['GET'])
def admin_list(request):
    events = Admin.objects.all()
    serializer = AdminSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def admin_add(request):
    serializer = AdminSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def admin_del(request,pk):
    event = get_object_or_404(Admin, pk=pk)
    event.delete()
    return Response('the user delete',status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def admin_up(request,pk):
    event = get_object_or_404(Admin, pk=pk)
    serializer = AdminSerializer(event, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def admin_find(request,pk):
    event = get_object_or_404(Admin, pk=pk)
    serializer = AdminSerializer(event)
    return Response(serializer.data)

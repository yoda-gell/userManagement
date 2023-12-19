
from .models import Tik
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import TikSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET'])
def tik_list(request):
    events= Tik.objects.all()
    serializer =  TikSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def tik_add(request):
    serializer =  TikSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def tik_del(request,pk):
    event = get_object_or_404( Tik, pk=pk)
    event.delete()
    return Response('the user delete',status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def tik_up(request,pk):
    event = get_object_or_404( Tik, pk=pk)
    serializer =  TikSerializer(event, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def tik_find(request,pk):
    event = get_object_or_404( Tik, pk=pk)
    serializer =  TikSerializer(event)
    return Response(serializer.data)

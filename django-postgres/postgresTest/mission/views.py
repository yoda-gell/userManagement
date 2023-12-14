from .models import mission
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import MissionSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def mission_list(request):
    events = mission.objects.all()
    serializer = MissionSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def mission_add(request):
    serializer = MissionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def mission_del(request,pk):
    event = get_object_or_404(mission, pk=pk)
    event.delete()
    return Response('the user delete',status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def mission_up(request,pk):
    event = get_object_or_404(mission, pk=pk)
    serializer = MissionSerializer(event, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


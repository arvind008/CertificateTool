from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Managers
from .serializers import *

@api_view(['GET', 'POST'])
def managers_list(request):
    if request.method == 'GET':
        data = Managers.objects.all()

        serializer = ManagerSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ManagerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def managers_detail(request, pk):
    try:
        manager = Managers.objects.get(pk=pk)
    except Managers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ManagerSerializer(manager, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        manager.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

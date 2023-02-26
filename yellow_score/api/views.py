from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PageSerializer, CreatePageSerializer
from .models import Page
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class PageView(generics.ListAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    
class CreatePageView(APIView):
    def post(self, request, format=None):
        serializer = CreatePageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
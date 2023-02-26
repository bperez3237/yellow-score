from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Page
from .serializers import PageSerializers
# Create your views here.

class PageView(generics.CreateAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializers
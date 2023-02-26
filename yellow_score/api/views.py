from django.shortcuts import render
from rest_framework import generics
from .serializers import PageSerializer
from .models import Page

# Create your views here.

class PageView(generics.ListAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
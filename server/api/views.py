from django.shortcuts import render
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
import rest_framework.status
from .models import Account, Social
from .serializers import AccountSerializer, SocialSerializer

# Create your views here.

def ShowAccount(request):
    # qu
    serializer_class = AccountSerializer

def IndexAccount(request):
    accounts = Account.objects.values()
    print(list(accounts))
    return JsonResponse(list(accounts), status=status.HTTP_200_OK, safe=False)
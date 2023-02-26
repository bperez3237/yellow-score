from rest_framework import serializers
from .models import Page

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('id', 'first_name', 'last_name', 'location')
        
class CreatePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('first_name', 'last_name', 'location')
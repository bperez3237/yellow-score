from rest_framework import serializers
from .models import Page

class PageSerializers(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('id','first_name','last_name')
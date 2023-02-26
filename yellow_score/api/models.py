from django.db import models

# Create your models here.

class Page(models.Model):
    first_name = models.CharField(max_length=50,default='')
    last_name = models.CharField(max_length=50,default='')
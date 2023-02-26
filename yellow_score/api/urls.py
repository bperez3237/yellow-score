from django.urls import path
from .views import PageView

urlpatterns = [
    path('home', PageView.as_view())
]

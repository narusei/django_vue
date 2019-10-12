from django.shortcuts import render

import django_filters
from rest_framework import viewsets, filters

from .models import Todo
from .serializer import TodoSerializer
# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    # must django-lint
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# from django.shortcuts import render
from rest_framework import viewsets
from .models import Course
from django.contrib.auth.models import User
from .serializers import CourseSerializer,UserSerializer

# Create your views here.

class CourseView(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

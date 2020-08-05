from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Course

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id",
                  "is_superuser",
                  "username",
                  "first_name", 
                  "last_name", 
                  "is_active",
        )

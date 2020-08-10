from rest_framework import routers
from django.urls import path, include
from . import views


router = routers.DefaultRouter()
router.register('genre',views.GenreView)
router.register('movie', views.MovieView)

urlpatterns = [
    path('v1/', include(router.urls)),
]

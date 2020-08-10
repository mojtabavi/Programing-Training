from rest_framework import viewsets
from .models import Genre,Movie
from .serializers import GenreSerializer,MovieSerializer

# Create your views here.

class GenreView(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class MovieView(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

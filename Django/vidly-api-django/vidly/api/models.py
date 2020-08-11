from django.db import models

# Create your models here.
class Genre(models.Model):
    _id = models.CharField(max_length=30,primary_key=True,blank=False, null=False)
    name = models.CharField(max_length=50,)

    def __str__(self):
        return self.name

class Movie(models.Model):
    _id = models.CharField(max_length=30,primary_key=True,blank=False, null=False)
    title = models.CharField(max_length=50,)
    numberInStock = models.IntegerField()
    dailyRentalRate = models.IntegerField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)


    def __str__(self):
        return self.title

    def __unicode__(self):
        return 


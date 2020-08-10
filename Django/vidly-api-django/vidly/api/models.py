from django.db import models

# Create your models here.
class Genre(models.Model):
    _id = models.CharField(max_length=20,primary_key=True,blank=False, null=False)
    name = models.CharField(max_length=50,)

    def __str__(self):
        return 

    def __unicode__(self):
        return 

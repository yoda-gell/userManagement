from django.db import models
from tik.models import Tik
from django.contrib.auth.models import AbstractUser


class User(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    password = models.CharField()
    email = models.EmailField(unique=True)
    age = models.IntegerField()
    address = models.CharField(max_length=80)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    
    
class Client (User):
    active = models.BooleanField(default=True)
    reason = models.TextField()
    money = models.IntegerField(default= 10000)
    moneyneed = models.IntegerField(default=0)
    is_super =models.BooleanField(default= False)
    #tik = models.ForeignKey(Tik, on_delete=models.CASCADE)

class Admin (User):
    is_super =models.BooleanField(default= True)
    #mission = models.ForeignKey(mission, on_delete=models.CASCADE)
    pass
    

from django.db import models

class Mission(models.Model):
    PRIORITY_CHOICES = (
        ('1', 'first'),
        ('2', 'middle'),
        ('3', 'last'),
    )
    assign_to = models.ForeignKey('users.Client', related_name='missions', on_delete=models.CASCADE)
    priority = models.CharField(max_length=1, choices=PRIORITY_CHOICES, default= '1')
    task = models.TextField(max_length=100,default="new task")
    
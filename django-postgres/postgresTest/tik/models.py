from django.db import models


class Tik(models.Model):
    assign_to = models.ForeignKey('users.Client', related_name='tik', on_delete=models.CASCADE , default=1)
    files = models.FileField(upload_to='files/', max_length=250,null=True,default=None)  

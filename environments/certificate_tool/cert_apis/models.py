from django.db import models

class Managers(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    no_of_spot_awards = models.IntegerField()

    def __str__(self):
        return self.name

from rest_framework import serializers
from .models import Managers

class ManagerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Managers 
        fields = ('pk', 'name', 'email', 'phone', 'no_of_spot_awards')

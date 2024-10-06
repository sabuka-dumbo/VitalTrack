from django.contrib import admin
from .models import *

# Register your models here.
admin.register(User)
admin.register(WaterIntake)
admin.register(Food)
admin.register(FoodIntake)
admin.register(Mood)
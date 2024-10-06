from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class WaterIntake(models.Model):
    date = models.DateField()
    water = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user1")

    def __str__(self):
        return f"{self.user} drank, {self.water} water, on {self.date}"
    
class Food(models.Model):
    food_name = models.CharField(max_length=100)
    calories = models.IntegerField()
    proteins = models.IntegerField()
    carbs = models.IntegerField()
    fat = models.IntegerField()
    salt = models.IntegerField()
    saturated_fat = models.IntegerField()
    shugar = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user2")

    def __str__(self):
        return f"{self.user} added {self.food_name} to their list"
    
class FoodIntake(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user3")
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name="food1")
    date = models.DateField()

    def __str__(self):
        return f"{self.user} ate {self.food} on {self.date}"
    
class Mood(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user4")
    mood = models.CharField(max_length=150)
    date = models.DateField()

    def __str__(self):
        return f"{self.user} felt {self.mood} on {self.date}"
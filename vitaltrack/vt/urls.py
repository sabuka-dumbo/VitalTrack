from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login, name="login"),
    path("tracking", views.tracking, name="tracking"),
    path("register", views.register, name="register"),
]
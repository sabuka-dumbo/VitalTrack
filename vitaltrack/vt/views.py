from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import login as auth_login
from .models import *
from django.contrib.auth import authenticate

# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        if "@" not in email:
            print("Please enter correct email:(")
            return HttpResponseRedirect(reverse('register'))
        
        if User.objects.all().filter(email=email):
            print("found")
            user = authenticate(request, email=email, password=password)

            if user is not None:
                auth_login(request, user)
                print("succ. logined")
                return HttpResponseRedirect(reverse("index"))
            else:
                print("user is none")
                return HttpResponseRedirect(reverse("login"))
        else:
            print("Could not find anything...")
            return HttpResponseRedirect(reverse('register')) 
    else:
        return render(request, 'login.html')

def register(request):
    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm = request.POST.get('confirm')

        if password != confirm:
            print("Passwords does not match:(")
            return HttpResponseRedirect(reverse('register'))
        
        if "@" not in email:
            print("Please enter correct email:(")
            return HttpResponseRedirect(reverse('register'))
        
        if User.objects.all().filter(email=email):
            print("Email is already taken:(")
            return HttpResponseRedirect(reverse('register')) 
        
        new_user = User(username=username, email=email, password=password)
        new_user.save()

        if new_user is not None:
            auth_login(request, new_user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return HttpResponseRedirect(reverse("register"))
    else:
        return render(request, 'register.html')
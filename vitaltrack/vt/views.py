from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

from .models import *

# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
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
        
        

        return HttpResponseRedirect(reverse('index'))
    else:
        return render(request, 'register.html')
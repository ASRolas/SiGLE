from django.shortcuts import render

# Create your views here.
def fhome(request):
    return render(request, 'index.html')

def flogin(request):
    return render(request, 'login.html')

def fconfig(request):
    return render(request, 'admin.html')

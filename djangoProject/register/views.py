from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import CustomUser

@csrf_exempt
def registro(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        if not CustomUser.objects.filter(email=email).exists():
            user = CustomUser.objects.create_user(
                email=email,
                password=password,
            )

            user.username = request.POST.get('username')
            user.nombre = request.POST.get('nombre')
            user.save()

            response_data = {
                "status": "success",
                "message": "Usuario creado correctamente"
            }
            return JsonResponse(response_data)

    response_data = {
        "status": "fail",
        "message": "Comprobar los campos"
    }
    return JsonResponse(response_data)
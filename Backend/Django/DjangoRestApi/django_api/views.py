from django.shortcuts import get_object_or_404, render

from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CarritoCompraSerializer, CultivoSerializer,UserSerializer, RegisterSerializer
from .models import Categoria, Cultivo, Producto#, CustomUser
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from .serializers import ProductoSerializer
from .serializers import CategoriaSerializer
from rest_framework import viewsets
import json
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth import login
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
                          })

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)



#class GardenView(generics.RetrieveUpdateAPIView):
#    queryset = Garden.objects.all()
#    serializer_class = GardenSerializer

class CultivoView(viewsets.ModelViewSet):
    queryset = Cultivo.objects.all()
    serializer_class = CultivoSerializer

#class LoginView(APIView):
#   permission_classes = [AllowAny] 
#    def post(self, request):
#        # Recuperamos las credenciales y autenticamos al usuario
#        email = request.data.get('email', None)
#        password = request.data.get('password', None)
#        user = authenticate(email=email, password=password)
        # Si es correcto añadimos a la request la información de sesión
#        if user:
#            login(request, user)
#            return Response(
#                UserSerializer(user).data,
#                status=status.HTTP_200_OK)
        # Si no es correcto devolvemos un error en la petición
#        return Response(
#            status=status.HTTP_404_NOT_FOUND)


#class LogoutView(APIView):
#    permission_classes = [AllowAny] 
#    def post(self, request):
        # Borramos de la request la información de sesión
#        logout(request)
#        # Devolvemos la respuesta al cliente
#        return Response(status=status.HTTP_200_OK)
    
#class SignupView(generics.CreateAPIView):
#    permission_classes = [AllowAny]
#    serializer_class = UserSerializer

class verProductos(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class verCategorias(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class agregarProducto(APIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                        status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#class ProfileView(generics.RetrieveUpdateAPIView):
#    permission_classes = [AllowAny] #Solo usuarios logueados pueden ver.
#    serializer_class = UserSerializer
#    http_method_names = ['get', 'patch']
#    def get_object(self):
#        if self.request.user.is_authenticated:
#            return self.request.user
#    def patch_object(self,request):
#        serializer = UserSerializer(data=request.data, partial=True)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data, status=status.HTTP_201_CREATED)
#        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#class ListarUsuarios(generics.ListCreateAPIView):
#    permission_classes = [AllowAny]
#    queryset = CustomUser.objects.all()
#    serializer_class = UserSerializer
#    http_method_names = ['get']
#    def list(self, request):
#        queryset = self.get_queryset()
#        serializer = UserSerializer(queryset, many=True)
#        if self.request.user.is_authenticated:
#            return Response(serializer.data)


#Return Custom json, reduzca el stock segun lo enviado.
class customjsonybajarstock(APIView):
    #permission_classes = [IsAdminUser] #Solo permito admins.
    permission_classes = [AllowAny] 
    def patch(self, request, pk, cantidad): #Utilizo patch para la modificacion parcial.
        model = get_object_or_404(Producto, pk=pk) #Pido el objeto mandandole el ID. 
        data = {"cantidad": model.cantidad - int(cantidad)} #Del json, le resto la cantidad.
        serializer = ProductoSerializer(model, data=data, partial=True) #Paso la data al serializer.

        if serializer.is_valid(): #Si es valido lo que mande
            serializer.save() #Guardo el response (va a mandar el json del producto con la cantidad actualizada)
            agregarcustomjson={"respuesta": "aprobado"}
            agregarcustomjson.update(serializer.data)  #A ese json anterior, le agrego la respuesta de la transaccion.
            return Response(agregarcustomjson)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CarritoComprasVista(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = CarritoCompraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"estado": "correcto", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"estado": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
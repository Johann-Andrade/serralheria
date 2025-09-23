from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Casa, Obra
from .serializers import CasaSerializer, ObraSerializer

class CasaList(generics.ListCreateAPIView):
    queryset = Casa.objects.all()
    serializer_class = CasaSerializer
class CasaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Casa.objects.all()
    serializer_class = CasaSerializer
class ObraList(generics.ListCreateAPIView):
    queryset = Obra.objects.all()
    serializer_class = ObraSerializer
class ObraDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Obra.objects.all()
    serializer_class = ObraSerializer
from django.urls import path
from . import views
urlpatterns = [
    path('casas/', views.CasaList.as_view(), name='casa-list'),
    path('casas/<int:pk>/', views.CasaDetail.as_view(),name='casa-detail'),
    path('obras/', views.ObraList.as_view(), name='obra-list'),
    path('obras/<int:pk>/', views.ObraDetail.as_view(), name='obra-detail'),
]
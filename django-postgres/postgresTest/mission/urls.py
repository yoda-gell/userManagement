from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.mission_list, name='mission-list'),
    path('add/', views.mission_add, name='mission-add'),
    path('delete/<int:pk>/', views.mission_del, name='mission-delete'),
    path('update/<int:pk>/', views.mission_up, name='mission-update'),
    path('find/<int:pk>/', views.mission_find, name='mission-detail'),  
]
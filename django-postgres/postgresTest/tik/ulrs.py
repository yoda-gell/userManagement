from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.tik_list, name='tik-list'),
    path('add/', views.tik_add, name='tik-add'),
    path('delete/<int:pk>/', views.tik_del, name='tik-delete'),
    path('update/<int:pk>/', views.tik_up, name='tik-update'),
    path('find/<int:pk>/', views.tik_find, name='tik-detail'),  
]
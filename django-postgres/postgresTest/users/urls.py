from django.urls import path
from . import views

urlpatterns = [
    path('client/all/', views.client_list, name='client-list'),
    path('client/add/', views.client_add, name='client-add'),
    path('client/delete/<int:pk>/', views.client_del, name='client-delete'),
    path('client/update/<int:pk>/', views.client_up, name='client-update'),
    path('client/find/<int:pk>/', views.client_find, name='client-detail'),  
     
    path('adminn/all/', views.admin_list, name='admin-list'),
    path('adminn/add/', views.admin_add, name='admin-add'),
    path('adminn/delete/<int:pk>/', views.admin_del, name='admin-delete'),
    path('adminn/update/<int:pk>/', views.admin_up, name='admin-update'),
    path('adminn/find/<int:pk>/', views.admin_find, name='admin-detail'), 
    
    path('login/',views.login, name="login") 
]
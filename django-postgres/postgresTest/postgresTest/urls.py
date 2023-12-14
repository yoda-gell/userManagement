from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users.urls')),
    path('mission/', include('mission.urls')),
   #path('', include('tik.urls')),
]
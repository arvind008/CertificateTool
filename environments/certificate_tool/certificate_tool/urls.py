from django.contrib import admin
from django.urls import path, re_path
from cert_apis import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/managers/$', views.managers_list),
    re_path(r'^api/managers/([0-9])$', views.managers_detail),
]

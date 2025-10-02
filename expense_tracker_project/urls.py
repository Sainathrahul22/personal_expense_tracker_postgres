"""
URL configuration for expense_tracker_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from authentication.views import login_page, register_page
from expenses.views import dashboard_page, add_page, edit_page
from authentication.views import landing_page

urlpatterns = [
    path('', landing_page, name='landing'),
    path("admin/", admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/expenses/', include('expenses.urls')),

    # HTML template rendering views
    path('login.html', login_page, name='login-page'),
    path('register.html', register_page, name='register-page'),
    path('dashboard.html', dashboard_page, name='dashboard-page'),
    path('add.html', add_page, name='add-page'),
    path('edit.html', edit_page, name='edit-page'),
]

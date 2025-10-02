from django.urls import path
from .views import (
    dashboard_page,
    add_page,
    edit_page,
    ExpenseListCreateView,
    ExpenseRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('', ExpenseListCreateView.as_view(), name='expense-list-create'),
    path('<int:pk>/', ExpenseRetrieveUpdateDestroyView.as_view(), name='expense-detail'),
    # The HTML-serving views below are optional, since they are included at project URL level.
]

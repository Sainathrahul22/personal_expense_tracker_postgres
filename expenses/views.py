from rest_framework import generics, permissions
from .models import Expense
from .serializers import ExpenseSerializer
from django.shortcuts import render


def dashboard_page(request):
    return render(request, "dashboard.html")

def add_page(request):
    return render(request, "add.html")

def edit_page(request):
    return render(request, "edit.html")

class ExpenseListCreateView(generics.ListCreateAPIView):
    serializer_class = ExpenseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Expense.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ExpenseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ExpenseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Expense.objects.filter(user=self.request.user)


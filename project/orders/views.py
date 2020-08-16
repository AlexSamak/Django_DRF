from django.shortcuts import render
from orders.models import SalesOrder
from rest_framework.viewsets import ModelViewSet
from orders.serializers import OrderSerializer


def orders_page(request):
    return render(request, 'index.html', {'orders': SalesOrder.objects.all()})


class OrderView(ModelViewSet):
    queryset = SalesOrder.objects.all()
    serializer_class = OrderSerializer


def orders_app(request):
    print(request.POST.items())
    amount = request.POST.get('amount')
    print(amount)
    print('\n\n\n')
    print(request.POST.get('ID', False))
    return render(request, 'main_app.html')

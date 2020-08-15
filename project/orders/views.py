from django.shortcuts import render
from orders.models import SalesOrder
from rest_framework.viewsets import ModelViewSet
from orders.serializers import OrderSerializer
from django.http.request import QueryDict, MultiValueDict


def orders_page(request):
    return render(request, 'index.html', {'orders': SalesOrder.objects.all()})


class OrderView(ModelViewSet):
    queryset = SalesOrder.objects.all()
    serializer_class = OrderSerializer


def orders_app(request):
    mdict = request.POST
    qdict = QueryDict('', mutable=True)
    qdict.update(mdict)
    print(qdict.urlencode())
    print('\n\n\n')
    print(request.POST.get('ID', False))
    return render(request, 'main_app.html')

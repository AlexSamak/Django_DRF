from django.contrib import admin
from django.urls import path
from orders.views import orders_page, OrderView, orders_app

from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('api/orders', OrderView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', orders_page),
    path('orders_page/', orders_app),
]
urlpatterns += router.urls

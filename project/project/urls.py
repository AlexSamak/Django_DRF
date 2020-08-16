from django.contrib import admin
from django.urls import path
from orders.views import orders_page, OrderView, orders_app


#from rest_framework.routers import SimpleRouter
from rest_framework.routers import DefaultRouter

#router = SimpleRouter()
#router.register('api/orders', OrderView)
router = DefaultRouter()
router.register(r'api/orders', OrderView, basename='user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', orders_page),
    path('orders_page/', orders_app),
]
urlpatterns += router.urls

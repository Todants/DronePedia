from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from main.views import AccountsApi, ProductsApi, ReviewsApi, LikesApi, ImagesApi, LoginAPIView

router = routers.DefaultRouter()
router.register(r'api/accounts', AccountsApi)
router.register(r'api/products', ProductsApi)
router.register(r'api/reviews', ReviewsApi)
router.register(r'api/likes', LikesApi)
router.register(r'api/images', ImagesApi)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('', include(router.urls)),
    path('api/login/', LoginAPIView.as_view(), name='login'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

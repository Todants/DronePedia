from django.core.cache import cache
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Accounts, Products, Reviews, Likes, Images
from .serializers import AccountSerializer, ProductsSerializer, ReviewsSerializer, LikesSerializer, LoginSerializer, \
    ImageSerializer


def index(request):
    return render(request, 'main/index.html')


class AccountsApi(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_accounts', 'email', 'password']

    def list(self, request, *args, **kwargs):
        cache_key = 'accounts_list'
        cached_data = cache.get(cache_key)

        if cached_data:
            return Response(cached_data)

        response = super().list(request, *args, **kwargs)
        cache.set(cache_key, response.data, 60 * 15)
        return response

    def retrieve(self, request, *args, **kwargs):
        product_id = kwargs.get('pk')
        cache_key = f'accounts_detail_{product_id}'
        cached_data = cache.get(cache_key)

        if cached_data:
            return Response(cached_data)

        response = super().retrieve(request, *args, **kwargs)
        cache.set(cache_key, response.data, 60 * 15)
        return response

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)

        cache.delete('accounts_list')
        product_id = kwargs.get('pk')
        cache.delete(f'accounts_detail_{product_id}')

        return response

    def partial_update(self, request, *args, **kwargs):
        response = super().partial_update(request, *args, **kwargs)

        cache.delete('accounts_list')
        product_id = kwargs.get('pk')
        cache.delete(f'accounts_detail_{product_id}')

        return response


class ProductsApi(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_product', 'name', 'price', 'description', 'brand', 'video_transmission', 'powering',
                        'transmitter_protocol', 'propeller_size', 'frame_size', 'power_connector', 'version',
                        'number_of_rating', 'overall_rating']

    def list(self, request, *args, **kwargs):
        cache_key = 'products_list'
        cached_data = cache.get(cache_key)

        if cached_data:
            return Response(cached_data)

        response = super().list(request, *args, **kwargs)
        cache.set(cache_key, response.data, 60 * 15)
        return response

    def retrieve(self, request, *args, **kwargs):
        product_id = kwargs.get('pk')
        cache_key = f'products_detail_{product_id}'
        cached_data = cache.get(cache_key)

        if cached_data:
            return Response(cached_data)

        response = super().retrieve(request, *args, **kwargs)
        cache.set(cache_key, response.data, 60 * 15)
        return response

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)

        cache.delete('products_list')
        product_id = kwargs.get('pk')
        cache.delete(f'products_detail_{product_id}')

        return response

    def partial_update(self, request, *args, **kwargs):
        response = super().partial_update(request, *args, **kwargs)

        cache.delete('products_list')
        product_id = kwargs.get('pk')
        cache.delete(f'products_detail_{product_id}')

        return response

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        cache.delete('products_list')

        return response

    def destroy(self, request, *args, **kwargs):
        product_id = kwargs.get('pk')

        response = super().destroy(request, *args, **kwargs)

        cache.delete('products_list')
        cache.delete(f'products_detail_{product_id}')

        return response


class ReviewsApi(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_review', 'id_accounts', 'id_product', 'rating', 'comment']


class LikesApi(viewsets.ModelViewSet):
    queryset = Likes.objects.all()
    serializer_class = LikesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_review', 'id_accounts', 'id_product']


class ImagesApi(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_product', 'file']


class LoginAPIView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            try:
                account = Accounts.objects.get(email=email)
                if password == account.password:
                    return Response({"message": "Login successful",
                                     "id_accounts": account.id_accounts},
                                    status=status.HTTP_200_OK)
                else:
                    return Response({"error": "Invalid password"}, status=status.HTTP_401_UNAUTHORIZED)
            except Accounts.DoesNotExist:
                return Response({"error": "Account not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

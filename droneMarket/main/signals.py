from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.core.cache import cache
from .models import Products, Accounts


# Signals for Products
@receiver(post_save, sender=Products)
def clear_products_cache_on_save(sender, instance, **kwargs):
    cache_key_list = 'products_list'
    cache_key_detail = f'product_{instance.pk}'
    cache.delete(cache_key_list)
    cache.delete(cache_key_detail)


@receiver(post_delete, sender=Products)
def clear_products_cache_on_delete(sender, instance, **kwargs):
    cache_key_list = 'products_list'
    cache_key_detail = f'product_{instance.pk}'
    cache.delete(cache_key_list)
    cache.delete(cache_key_detail)


# Signals for Accounts
@receiver(post_save, sender=Accounts)
def clear_accounts_cache_on_save(sender, instance, **kwargs):
    cache_key_list = 'accounts_list'
    cache_key_detail = f'account_{instance.pk}'
    cache.delete(cache_key_list)
    cache.delete(cache_key_detail)


@receiver(post_delete, sender=Accounts)
def clear_accounts_cache_on_delete(sender, instance, **kwargs):
    cache_key_list = 'accounts_list'
    cache_key_detail = f'account_{instance.pk}'
    cache.delete(cache_key_list)
    cache.delete(cache_key_detail)

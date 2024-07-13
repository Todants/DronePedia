from django.db import models


class Accounts(models.Model):

    id_accounts = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, blank=False, null=False, unique=True)
    email = models.CharField(max_length=50, blank=False, null=False, unique=True, db_index=True)
    password = models.CharField(max_length=50, blank=False, null=False)
    photo = models.ImageField(upload_to='uploads/', default='uploads/base_avatar.jpg')


class Products(models.Model):

    id_product = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False, unique=True)
    price = models.CharField(max_length=50, default='По запросу')
    description = models.CharField(max_length=10000, blank=False, null=False)
    brand = models.CharField(max_length=50, default=None, null=True)
    video_transmission = models.CharField(max_length=50, default=None, null=True)
    powering = models.CharField(max_length=50, default=None, null=True)
    transmitter_protocol = models.CharField(max_length=50, default=None, null=True)
    propeller_size = models.CharField(max_length=50, default=None, null=True)
    frame_size = models.CharField(max_length=50, default=None, null=True)
    power_connector = models.CharField(max_length=50, default=None, null=True)
    version = models.CharField(max_length=50, default=None, null=True)
    number_of_rating = models.BigIntegerField(default=0, null=True)
    overall_rating = models.BigIntegerField(default=0, null=True)


class Reviews(models.Model):

    id_review = models.AutoField(primary_key=True)
    id_accounts = models.ForeignKey(Accounts, on_delete=models.CASCADE, to_field='id_accounts')
    id_product = models.ForeignKey(Products, on_delete=models.CASCADE, to_field='id_product')
    rating = models.BigIntegerField(blank=False, null=False)
    comment = models.CharField(max_length=1000, default=None)


class Likes(models.Model):

    id_review = models.AutoField(primary_key=True)
    id_accounts = models.ForeignKey(Accounts, on_delete=models.CASCADE, to_field='id_accounts')
    id_product = models.ForeignKey(Products, on_delete=models.CASCADE, to_field='id_product')


class Images(models.Model):

    id_image = models.AutoField(primary_key=True)
    id_product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='images', to_field='id_product')
    file = models.FileField(upload_to='upldfile/')

# Generated by Django 5.0.6 on 2024-07-09 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_accounts_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accounts',
            name='photo',
            field=models.ImageField(default=None, upload_to='uploads/'),
        ),
    ]

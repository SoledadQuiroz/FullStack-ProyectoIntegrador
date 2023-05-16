# Generated by Django 4.1.7 on 2023-05-16 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cultivos_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cultivo',
            name='temporada',
            field=models.CharField(choices=[('autumn', 'Otoño'), ('winter', 'Invierno'), ('spring', 'Primavera'), ('summer', 'Verano'), ('autumn-winter', 'Otoño, Invierno'), ('spring-summer', 'Primavera, Verano'), ('all', 'Todas las estaciones')], max_length=15),
        ),
    ]

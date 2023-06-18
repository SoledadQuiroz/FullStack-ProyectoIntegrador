# Generated by Django 4.2.1 on 2023-06-17 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Crop',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('imagen', models.CharField(max_length=250)),
                ('tipo', models.CharField(max_length=50)),
                ('germina', models.IntegerField()),
                ('cosecha', models.IntegerField()),
                ('temporada', models.CharField(choices=[('Otoño', 'autumn'), ('Invierno', 'winter'), ('Primavera', 'spring'), ('Verano', 'summer'), ('Otoño, Invierno', 'autumn-winter'), ('Primavera, Verano', 'spring-summer'), ('Todas las estaciones', 'all')], max_length=50)),
                ('temperaturaMax', models.IntegerField()),
                ('temperaturaMin', models.IntegerField()),
                ('riego', models.CharField(choices=[('Mucha o diariamente', 'bastante'), ('Regular o cada 3 días', 'regular'), ('poca o cada 5 días', 'poca')], max_length=50)),
                ('luz', models.CharField(choices=[('Poca luz', 'poca'), ('Luz Moderada', 'moderada'), ('Bastante Luz', 'mucha')], max_length=15)),
                ('profundidadSembrado', models.IntegerField()),
                ('espacioPlantas', models.IntegerField()),
            ],
        ),
    ]

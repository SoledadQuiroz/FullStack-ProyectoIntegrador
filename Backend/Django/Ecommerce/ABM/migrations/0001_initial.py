# Generated by Django 4.2.1 on 2023-05-21 15:55

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ciudad',
            fields=[
                ('id_ciudad', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Ciudad',
                'verbose_name_plural': 'Ciudades',
                'db_table': 'ciudad',
            },
        ),
        migrations.CreateModel(
            name='crecimiento',
            fields=[
                ('id_crecimiento', models.AutoField(primary_key=True, serialize=False)),
                ('cosecha', models.CharField(max_length=1000)),
                ('siembra', models.CharField(max_length=1000)),
                ('germinacion', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Crecimiento',
                'verbose_name_plural': 'Crecimientos',
                'db_table': 'crecimiento',
            },
        ),
        migrations.CreateModel(
            name='cultivo',
            fields=[
                ('id_cultivo', models.AutoField(primary_key=True, serialize=False)),
                ('tipo', models.CharField(max_length=1000)),
                ('categoria', models.CharField(max_length=1000)),
                ('favorito', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Cultivo',
                'verbose_name_plural': 'Cultivos',
                'db_table': 'cultivo',
            },
        ),
        migrations.CreateModel(
            name='factura',
            fields=[
                ('id_factura', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=1000)),
                ('total', models.IntegerField(default=2000)),
                ('tipo', models.IntegerField(default=2000)),
                ('fecha_apertura', models.DateField(default=datetime.datetime.now)),
                ('fecha_cierre', models.DateField(default=datetime.datetime.now)),
                ('dir_envio', models.TextField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Factura',
                'verbose_name_plural': 'Facturas',
                'db_table': 'factura',
            },
        ),
        migrations.CreateModel(
            name='producto',
            fields=[
                ('id_producto', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=1000)),
                ('costo', models.IntegerField(default=2000)),
                ('valor', models.IntegerField(default=2000)),
                ('cantidad', models.IntegerField(default=2000)),
                ('fecha_ingreso', models.DateField(default=datetime.datetime.now)),
            ],
            options={
                'verbose_name': 'Producto',
                'verbose_name_plural': 'Productos',
                'db_table': 'producto',
            },
        ),
        migrations.CreateModel(
            name='provincia',
            fields=[
                ('id_provincia', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Provincia',
                'verbose_name_plural': 'Provincias',
                'db_table': 'provincia',
            },
        ),
        migrations.CreateModel(
            name='tipo_produto',
            fields=[
                ('id_tipo_producto', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Tipo_Producto',
                'verbose_name_plural': 'Tipos_Productos',
                'db_table': 'tipo_producto',
            },
        ),
        migrations.CreateModel(
            name='venta',
            fields=[
                ('id_venta', models.AutoField(primary_key=True, serialize=False)),
                ('descripcion', models.TextField(max_length=1000)),
                ('cantidad', models.IntegerField(default=2000)),
                ('descuento', models.FloatField(default=100)),
                ('id_factura', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.factura')),
                ('id_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.producto')),
            ],
            options={
                'verbose_name': 'Venta',
                'verbose_name_plural': 'Ventas',
                'db_table': 'venta',
            },
        ),
        migrations.CreateModel(
            name='usuario',
            fields=[
                ('id_usuario', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=1000)),
                ('apellido', models.CharField(max_length=1000)),
                ('direccion', models.TextField(max_length=1000)),
                ('correo', models.EmailField(max_length=1000)),
                ('provincia', models.CharField(max_length=1000)),
                ('localidad', models.CharField(max_length=1000)),
                ('telefono', models.IntegerField(default=2000)),
                ('password', models.CharField(max_length=50)),
                ('id_ciudad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.ciudad')),
            ],
            options={
                'verbose_name': 'Usuario',
                'verbose_name_plural': 'Usuarios',
                'db_table': 'usuario',
            },
        ),
        migrations.AddField(
            model_name='producto',
            name='id_tipo_prod',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.tipo_produto'),
        ),
        migrations.CreateModel(
            name='jardin',
            fields=[
                ('id_jardin', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_cultivo', models.CharField(max_length=1000)),
                ('fecha_siembra', models.DateField(default=datetime.datetime.now)),
                ('fecha_germinacion', models.DateField(default=datetime.datetime.now)),
                ('id_crecimiento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.crecimiento')),
                ('id_cultivo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.cultivo')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.usuario')),
            ],
            options={
                'verbose_name': 'Jardin',
                'verbose_name_plural': 'Jardines',
                'db_table': 'jardin',
            },
        ),
        migrations.AddField(
            model_name='factura',
            name='id_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.usuario'),
        ),
        migrations.AddField(
            model_name='crecimiento',
            name='id_cultivo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.cultivo'),
        ),
        migrations.AddField(
            model_name='ciudad',
            name='id_provincia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ABM.provincia'),
        ),
    ]
# Generated by Django 4.2.1 on 2023-06-05 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=1000)),
                ('costo', models.IntegerField()),
                ('valor', models.IntegerField()),
                ('cantidad', models.IntegerField()),
                ('descripcion', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
                'db_table': 'product',
            },
        ),
    ]

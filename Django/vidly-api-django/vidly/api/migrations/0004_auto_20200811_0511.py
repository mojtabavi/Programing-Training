# Generated by Django 3.1 on 2020-08-11 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200811_0507'),
    ]

    operations = [
        migrations.AlterField(
            model_name='genre',
            name='_id',
            field=models.CharField(max_length=30, primary_key=True, serialize=False),
        ),
    ]

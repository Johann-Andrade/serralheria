from django.db import models

# Create your models here.
class Casa(models.Model):
    nome = models.CharField(max_length=100)
    def __str__(self):
        return self.nome
class Obra(models.Model):
    nome = models.CharField(max_length=100)
    inicio = models.DateField()
    termino = models.DateField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    pessoas = models.PositiveIntegerField()
    anota = models.TextField()
    casa = models.ForeignKey(Casa, related_name='projetos', on_delete=models.CASCADE)
    def __str__(self):
        return self.nome
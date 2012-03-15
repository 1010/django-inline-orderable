from django.db import models


class Orderable(models.Model):
    """
        Add extra field and default ordering column for and inline orderable model
    """
    
    order = models.IntegerField(default=0)
    
    class Meta:
        abstract = True         
        ordering = ('order',)
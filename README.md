# django-inline-orderable

An easy way of making inlines orderable using drag-and-drop.


## Installation

Add `inline_orderable` to INSTALLED_APPS in `settings.py`.

## Usage


### Step 1

Declare your model as a subclass of `Orderable`

	from inline_orderable.models import Orderable
     
	class MyModel(Orderable):
		...
     
		class Meta(Orderable.Meta):
			pass


This will add an extra column called `order`.

The Meta class declaration is **NOT** necessary, add it only if you need to set your own meta attributes.

### Step 2

Declare your admin inline class as a subclass of `OrderableStackedInline` or `OrderableTabularInline`

   
	from inline_orderable.admin import OrderableStackedInline, OrderableTabularInline
     
	class MyModelInline(OrderableStackedInline):
		...
	
	class MyModel2Inline(OrderableTabularInline):
		...


### Step 3

Include jQuery and jQuery.ui

	class MyParentModelAdmin(admin.ModelAdmin):
		inlines = (MyModelInline, )
    	
		class Media:
			js = (
				'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
				'http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js',
			)


### Step 4 (optional)

django-inline-orderable uses staticfiles available from Django 1.3.

If you're using Django 1.2 just copy the media files to your `MEDIA_ROOT`.


## Thanks

 * Simon - http://djangosnippets.org/snippets/1053/
 * centralniak - https://github.com/centralniak/django-inline-ordering/
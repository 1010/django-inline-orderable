from django.contrib.admin import TabularInline, StackedInline


class OrderableStackedInline(StackedInline):
    class Media:
        js = ('inline_orderable.js', 'stackedinline_orderable.js',)


class OrderableTabularInline(TabularInline):    
    class Media:
        js = ('inline_orderable.js', 'tabularinline_orderable.js',)
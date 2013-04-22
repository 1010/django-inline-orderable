(function($) {
    $.fn.tabularInlineOrder = function(options) {
            var opts = $.extend({}, $.fn.tabularInlineOrder.defaults, options);

            return this.each(function() {
                var inlineGroup = $(this);
                
                $('<th width="5">&#11021;</th>').prependTo(inlineGroup.find('thead tr:first'));
                $('<td class="handle"></td>').prependTo(inlineGroup.find(opts.inlineItemsSel));
                inlineGroup.find("table").addClass("orderable");

                inlineGroup.sortable({
                    items: opts.inlineItemsSel,
                    handle: '.handle',
                    update: function() {
                        updateOrdering(inlineGroup.find(opts.inlineItemsSel));
                    }
                });
        
                // cursor move
                inlineGroup.find('.handle').css('cursor', 'move');
                inlineGroup.find(opts.inlineItemsSel).find('td').not('.handle').css('cursor', 'inherit');
        
                // finding header of order
                var orderHeaderIndex = inlineGroup.find('td.order:first').index()-1,
                    orderTheadTH = inlineGroup.find('thead th:eq('+orderHeaderIndex+')'),
                    orderTheadTHColspan = parseInt(orderTheadTH.attr('colspan') || 1);
                
                // hiding stuff
                if (orderTheadTHColspan == 2) {
                    orderTheadTH.attr('colspan', orderTheadTHColspan-1);
                    orderTheadTH.text('');
                } else {
                    orderTheadTH.hide();
                }
                inlineGroup.find('input[id$=order]').parents('td').hide();

                // catching submit event
                $('form').submit(function() {
                    updateOrdering(inlineGroup.find(opts.inlineItemsSel));
                });
            });
        };
    
    $.fn.tabularInlineOrder.defaults = {
            'inlineItemsSel': 'tbody tr'
        };
    
    
    $(document).ready(function() {
        $('div.inline-group').tabularInlineOrder();
    });
})($ || django.jQuery);

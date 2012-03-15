(function($) {
    $.fn.stackedInlineOrder = function(options) {
            var opts = $.extend({}, $.fn.stackedInlineOrder.defaults, options);

            return this.each(function() {
                var inlineGroup = $(this);

                inlineGroup.sortable({
                    items: opts.inlineItemsSel,
                    handle: 'h3:first',
                    update: function() {
                        updateOrdering(inlineGroup.find(opts.inlineItemsSel));
                    }
                });

                // cursor move
                inlineGroup.find(opts.inlineItemsSel).css('cursor', 'move');

                // hiding stuff
                inlineGroup.find(opts.inlineItemsSel).find('input[id$=order]').parents('div.order').hide();

                // catching submit event
                $('form').submit(function() {
                    updateOrdering(inlineGroup.find(opts.inlineItemsSel));
                });
            });
        };
    
    $.fn.stackedInlineOrder.defaults = {
            'inlineItemsSel': 'div.inline-related'
        };


    $(document).ready(function() {
        $('div.inline-group').stackedInlineOrder();
    });
    
})($ || django.jQuery);
(function($) {
    var StackedInlineOrdering = {
        inlineGroupSel: 'div.inline-group',
        inlineItemsSel: 'div.inline-related',
        
        init: function() {
            var that = this;
            $(document).ready(function() {
                var inlineGroup = $(that.inlineGroupSel);
                
                inlineGroup.sortable({
                    items: that.inlineItemsSel,
                    handle: 'h3:first',
                    update: function() {
                        updateOrdering(that);
                    }
                });
        
                // cursor move
                inlineGroup.find(that.inlineItemsSel).css('cursor', 'move');
                
                // hiding stuff
                inlineGroup.find(that.inlineItemsSel).find('input[id$=order]').parents('div.order').hide();
                
                // catching submit event
                $('form').submit(function() {
                    updateOrdering(that);
                });
            });
        }
    }
    
    StackedInlineOrdering.init();
    
})($ || django.jQuery);
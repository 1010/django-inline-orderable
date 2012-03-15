(function($) {
    var TabularInlineOrdering = {
        inlineGroupSel: 'div.inline-group',
        inlineItemsSel: 'tbody tr',
        
        init: function() {
            var that = this;
            $(document).ready(function() {
                var inlineGroup = $(that.inlineGroupSel);
                
                inlineGroup.sortable({
                    items: that.inlineItemsSel,
                    handle: 'td',
                    update: function() {
                        updateOrdering(that);
                    }
                });
        
                // cursor move
                inlineGroup.find(that.inlineItemsSel).css('cursor', 'move');
        
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
                    updateOrdering(that);
                });
            });
        }
    }
    
    TabularInlineOrdering.init();
    
})($ || django.jQuery);
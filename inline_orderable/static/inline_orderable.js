function any(list, iterable) {
    for (var i=0; i<list.length; ++i) {
        if (iterable(list[i])) {
            return true;
        }
    }
    
    return false
}

function updateOrdering(elements) {
    $(elements).each(function(i) {
        // checking that there's at least one input/textarea with value
        // TODO check selects as well
        var $this = $(this),
            inputs = $this.find('input[type=text], textarea').not('input[id$=order]');
        
        if (any(inputs, function(input) { return $(input).val() ? true : false })) {
            $this.find('input[id$=order]').val(i+1);
        } else {
            $this.find('input[id$=order]').val(0);
        }
        
        // updating row classes
        $(this).removeClass('row1').removeClass('row2');
        $(this).addClass('row'+((i%2)+1));
    });
}
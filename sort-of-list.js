(function($) {

    $.fn.sortOfList = function(options) {
    
        var self = this;
        
        // default to ascending
        var settings = {
            order: 'asc'
        };
        
        // merge options
        options = $.extend(settings, options);

        // scope of the parent type of list
        var items = $('li', self).get();
        
        var listFilter = '';

        if(options.order != 'asc' && options.order != 'desc') {
            return;
        }

        return self.each(function() {

            if (options.order == 'asc') {

                var asc = items.sort(function(a, b) {

                    // assuming the whole text needs to be checked
                    var $first = $(a).text();
                    var $second = $(b).text();
                    return $first.toLowerCase() > $second.toLowerCase();

                });

                
                // replace list items with sorted
                for (var i = 0; i < asc.length; i++) {
                    var attrs = '';
                    if(asc[i].attributes.length) {
                        $.each(asc[i].attributes, function() {
                            // set with array of attributes
                            attrs += this.name + '=' + '"' + this.value + '" ';
                        });
                    }
                    
                    // throw in the html to add any child elements and keep styles
                    listFilter += '<li ' + attrs + '>' + $(asc[i]).html() + '</li>';

                }

                // set the html
                $(self).html(listFilter);

            } else {

                var desc = items.sort(function(a, b) {

                    // assuming the whole text needs to be checked
                    var $first = $(a).text();
                    var $second = $(b).text();
                    return $first.toLowerCase() < $second.toLowerCase();

                });


                // replace list items with sorted
                for (var j = 0; j < desc.length; j++) {
                    var attrs = '';
                    if(desc[j].attributes.length) {
                        $.each(desc[j].attributes, function() {
                            // set with array of attributes
                            attrs += this.name + '=' + '"' + this.value + '" ';
                        });
                    }
                    
                    // throw in the html to add any child elements and keep styles
                    listFilter += '<li ' + attrs + '>' + $(desc[j]).html() + '</li>';


                }

                // set the html
                $(self).html(listFilter);

            }

        });
    };

})(jQuery);
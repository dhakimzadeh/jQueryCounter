(function($) {
	
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals)).digits();

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.finalvalue;
		    
		    jQuery(_this).html(value).digits();
		    
                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, options.finalvalue);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  				// the number the element should start at
        to: 107748987,  			// the number the element should end at
        speed: 1000,  				// how long it should take to count between the target numbers
        refreshInterval: 100,  			// how often the element should be updated
        decimals: 0,  				// the number of decimal places to show
        finalvalue: 100000000,			// the final value to show
        onUpdate: null,  			// callback method for every time the element is updated,
        onComplete: null,  			// callback method for when the element finishes updating
    };
    
    $.fn.digits = function(){ 
        return this.each(function(){ 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        })
    }
    
})(jQuery);


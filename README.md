jQueryCounter
=============

*A Simple jQuery plugin that counts up to a specified number...


##Usage
Using jQueryCounter is pretty simple. Include jQuery in your web application and then include counter.js 

Then just create a div on your page to hold your counter

```html
<h1 class="counter"><span>$</span>&nbsp;</h1>
```

Now you can define *FROM and *TO values and initialize like this

```html
<script type="text/javascript">
	jQuery(document).ready(function($) {
        $('.counter').countTo({
            from: 0,
            to: 534097, // set this to some non round number to create more exciting (random) increments
            finalvalue: 500000, // the actual final value you are counting to and want to display
            speed: 5000,
            refreshInterval: 50,
        });
    });
</script>
```

##jQueryCounter Options

```
from: 0,  				// the number the element should start at
to: 100,  				// the number the element should end at
speed: 1000,  				// how long it should take to count between the target numbers
refreshInterval: 100,  			// how often the element should be updated
decimals: 0,  				// the number of decimal places to show
finalvalue: 500000, 			// the actual final value you are counting to and want to display
onUpdate: null,  			// callback method for every time the element is updated,
onComplete: null,  			// callback method for when the element finishes updating
```


@TODO
- create plugin option to toggle digits formatting function
- create minified version..

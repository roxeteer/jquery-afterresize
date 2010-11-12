# jQuery afterresize event #
[http://github.com/roxeteer/jquery-afterresize](http://github.com/roxeteer/jquery-afterresize)

Version 1.0, Last updated: 11/12/2010


With jQuery afterresize event plugin, an event is triggered when resizing the window has ended.

Please note that binding afterresize event to a DOM element instead of window requires Ben "Cowboy" Alman's
[jQuery resize plugin](http://benalman.com/projects/jquery-resize-plugin/)


## Documentation ##

See examples/index.html for usage examples.

Basic usage:

    $(window).bind("afterresize", function() {
        // your code goes here
    });

or:

    $(window).afterresize(function() {
        // your code goes here
    });


## Support ##

### jQuery versions ###

The plugin has been tested to work with jQuery version 1.4.2 and 1.4.4. It **doesn't** work with jQuery 1.3.x.

### Browsers tested ###

Internet Explorer 7-8, Firefox 3.6, Firefox 4.0b6, Safari 5, Chrome 9 dev

### Unit tests ###

See test/index.html.


## Release history ##

1.0 - (11/12/2010) Initial release


## License ##

Copyright (c) 2010 Visa Kopu, visa@visakopu.net

Licensed under the BSD license.
[http://github.com/roxeteer/jquery-afterresize/wiki/License](http://github.com/roxeteer/jquery-afterresize/wiki/License)

/*!
 * jQuery afterresize event plugin
 * http://github.com/roxeteer/jquery-afterresize
 *
 * Copyright (c) 2010 Visa Kopu, visa@visakopu.net
 *
 * Licensed under the BSD license.
 * http://github.com/roxeteer/jquery-afterresize/wiki/License
 */

(function($) {
    var resizeHandler = function(e) {
        var el = $(this);

        if (el.data("resizetimer")) {
            window.clearTimeout(el.data("resizetimer"));
        }

        el.data("resizetimer", window.setTimeout(function() {
            el.trigger("afterresize");
        }, 300));
    }

    $.event.special.afterresize = {
        add: function(handleObj) {
            $(this).bind("resize", resizeHandler);

            // apply old event handler
            var old_handler = handleObj.handler;
            handleObj.handler = function(event) {
                return old_handler.apply(this, arguments);
            }
        },

        remove: function(handleObj) {
            $(this).unbind("resize", resizeHandler);
        }
    };

    $.fn.extend({
        afterresize: function(f) {
            if ($.isFunction(f)) {
                $(this).bind("afterresize", f);
            } else {
                $(this).trigger("afterresize");
            }

            return this;
        }
    });
})(jQuery);
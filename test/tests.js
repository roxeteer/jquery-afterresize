(function($) {
    // jQuery version selector

    $("#version").change(function() {
        location.hash = $(this).val();
        location.reload();
    });

    // Tests

    var resizeTimeout = 1000; // make sure browser has enough time to resize the window

    module('window');

    asyncTest("afterresize", function() {
        expect(4);

        var eventcount = 0;

        equals(eventcount, 0, "event not yet fired");


        // bind event

        $(window).bind("afterresize", function() {
            eventcount++;
        });

        window.resizeBy(10, 10);
        window.setTimeout(function() {
            equals(eventcount, 1, "event should fire once");


            // test event triggering

            $(window).afterresize();

            equals(eventcount, 2, "event should fire once");
            

            // unbind event 

            $(window).unbind("afterresize");

            window.resizeBy(-10, -10);
            window.setTimeout(function() {
                equals(eventcount, 2, "no event should've been catched");
                start();
            }, resizeTimeout);
        }, resizeTimeout);
    });


    module('shorthand');

    asyncTest("afterresize", function() {
        expect(2);

        var eventcount = 0;

        equals(eventcount, 0, "event not yet fired");


        // bind event

        $(window).afterresize(function() {
            eventcount++;
        });

        window.resizeBy(10, 10);
        window.setTimeout(function() {
            equals(eventcount, 1, "event should fire once");

            // clean up
            $(window).unbind("afterresize");
            window.resizeBy(-10, -10);

            start();
        }, resizeTimeout);
    });


    module('element');

    asyncTest("afterresize", function() {
        expect(4);

        var div = $("<div/>").appendTo('body');

        var eventcount = 0;

        equals(eventcount, 0, "event not yet fired");


        // bind event

        div.bind("afterresize", function() {
            eventcount++;
        });

        window.resizeBy(10, 10);
        window.setTimeout(function() {
            equals(eventcount, 1, "event should fire once");


            // test event triggering

            div.afterresize();

            equals(eventcount, 2, "event should fire once");


            // unbind event

            div.unbind("afterresize");

            window.resizeBy(-10, -10);
            window.setTimeout(function() {
                equals(eventcount, 2, "no event should've been catched");
                start();
            }, resizeTimeout);
        }, resizeTimeout);
    });
})(jQuery);
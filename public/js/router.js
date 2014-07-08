define(['underscore', 'js/led'], function(_, Led, MidiCC) {

    var handlers = [Led];

    var Router = {};

    Router.routeMessage = function(message) {

        _.each(handlers, function(handler) {
            handler.handleMessage(message)
        });
        console.log(message);
    };

    return Router;
});

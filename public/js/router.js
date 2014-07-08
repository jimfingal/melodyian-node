define(['underscore', 'js/led', 'js/sound'], function(_, Led, Sound) {

    var handlers = [];
    handlers.push(Led);
    handlers.push(Sound);

    var Router = {};

    Router.routeMessage = function(message) {
        console.log(message);
        _.each(handlers, function(handler) {
            handler.handleMessage(message)
        });
    };

    return Router;
});

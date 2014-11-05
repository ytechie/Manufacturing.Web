angular.module('manufacturingWeb').factory('liveServer', function() {
    var factory = {};

    factory.apiUrl = "http://opcgate.azurewebsites.net";
    //factory.apiUrl = "http://localhost:16683";
    factory.connection = null;
    factory.connect = function(serverEventsCallback, connectedCallback) {
        disconnectIfConnected(function() {
            connect(serverEventsCallback, connectedCallback);
        });
    }

    return factory;

    function disconnectIfConnected(callback) {
        if (factory.connection) {
            var p = factory.connection.hub.stop();

            if (p && p.done) {
                p.done(function() {
                    factory.connection = null;
                    callback();
                });
            } else {
                factory.connection = null;
                callback();
            }
        } else {
            callback();
        }
    }

    function connect(serverEventsCallback, connectedCallback) {
        $.connection.hub.url = factory.apiUrl + '/signalr';

        console.log('Attempting signalr connection to ' + $.connection.hub.url);

        factory.eventsHub = $.connection.Events;
        factory.alarmsHub = $.connection.Alarms;

        if (serverEventsCallback) {
            serverEventsCallback();
        }

        console.log('Connecting to SignalR hub');
        $.connection.hub.start().done(function() {
            console.log('Connected to SignalR');
            factory.connection = $.connection;

            if (connectedCallback) {
                connectedCallback();
            }
        }).fail(function() {
            console.log('Failed to connect to SignalR hub');
        });
    }
});
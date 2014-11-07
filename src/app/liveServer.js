angular.module('manufacturingWeb').factory('liveServer', ['config', function(config) {
    var factory = {};

    factory.connection = null;
    factory.connect = function(serverEventsCallback, connectedCallback) {
        disconnectIfConnected(function() {
            connect(serverEventsCallback, connectedCallback);
        });
    }
    factory.online = null;
    factory.offline = null;

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
        $.connection.hub.url = config.apiUrl + '/signalr';

        console.log('Attempting signalr connection to ' + $.connection.hub.url);

        factory.dataHub = $.connection.DatasourceRecord;
        factory.alarmsHub = $.connection.Alarms;

        if (!factory.dataHub) {
            alert('Unable to load the signlR client script, please make sure "' + $.connection.hub.url + '" is accessible');
        }

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
            if (factory.online) {
                factory.online();
            }
        }).fail(function() {
            console.log('Failed to connect to SignalR hub');


        });

        $.connection.hub.stateChanged(function (cfg) {
            //{ 0: 'connecting', 1: 'connected', 2: 'reconnecting', 4: 'disconnected' };

            if (cfg.newState == 1) {
                if (factory.online) {
                    factory.online();
                }
            } else {
                if (factory.offline) {
                    factory.offline();
                }
            }
        });
    }
}]);
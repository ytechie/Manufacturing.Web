'use strict';

angular.module('manufacturingWeb').config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'app/main/main.html',
                controller: 'main'
            }).
            when('/events', {
                templateUrl: 'app/events/events.html',
                controller: 'events'
            }).
            when('/alarms',
            {
                templateUrl: 'app/alarms/alarms.html',
                controller: 'alarms'
            }).
            when('/history',
            {
                templateUrl: 'app/history/history.html',
                controller: 'history'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);
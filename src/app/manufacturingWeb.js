'use strict';

angular.module('manufacturingWeb', ['ngRoute']);

angular.module('manufacturingWeb').factory('config', function () {
    return {
        apiUrl: "http://localhost:3184"
        //apiUrl: "http://opcgate.azurewebsites.net"
    }
});
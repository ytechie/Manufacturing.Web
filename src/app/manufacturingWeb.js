'use strict';

angular.module('manufacturingWeb', ['ngRoute']);

angular.module('manufacturingWeb').factory('config', function () {
    return {
        //apiUrl: "http://192.168.1.202/opcweb"
        apiUrl: "http://opcgate.azurewebsites.net"
    }
});
mfxApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/datastreams', {
        templateUrl: 'app/DataStreams/DataStreams.html',
        controller: 'DataStreams'
      }).
      otherwise({
        redirectTo: '/datastreams'
      });
  }]);
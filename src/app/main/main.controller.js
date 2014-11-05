angular.module('manufacturingWeb')
    .controller('main', [
        '$scope',
        function($scope) {
            $scope.now = new Date();
        }
    ]);

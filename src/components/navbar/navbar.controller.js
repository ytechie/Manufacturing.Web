angular.module('manufacturingWeb')
    .controller('NavbarCtrl', [
        '$scope', 'liveServer', function($scope, liveServer) {
            $scope.date = new Date();

            liveServer.online = function() {
                $scope.online = true;
                $scope.$apply();
            }
            liveServer.offline = function() {
                $scope.online = false;
                $scope.$apply();
            }
        }
    ]);
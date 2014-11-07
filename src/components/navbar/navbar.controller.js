angular.module('manufacturingWeb')
    .controller('NavbarCtrl', [
        '$scope', '$location', 'liveServer', function($scope, $location, liveServer) {
            $scope.date = new Date();

            liveServer.online = function() {
                $scope.online = true;
                $scope.$apply();
            }
            liveServer.offline = function() {
                $scope.online = false;
                $scope.$apply();
            }

            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }
    ]);
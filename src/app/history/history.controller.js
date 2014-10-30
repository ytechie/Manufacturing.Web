angular.module('manufacturingWeb')
    .controller('history', [
        '$scope', '$http', function($scope, $http) {
            $scope.parameterUpdate = function() {
                //$scope.startDate

                var getConfig = {
                    url: "http://localhost:16683/api/history", //todo: unhardcode this
                    method: "GET",
                    params: {}
                }

                if ($scope.startDate) {
                    getConfig.params.startTime = $scope.startDate.toISOString();
                }
                if ($scope.endDate) {
                    getConfig.params.endTime = $scope.endDate.toISOString();
                }

                $http(getConfig).success(function(historyData) {
                    $scope.history = historyData;
                });
            }
        }
    ]);
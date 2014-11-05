angular.module('manufacturingWeb')
    .controller('history', [
        '$scope', '$http', 'config', function($scope, $http, config) {
            $scope.parameterUpdate = function() {
                //$scope.startDate

                var getConfig = {
                    url: config.apiUrl + "/api/history",
                    method: "GET",
                    params: {}
                };

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
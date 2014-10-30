angular.module('manufacturingWeb')
    .controller('alarms', [
        '$scope', 'liveServer', function ($scope, liveServer) {
            $scope.alarms = [];

            liveServer.connect(
                function () { wireUpServerEvents(liveServer, $scope) },
                function () { serverConnected(liveServer); }
            );
        }
    ]);

function wireUpServerEvents(server, $scope) {
    var alarmsHub = server.alarmsHub;
    var maxAlarms = 10;

    alarmsHub.client.newAlarm = function (alarm) {
        console.log('Alarm received: ' + alarm);

        $scope.alarms.push(alarm);
        if ($scope.alarms.length > maxAlarms) {
            $scope.alarms.shift();
        }
        $scope.$apply();
    }
}

function serverConnected(server) {
    console.log('Starting alarm stream');
    
    alarmsHub.server.start();
}
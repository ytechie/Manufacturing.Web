'use strict';

angular.module('manufacturingWeb')
    .controller('DataStreams', [
        '$scope', '$http', 'config', function ($scope, $http, config) {
            initChart();

            if (!config.apiUrl) {
                alert('Unknown API URL');
                return;
            }

            $scope.datasourceClick = function (datasource) {
                toggleSeries(datasource);

            };

            startSignalR(config.apiUrl);
            loadDatasourceList($scope, $http, config.apiUrl);
        }
    ]);

var chart;
var dsHub;

function toggleSeries(datasource) {
    datasource.subscribed = !datasource.subscribed;

    if (datasource.subscribed) {
        chart.addSeries({
            id: datasource.Id,
            name: datasource.Name,
            lineWidth: 4,
            marker: {
                enabled: false
            }
        });

        dsHub.server.register(datasource.Id);
        console.log('Subscribed for updates to datasource ' + datasource.Id);
    } else {
        var series = chart.get(datasource.Id);
        series.remove();

        dsHub.server.unregister(datasource.Id);
        console.log('Unsubscribed for updates to datasource ' + datasource.Id);
    }
}

function startSignalR(apiUrl) {
    var oversized;
    var series;

    $.connection.hub.url = apiUrl + '/signalr';

    dsHub = $.connection.DatasourceRecord;
    var recordsReceived = 0;
    dsHub.client.newRecord = function (record) {
        recordsReceived++;
        console.log('Total Records Received: ' + recordsReceived);

        series = chart.get(record.DatasourceId);
        if (series) {
            oversized = series.data.length >= 20;
            series.addPoint({
                y: record.Value
            }, true, oversized);
        }
    };

    console.log('Connecting to SignalR hub');
    $.connection.hub.start().done(function () {
        console.log('Connected to SignalR');
    }).fail(function () {
        console.log('Failed to connect to SignalR hub');
    });


}

function initChart() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            events: {
                //load: requestData
            }
        },

        title: {
            text: "Real-time Feed"
        },

        credits: {
            enabled: false
        },

        series: []
    });
}

function loadDatasourceList($scope, $http, apiUrl) {
    var datasourcesUrl = apiUrl + '/api/datasourceconfiguration';
    console.log('Loading datasources from ' + datasourcesUrl);
    $http.get(apiUrl + '/api/datasourceconfiguration')
        .success(function (results) {
            $scope.datasources = results;
        });
}
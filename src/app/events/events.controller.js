'use strict';

angular.module('manufacturingWeb')
    .controller('events', [
        '$scope', '$http', 'config', 'liveServer', function ($scope, $http, config, liveServer) {
            initChart();

            if (!config.apiUrl) {
                alert('Unknown API URL');
                return;
            }

            $scope.datasourceClick = function (datasource) {
                toggleSeries(datasource, liveServer);
            };

            startSignalR(liveServer);
            loadDatasourceList($scope, $http, config.apiUrl);
        }
    ]);

var chart;

function toggleSeries(datasource, liveServer) {
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

        liveServer.eventsHub.server.register(datasource.Id);
        console.log('Subscribed for updates to datasource ' + datasource.Id);
    } else {
        var series = chart.get(datasource.Id);
        series.remove();

        liveServer.eventsHub.server.unregister(datasource.Id);
        console.log('Unsubscribed for updates to datasource ' + datasource.Id);
    }
}

function startSignalR(liveServer) {
    liveServer.connect(function() {
        var oversized;
        var series;

        var eventsHub = liveServer.eventsHub;

        eventsHub.client.newRecord = function(record) {
            series = chart.get(record.DatasourceId);
            if (series) {
                oversized = series.data.length >= 20;
                series.addPoint({
                    y: record.Value
                }, true, oversized);
            }
        };
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
    var datasourcesUrl = apiUrl + '/api/eventConfigurations';
    console.log('Loading datasources from ' + datasourcesUrl);
    $http.get(apiUrl + '/api/eventConfigurations')
        .success(function (results) {
            $scope.datasources = results;
        });
}
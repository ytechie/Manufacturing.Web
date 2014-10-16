angular.module('manufacturingWeb')
    .controller('DataStreams', [
        '$scope', function($scope) {
            initChart();

            $.connection.hub.url = "http://localhost:3184/signalr";

            var dsHub = $.connection.DatasourceRecord;
            dsHub.client.newRecord = function (record) {
                //console.log('New Record: ' + record.IntervalSeconds);

                //throw away old points if we have 20 or more
                var oversized = chart.series[0].data.length >= 20;
                chart.series[0].addPoint({
                    y: record.IntervalSeconds / 100
                }, true, oversized);
            };

            console.log('Connecting to SignalR hub');
            $.connection.hub.start().done(function() {
                console.log('Connected to SignalR');
                dsHub.server.register(1);
            }).fail(function() {
                console.log('Failed to connect to SignalR hub');
            });
        }
    ]);

var chart;

function initChart() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            events: {
                //load: requestData
            }
        },

        title: {
            text: "Servo Torque"
        },
        
        credits: {
            enabled: false
        },

        series: [{
            name: 'Torque',
            lineWidth: 4,
            marker: {
                enabled: false
                //radius: 4
            }
        }]
    });
}
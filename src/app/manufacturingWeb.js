'use strict';

var mfxApp = angular.module('manufacturingWeb', ['ngRoute']);

//var chart;

////Charting

//function requestData() {
//    console.log('Starting data request');

//    //showDummyChart();

//    $.ajax({
//        url: 'http://10.82.119.6/mfxapi/api/Data?datasourceId=1&startDateTime=2014-04-30T12%3A34%3A56',
//        type: 'GET',
//        dataType: 'jsonp',
//        success: function (data) {

//            console.log('Rendering chart');

//            //console.log('Data: ' + data);

//            for(var i = 0; i < 50; i++) {
//                var val = data[i];
                
//                chart.series[0].addPoint({
//                //name: 'blah',
//                    y: val.IntervalSeconds
//                });
//            }
                
//        }
//    });

//    setInterval(function() {
//        //chart.series[0].data[0].remove(false, false);

//        chart.series[0].addPoint({
//            y: (Math.random() * 3000)
//        }, true, true);
        
//    }, 1000);
//}

//function showChart() {
//    chart = new Highcharts.Chart({
//        chart: {
//            renderTo: 'chart',
//            events: {
//                load: requestData
//            }
//        },

//        title: {
//            text: "Servo Torque"
//        },
        
//        series: [{
//            name: 'Torque',
//            lineWidth: 4,
//            marker: {
//                radius: 4
//            }
//        }]
//    });



//}

//function showDummyChart() {
//$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {

//        $('#chart').highcharts({

//            data: {
//                csv: csv
//            },

//            title: {
//                text: 'Daily visits at www.highcharts.com'
//            },

//            subtitle: {
//                text: 'Source: Google Analytics'
//            },

//            xAxis: {
//                tickInterval: 7 * 24 * 3600 * 1000, // one week
//                tickWidth: 0,
//                gridLineWidth: 1,
//                labels: {
//                    align: 'left',
//                    x: 3,
//                    y: -3
//                }
//            },

//            yAxis: [{ // left y axis
//                title: {
//                    text: null
//                },
//                labels: {
//                    align: 'left',
//                    x: 3,
//                    y: 16,
//                    format: '{value:.,0f}'
//                },
//                showFirstLabel: false
//            }, { // right y axis
//                linkedTo: 0,
//                gridLineWidth: 0,
//                opposite: true,
//                title: {
//                    text: null
//                },
//                labels: {
//                    align: 'right',
//                    x: -3,
//                    y: 16,
//                    format: '{value:.,0f}'
//                },
//                showFirstLabel: false
//            }],

//            legend: {
//                align: 'left',
//                verticalAlign: 'top',
//                y: 20,
//                floating: true,
//                borderWidth: 0
//            },

//            tooltip: {
//                shared: true,
//                crosshairs: true
//            },

//            plotOptions: {
//                series: {
//                    cursor: 'pointer',
//                    point: {
//                        events: {
//                            click: function (e) {
//                                hs.htmlExpand(null, {
//                                    pageOrigin: {
//                                        x: e.pageX || e.clientX,
//                                        y: e.pageY || e.clientY
//                                    },
//                                    headingText: this.series.name,
//                                    maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
//                                        this.y + ' visits',
//                                    width: 200
//                                });
//                            }
//                        }
//                    },
//                    marker: {
//                        lineWidth: 1
//                    }
//                }
//            },

//            series: [{
//                name: 'All visits',
//                lineWidth: 4,
//                marker: {
//                    radius: 4
//                }
//            }, {
//                name: 'New visitors'
//            }]
//        });
//    });
//}

//$(function () {
//    showChart();

//});




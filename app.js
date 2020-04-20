(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('overviewController', function ($scope) {
  
  var date = new Date().toJSON().slice(0,10);
  $scope.timeNow = date;
  setChartTemp(); //Start with a default chart (Temp)

  $scope.getChartData = function (curTopic) {
    console.log('CurTopic: '+curTopic);
    
    switch(curTopic) {
      case 'Temp':
        setChartTemp();
        break;
      
      case 'Humid':
        setChartHumid();
        break;

      default:
        console.error('CurTopic not implemented.');
    }

    var elmnt = document.getElementById("topDiv");
    elmnt.scrollIntoView();

  };

  function setChartTemp() {
    var ctx = document.getElementById('dayChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['08h00', '10h00', '12h00', '14h00', '16h00', '18h00'],
            datasets: [{
                label: 'Temperatura',
                data: [12, 14, 11, 10, 8, 6],
                fill : false,
                lineTension : 0.2,
            borderColor:'Red'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  function setChartHumid() {
    var ctx = document.getElementById('dayChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['08h00', '10h00', '12h00', '14h00', '16h00', '18h00'],
            datasets: [{
                label: 'Umidade do Ar',
                data: [50, 60, 60, 62, 55, 40],
                fill : false,
                lineTension : 0.2,
            borderColor:'Blue'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }  

});

})();

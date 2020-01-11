Highcharts.chart('containerOne', {
    chart: {
        type: 'column',
        backgroundColor: '#fffcfc'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,

            style: {
                fontSize: '13px',
                fontFamily: 'Helvetica, Arial, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: ''
    },
    plotOptions: {
            series: {
                pointWidth: 35
            }
        },
    series: [{
        name: '',
        data: [
            {
			    name: '01-02-19',
			    color: '#bf5b17',
			    y: 10
			}, {
			    name: '02-02-19',
			    color: '#bf5b17',
			    y: 16
			},
			{
			    name: '03-02-19',
			    color: '#bf5b17',
			    y: 12
			}, {
			    name: '04-02-19',
			    color: '#bf5b17',
			    y: 28
			},
			{
			    name: '05-02-19',
			    color: '#bf5b17',
			    y: 11
			}, {
			    name: '06-02-19',
			    color: '#bf5b17',
			    y: 9
			},
			{
			    name: '07-02-19',
			    color: '#bf5b17',
			    y: 26
			}, {
			    name: '08-02-19',
			    color: '#bf5b17',
			    y: 33
			},
			{
			    name: '09-02-19',
			    color: '#bf5b17',
			    y: 29
			}, {
			    name: '10-02-19',
			    color: '#bf5b17',
			    y: 17
			},
			{
			    name: '11-02-19',
			    color: '#bf5b17',
			    y: 33
			}, {
			    name: '12-02-19',
			    color: '#bf5b17',
			    y: 15
			},
			{
			    name: '13-02-19',
			    color: '#bf5b17',
			    y: 38
			}, {
			    name: '14-02-19',
			    color: '#bf5b17',
			    y: 33
			},
			{
			    name: '15-02-19',
			    color: '#bf5b17',
			    y: 22
			}, {
			    name: '16-02-19',
			    color: '#bf5b17',
			    y: 38
			},
			{
			    name: '17-02-19',
			    color: '#bf5b17',
			    y: 22
			}, {
			    name: '18-02-19',
			    color: '#bf5b17',
			    y: 29
			},
			{
			    name: '19-02-19',
			    color: '#bf5b17',
			    y: 36
			}, {
			    name: '20-02-19',
			    color: '#bf5b17',
			    y: 32
			},
            {
                name: '21-02-19',
                color: '#bf5b17',
                y: 29
            }, {
                name: '22-02-19',
                color: '#bf5b17',
                y: 18
            },
            {
                name: '23-02-19',
                color: '#bf5b17',
                y: 21
            }, {
                name: '24-02-19',
                color: '#bf5b17',
                y: 36
            },
            {
                name: '25-02-19',
                color: '#bf5b17',
                y: 27
            }, {
                name: '26-02-19',
                color: '#bf5b17',
                y: 33
            },
            {
                name: '27-02-19',
                color: '#bf5b17',
                y: 40
            }, {
                name: '28-02-19',
                color: '#bf5b17',
                y: 32
            },
            {
                name: '29-02-19',
                color: '#bf5b17',
                y: 18
            }, {
                name: '30-02-19',
                color: '#bf5b17',
                y: 36
            }
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#fffcfc',
            align: 'right',
            format: '{point.y:.0f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif'
            }
        }
    }]
});

//small cart code here 
Highcharts.chart('containertwo', {
    chart: {
        type: 'column',
        backgroundColor: '#fffcfc'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    responsive: {
  rules: [{
    condition: {
      maxWidth: 500
    },
    chartOptions: {
      legend: {
        enabled: false
      }
    }
  }]
},
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,

            style: {
                fontSize: '13px',
                fontFamily: 'Helvetica, Arial, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: ''
    },
    plotOptions: {
            series: {
                pointWidth: 80
            }
        },
    series: [{
        name: '',
        data: [
            {
			    name: 'Sick',
			    color: '#be5a15',
			    y: 60
			}, {
			    name: 'Not Sick',
			    color: '#d88e35',
			    y: 40
			}
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#fffcfc',
            align: 'right',
            format: '{point.y:.0f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif'
            }
        }
    }]
});


//national ids chart


//doughnut
var ctxD = document.getElementById("roundChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
type: 'doughnut',
data: {

datasets: [{
data: [86, 14],
backgroundColor: ["#c0c0c0", "#be5b15"],
hoverBackgroundColor: ["#c0c0c0", "#be5b15"]
}]
},
options: {
responsive: true
}
});

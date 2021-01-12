
window.chartjs_blue = "#0A2D50";
window.chartjs_indigo = "#005AD2";
window.chartjs_purple = "#7242C2";
window.chartjs_pink = "#FC5E72";
window.chartjs_red = "#E2231A";
window.chartjs_orange = "#FF5F05";
window.chartjs_yellow = "#F39C12";
window.chartjs_green = "#28C382";
window.chartjs_teal = "#009EA0";
window.chartjs_cyan = "#3498DB";

window.chartjs_gray_100 = "#f8f9fa";
window.chartjs_gray_200 = "#ecf0f1";
window.chartjs_gray_300 = "#dee2e6";
window.chartjs_gray_400 = "#ced4da";
window.chartjs_gray_500 = "#b4bcc2";
window.chartjs_gray_600 = "#95a5a6";
window.chartjs_gray_700 = "#7b8a8b";
window.chartjs_gray_800 = "#343a40";
window.chartjs_gray_900 = "#212529";

window.chartjs_primary = "#333C3E";
window.chartjs_secondary = window.chartjs_blue;

function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

function RenderGuage(elem, label, value, max_value=100, color=window.chartjs_primary)
{
  var ctx = document.getElementById(elem).getContext('2d');
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [label],
      datasets: [
        {
          label: [label],
          data: [value, max_value - value],
          backgroundColor: [color],
          borderColor: [LightenDarkenColor(color, -20)],
          borderWidth: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      circumference: Math.PI + 1,
      rotation: -Math.PI - 0.5,
      cutoutPercentage: 64,
    }
  });
}

window.RenderGuage = RenderGuage;

function RenderBarChart(elem, title, labels, data, color=window.chartjs_primary)
{
  var ctx = document.getElementById(elem).getContext('2d');
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
			labels: labels,
      datasets: [{
        label: title,
            barPercentage: 1,
            barThickness: 50,
            maxBarThickness: 50,
            minBarLength: 5,
    				backgroundColor: color,
    				borderColor: LightenDarkenColor(color, -20),
            data: data
        }]
    },
		options: {
			elements: {
				rectangle: {
					borderWidth: 2,
				}
			},
			responsive: true,
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: title
			},
      scales: {
          yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,
                  beginAtZero: true
              }
          }]
      }
		}
  });
}

window.RenderBarChart = RenderBarChart;


function RenderHorizBarChart(elem, title, labels, data, color=window.chartjs_primary)
{
  var ctx = document.getElementById(elem).getContext('2d');
  var myChart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
			labels: labels,
      datasets: [{
        label: title,
            barPercentage: 1,
            barThickness: 50,
            maxBarThickness: 50,
            minBarLength: 5,
    				backgroundColor: color,
    				borderColor: LightenDarkenColor(color, -20),
            data: data
        }]
    },
		options: {
			elements: {
				rectangle: {
					borderWidth: 2,
				}
			},
			responsive: true,
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: title
			},
      scales: {
          xAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,
                  beginAtZero: true
              }
          }]
      }
		}
  });
}

window.RenderHorizBarChart = RenderHorizBarChart;

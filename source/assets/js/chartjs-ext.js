
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

function RenderGuage(elem, label, value, color=window.chartjs_primary)
{
  var ctx = document.getElementById(elem);
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [label, ""],
      datasets: [
        {
          label: [label, ""],
          data: [value, 100 - value],
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

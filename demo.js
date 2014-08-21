function graph_draw (w,h) {

	xValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
	yValues1 = [-1, 2, 4, 10, 8, 10, 5, 3, 7, 0, 0, 3, 5, 3, 5, 5, 5, 2, -1, 3, 3, 4, 3, -2, -4, -1, 1, -1, -4, -2];
	yValues2 = [32, 19, 17, 22, 26, 26, 23, 25, 20, 19, 20, 25, 20, 19, 25, 17, 20, 24, 18, 20, 25, 19, 20, 26, 29, 24, 22, 21, 28, 30];
	
	var linechart = new lineChart('linechart', 0,0,w,h, xValues, {
		padding: [0,0,0,0],
		legend: {
			show: false,
		},
		graph: [{
			name: 'Калининград',
			yValues: yValues1,
			showDots: false,
			showLine: true,
			showArea: false,
			smooth: true,
			tooltip: {
				activator: 'dot',
				labels: function(r, xValue, yValue, n){
					return [
						r.text(0, 0, yValue>0 ? '+'+yValue+' °C' : yValue+' °C').attr({font: '16px "Trebuchet MS"', fill: 'yellow', color: 'yellow', 'text-anchor': 'middle'}),
						r.text(0, 24, 'Калининград, '+xValue+' ноября 2012').attr({font: 'italic 11px "Trebuchet MS"', fill: '#e9e9e9', color: '#e9e9e9', 'text-anchor': 'middle'})
					];
				}
			}
		}],
		xAxis: {
			labelsStep: 5,
			labelsShift: 1,
			labelFormatter: function(value, n){
				return value+'.11';
			}
		},
		yAxis: {
			pLabelsNN: 10,
			labelsStep: 2,
			labelsShift: 1,
			labelFormatter: function(value){
				return value +' °C';
			}
		}
	});
	linechart.draw();	
}



window.onload = function() {
	graph_draw(640, 400);
};

window.resize = function() {
	graph_draw(500, 300);
};
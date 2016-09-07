angular.module('agrofinger')
.controller('TableroDeControlController', function() {
	this.f = function(scope) {
		console.log(scope)
	}
	this.aplicaciones = {
		pendientes: 5,
		realizadas: {
			options: {
				chart: {
					type: 'discreteBarChart',
					margin : {
						top: 0,
						right: 0,
						bottom: 20,
						left: 20
					},
					width: 280,
					x: function(d){return d.label},
					y: function(d){return d.value + (1e-10)},
					showValues: true,
					duration: 500
				}
			},
			data: [
				{
					values: [
						{
							"label" : "Lote A" ,
							"value" : 1
						} ,
						{
							"label" : "Lote B" ,
							"value" : 2
						} ,
						{
							"label" : "Lote C" ,
							"value" : 2
						} ,
						{
							"label" : "Lote D" ,
							"value" : 3
						}
					]
				}
			]
		}
	}
	this.metodosDeAccion = {
		options:  {
            chart: {
                type: 'multiBarHorizontalChart',
                x: function(d){return d.label;},
                y: function(d){return d.value;},
				width: 280,
                showControls: false,
                showValues: true,
                duration: 500,
				showXAxis: true,
				showYAxis: true
            }
        },
		data:  [
            {
				"key": "Series1",
                "values": [
                    {
                        "label" : "Group A" ,
                        "value" : 40
                    } ,
                    {
                        "label" : "Group B" ,
                        "value" : 60
                    }
                ]
            }
		]
	}
})
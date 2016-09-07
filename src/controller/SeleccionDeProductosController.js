angular.module('agrofinger')
.controller('SeleccionDeProductosController', function($location, $routeParams, productoService) {
	this.productos = productoService.todos
	this.productosSeleccionados = []
	
	var that = this
	this.seleccionarProducto = function(selected) {
		that.productosSeleccionados.push(selected.originalObject)
	}
	
	this.siguiente = function() {
		$location.path('/campos/default/lotes/' + $routeParams.lote + '/aplicaciones/nueva/mezcla')
	}
})
angular.module('agrofinger')
.controller('AplicacionesPendientesParaLoteEspecificoController', function($routeParams, loteService) {
	this.lote = loteService.todos[$routeParams.lote]
})
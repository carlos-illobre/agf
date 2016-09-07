angular.module('agrofinger')
.controller('ProgramarAplicacionesController', function($routeParams, campoService, loteService) {
	this.campos = campoService.getCampos()
	this.campoPorDefecto = campoService.getCampoDefault()
	this.lote = loteService.todos[$routeParams.lote]
	this.lotes = loteService.todos
})
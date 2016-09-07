angular.module('agrofinger')
.controller('DetalleDeLoteController', function($routeParams, loteService, campaniaService) {
	this.campanias = ['Todas'].concat(campaniaService.getCampanias())
	this.lote = loteService.todos[$routeParams.lote]
})
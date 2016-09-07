angular.module('agrofinger')
.controller('CrearLotesController', function($location, campoService, campaniaService, loteService, cultivoService) {
	this.lote = {
		campo: campoService.getCampoDefault(),
		campania: campaniaService.getCampaniaActual(),
		nombre: null,
		superficie: null,
		cultivo: null,
		antecesor: null
	}
	
	this.cultivos = cultivoService.getCultivos()
	
	this.guardar = function() {
		loteService.crearLote(this.lote)
		$location.path('/cuenta/campos/default/lotes')
	}
})
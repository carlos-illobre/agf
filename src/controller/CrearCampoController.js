angular.module('agrofinger')
.controller('CrearCampoController', function($location, campoService, campaniaService) {
	this.campanias = campaniaService.getCampanias()
	this.campo = {
		campania: campaniaService.getCampaniaActual(),
		nombre: '',
		superficie: null,
		zona: null
	}
	this.equipo = []
	this.agregarMiembro = function(miembro) {
		if (miembro) {
			this.equipo.push(miembro)
		}
	}
	this.removerMiembro = function(index) {
		this.equipo.splice(index, 1)
	}
	this.guardar = function() {
		campoService.crearCampo(this.campo)
		$location.path('/tablero')
	}
})
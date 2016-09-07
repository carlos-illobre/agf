angular.module('agrofinger')
.controller('RegistroDeCuentaController', function($location, cuentaService, campoService) {
	this.cuenta = {
		email: null,
		password: null,
		campoDefault: {
			nombre: null
		}
	}

	this.colaboradores = []
	this.agregarColaborador = function(colaborador) {
		if (colaborador) {
			this.colaboradores.push(colaborador)
		}
	}
	this.removerColaborador = function(index) {
		this.colaboradores.splice(index, 1)
	}
	
	this.registrar = function() {
		cuentaService.crearCuenta(this.cuenta, this.colaboradores)
		campoService.crearCampo(this.cuenta.campoDefault)
		$location.path('/cuenta/opciones')
	}
	
})
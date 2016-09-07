angular.module('agrofinger')
.controller('IniciarSesionController', function($location, cuentaService) {
	this.cuenta = {
		email: null,
		password: null
	}
	
	this.logon = function() {
		if (cuentaService.logon(this.cuenta)) {
			$location.path('/cuenta/opciones')
		} else {
			alert('Usuario no autorizado')
		}
	}
})
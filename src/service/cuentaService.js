angular.module('agrofinger')
.service('cuentaService', function() {
	this.cuenta = null
	
	this.crearCuenta = function(cuenta, colaboradores) {
		this.cuenta = cuenta
	}
	
	this.logon = function(cuenta) {
		return false
	}
})
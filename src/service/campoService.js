angular.module('agrofinger')
.service('campoService', function() {
	var campos = []
	var campoDefault
	
	this.crearCampo = function(campo) {
		campos.push(campo)
	}
	
	this.getCampos = function() {
		return campos
	}
	
	this.getCampoDefault = function() {
		return campoDefault || campos[0]
	}
	
	this.setCampoDefault = function(newCampoDefault) {
		campoDefault = newCampoDefault
	}
})
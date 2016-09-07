angular.module('agrofinger')
.controller('InicioController', function($location) {
	var prevIndex = 0
	var index = 0
	this.content = [
		'Crear lotes y programar aplicaciones',
		'Mezclar productos en el tanque y chequear condiciones óptimas de aplicación',
		'Registrar aplicaciones, realizar el seguimiento y control'
	]
	this.next = next
	this.prev = prev
	this.isIndex = isIndex
	this.isRightToLeftAnimation = isRightToLeftAnimation
	this.getIndex = getIndex
	
	function next() {
		prevIndex = index
		index++
		if (index == 3) {
			$location.path('/cuenta/email')
		}
	}
	
	function prev() {
		if (index) {
			prevIndex = index
			index--
		}
	}
	
	function isIndex(i) {
		return index == i
	}
	
	function isRightToLeftAnimation() {
		return prevIndex <= index
	}
	
	function getIndex() {
		return index
	}
})
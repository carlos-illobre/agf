angular.module('agrofinger')
.service('loteService', function() {
	this.todos = []
	
	this.crearLote = function(lote) {
		lote.id = this.todos.length
		this.todos.push(lote)
	}
})
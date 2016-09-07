angular.module('agrofinger')
.controller('ListadoDeLotesController', function(loteService, campaniaService, campoService) {
	this.campanias = ['Todas'].concat(campaniaService.getCampanias())
	this.campos = ['Todos'].concat(campoService.getCampos())
	this.toggleFavoritos = true
	this.lotes = loteService.todos
	this.cantidadSeleccionados = 0

	this.contarSeleccionados = function(isSeleccionado) {
		if (isSeleccionado) {
			this.cantidadSeleccionados++
		} else {
			this.cantidadSeleccionados--
		}
	}

	this.setFavoritos = function() {
		var that = this
		this.lotes.filter(function(lote) {
			return lote.seleccionado
		}).forEach(function(lote) {
			lote.favorito = that.toggleFavoritos
		})
		this.toggleFavoritos = !this.toggleFavoritos;
	}
})
.filter('loteDescripcion', function() {
	return function(lote) {
		return lote.superficie + ' ha - ' + lote.cultivo
	}
})
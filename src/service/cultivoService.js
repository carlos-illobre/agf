angular.module('agrofinger')
.service('cultivoService', function() {
	var cultivos = ['Maíz', 'Soja', 'Trigo', 'Cebada', 'Girasol', 'Colza', 'Arveja', 'Garbanzo']
	
	this.getCultivos = function() {
		return cultivos
	}
	
})
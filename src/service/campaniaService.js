angular.module('agrofinger')
.service('campaniaService', function() {
	var todas = ['2015 - 2016', '2014 - 2015', '2013 - 2014']
	
	this.getCampaniaActual = function() {
		return todas[0]
	}
	
	this.getCampanias = function() {
		return todas
	}
})
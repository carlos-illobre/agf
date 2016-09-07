angular.module('agrofinger')
.controller('PrintController', function($window) {
	this.print = function() {
		$window.print()
	}
})
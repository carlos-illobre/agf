angular.module('agrofinger')
.directive('print', function($window) {
	return {
		restrict: 'A',
		controllerAs: 'clickPrintController',
		controller: function() {
			this.print = function() {
				$window.print()
			}
		},
		template:
'<a href="" ng-click="clickPrintController.print()">' +
'	<i class="material-icons">print</i>' +
'	<span>Imprimir</span>' +
'</a>'
	}
})
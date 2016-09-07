/**
 * Ej: <div dots-nav="6" active="3" active-class="teal lighten-5" nonactive-class="teal lighten-2" dot-style="border-color:#00796b;"/>
 */
angular.module('agrofinger')
.directive('dotsNav', function() {
	return {
		restrict: 'A',
		scope: {
			dotsNav: '@',			// Cantidad de puntos
			active: '=',			// Punto activo, comienza en cero
			dotSize: '@',			// Tamaño del punto, ej: 10px
			activeClass: '@',		// class css para el punto activo
			nonactiveClass: '@',	// class css para el punto no activo
			dotStyle: '@'			// style que sera concatenado al final del style de los puntos
		},
		controller: function($scope) {
			$scope.dots = new Array(parseInt($scope.dotsNav))
			if (!$scope.dotSize && $scope.dotSize !== 0) {
				$scope.dotSize = '15px'
			}
			if (!$scope.active) {
				$scope.active = 0
			}
		},
		controllerAs: 'c',
		template: 
'<span ng-repeat="i in dots track by $index"' +
' style="height:{{dotSize}};' +
' width: {{dotSize}};' +
' border-radius: 15px;' +
' border: 1px solid;' +
' display: inline-block;' +
' box-shadow: inset -1px -1px 1px #888;' +
' margin:0 15px;' +
' {{dotStyle}}"' +
' ng-class="{\'{{activeClass}}\':active == $index, \'{{nonactiveClass}}\':active != $index}"' +
'></span>'
	}
})


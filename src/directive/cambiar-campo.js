angular.module('agrofinger')
.directive('cambiarCampo', function() {
    return {
		restrict: 'A',
		replace: true,
		controller: function($scope, campoService) {
			$scope.guid = Materialize.guid()
			$scope.options = campoService.getCampos()
			$scope.optionKeyName = 'nombre'
			$scope.select = function(index) {
                $scope.cambiarCampo = $scope.options[index]
				campoService.setCampoDefault($scope.options[index])
                angular.element('#' + $scope.id).closeModal()
            }
		},
		scope: {
			id: '@',
			cambiarCampo: '='
		},
		template:
'       <ul class="modal collection" style="max-height:80%;width:95%;border-radius:5px;">' +
'           <li ng-repeat="item in options" class="collection-item">' +
'               <input id="{{\'radio-\' + $index + \'-\' + guid}}"' +
'                      type="radio"' +
'                      name="{{\'group-\' + guid}}"' +
'                      class="with-gap"' +
'                      ng-click="select($index)" />' +
'               <label for="{{\'radio-\' + $index + \'-\' + guid}}"' +
'				 	   class="grey-text text-darken-2"' +
'					   style="top:0;left:0;">{{item[optionKeyName]}}</label>' +
'           </li>' +
'           <li class="collection-item">' +
'               <a href="#/campos/nuevo">' +
'                   <i class="material-icons" style="vertical-align:middle;">add</i>' +
'                   <span style="vertical-align:middle;">Crear nuevo campo</span>' +
'               </a>' +
'           </li>' +
'       </ul>'
	}
})
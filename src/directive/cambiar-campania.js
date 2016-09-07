angular.module('agrofinger')
.directive('cambiarCampania', function() {
    return {
		restrict: 'A',
		replace: true,
		controller: function($scope, campaniaService) {
			$scope.guid = Materialize.guid()
			$scope.options = campaniaService.getCampanias()
			$scope.select = function(index) {
                $scope.cambiarCampania = $scope.options[index]
                angular.element('#' + $scope.id).closeModal()
            }
		},
		scope: {
			id: '@',
			cambiarCampania: '='
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
'					   style="top:0;left:0;">{{item}}</label>' +
'           </li>' +
'       </ul>'
	}
})
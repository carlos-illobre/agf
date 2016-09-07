angular.module('agrofinger')
.directive('selectModal', function() {
    return {
        restrict: 'A',
        controller: function($scope) {
            $scope.guid = Materialize.guid()
			$scope.idModal = Materialize.guid()
            $scope.openModal = function() {
                angular.element('#' + $scope.idModal).openModal()
            }
            $scope.select = function(index) {
                $scope.selected = $scope.options[index]
                angular.element('#' + $scope.idModal).closeModal()
            }
			$scope.options = !$scope.keyLabel ? $scope.options : $scope.options.map(function(item) {
				return item[$scope.keyLabel]
			})
			$scope.selected = !$scope.keyLabel ? $scope.selected : $scope.selected[$scope.keyLabel]
        },
        scope: {
            selectModal: '@',
			options: '=',
            selected: '=',
			keyLabel: '@',
            rel: '@',
            href: '@'
        },
        template:
'<div>' +
'    <style>' +
'    	.input-field > div > .material-icons {' +
'    		position: absolute;' +
'    		top: 16px;' +
'    		right: 0;' +
'    	}' +
'    </style>' +
'    <input id="{{\'input-\' + \'-\' + guid}}"' +
'			ng-model="selected"' +
'			type="text"' +
'			readonly' +
'			ng-click="openModal()"' +
'	 />' +
'    <label for="{{\'input-\' + \'-\' + guid}}"' +
'			ng-class="{\'active\':selected}"' +
'           >{{selectModal}}</label>' +
'    <i class="material-icons">arrow_drop_down</i>' +
'    <aside>' +
'        <ul id="{{idModal}}" class="modal collection" style="max-height:80%;width:95%;border-radius:5px;">' +
'            <li ng-repeat="item in options" class="collection-item">' +
'                <input id="{{\'radio-\' + $index + \'-\' + guid}}"' +
'                       type="radio"' +
'                       name="{{\'group-\' + guid}}"' +
'                       class="with-gap"' +
'                       ng-click="select($index)" />' +
'                <label for="{{\'radio-\' + $index + \'-\' + guid}}"' +
'						class="grey-text text-darken-2"' +
'						style="top:0;left:0;">{{item}}</label>' +
'            </li>' +
'            <li ng-if="rel" class="collection-item">' +
'                <a href="{{href}}">' +
'                    <i class="material-icons" style="vertical-align:middle;">add</i>' +
'                    <span style="vertical-align:middle;">{{rel}}</span>' +
'                </a>' +
'            </li>' +
'        </ul>' +
'    </aside>' +
'</div>'
    }
})
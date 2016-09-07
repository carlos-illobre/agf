angular.module('agrofinger')
.directive('navbar', function($window) {
	return {
		restrict: 'A',
		replace: true,
		transclude: true,
		scope: {
			hideLogo: '=',
			backArrow: '='
		},
		controller: function($scope) {
			$scope.clickLeftIcon = function() {
				/*if ($scope.backArrow) {
					$window.history.back()
				}*/
			}
		},
		template:
'<header class="navbar-fixed little-navbar" >' +
'	<nav class="teal">' +
'		<div class="nav-wrapper">' +
'			<ul class="left">' +
'				<li>' +
'					<a href="">' +
'						<i ng-click="clickLeftIcon()" class="material-icons">{{backArrow ? \'arrow_back\' : \'menu\'}}</i>' +
'					</a>' +
'				</li>' +
'				<span ng-hide="hideLogo">AgroFinger</span>' +
'			</ul>' +
'			<ul class="right" ng-transclude>' +
'			</ul>' +
'		</div>' +
'	</nav>' +
'</header>'
	}
})
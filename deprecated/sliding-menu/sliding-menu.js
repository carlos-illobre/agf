angular.module('sliding-menu', ['swipe'])
.directive('rightSlidingMenu', function() {
	return {
		restrict: 'A',
		compile: function(element, attributes) {
			
			var aside = element.children().eq(0)
			aside.addClass('sliding-menu right-sliding-menu ')
			aside.attr('ng-if', 'slidingMenu.isOpen()')
			aside.attr('ng-swipe-right', 'slidingMenu.close()')
			
			var content = element.children().eq(1)
			content.addClass('sliding-menu-content')
			content.attr('ng-click', 'slidingMenu.close()')
			content.attr('ng-swipe-left', 'slidingMenu.open()')
			
			return {
				pre: function(scope, element, attributes, controller, transcludeFn) {
				},
				post: function(scope, element, attributes, controller, transcludeFn) {
				}
			}
		},
		controllerAs: 'slidingMenu',
		controller: function() {
			var _isOpen
			this.isOpen = function() {
				return _isOpen
			}
			this.open = function($event) {
				_isOpen = true
				if ($event) {
					$event.stopPropagation()
				}
			}
			this.close = function() {
				_isOpen = false
			}
		}
	}
})
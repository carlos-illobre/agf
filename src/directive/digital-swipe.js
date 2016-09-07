angular.module('agrofinger')
.directive('digitalSwipe', function() {
    return {
        link: function(scope, element, attributes, controller) {
			var diff
            element.on('touchstart', function(event) {
                event.preventDefault()
                var targetTouches = event.originalEvent.targetTouches
                if (targetTouches.length == 1) {
                    var touch = targetTouches[0]
                    diff = {
						x: touch.pageX
                    }
                }
            })
            element.on('touchmove', function(event) {
                event.preventDefault();
                var targetTouches = event.originalEvent.targetTouches
                if (targetTouches.length == 1) {
                    var touch = targetTouches[0]
					element.css('position', 'relative')
                    element.css('left', touch.pageX - (isNaN(diff.x) ? 0 : diff.x) + 'px')
                }
            })
            element.on('touchend', function(event) {
                event.preventDefault()
				element.css('position', 'static')
            })
        }
    }
})
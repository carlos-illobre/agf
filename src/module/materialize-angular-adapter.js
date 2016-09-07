angular.module('materialize-angular-adapter', [])
.directive('select', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attributes) {
			element.material_select()
		}
	}
})
.directive('datepicker', function() {
	return {
		restrict: 'C',
		link: function(scope, element, attributes) {
			element.pickadate({
				labelMonthNext: 'Next month',
				labelMonthPrev: 'Previous month',
				labelMonthSelect: 'Select a month',
				labelYearSelect: 'Select a year',
				monthsFull: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
				monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
				weekdaysFull: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
				weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
				weekdaysLetter: [ 'D', 'L', 'M', 'M', 'J', 'V', 'S' ],
				today: null,
				clear: 'Cancelar',
				close: 'Seleccionar',
				firstDay: 0,
				formatSubmit: 'yyyy/mm/dd',
				format: 'dd/mm/yyyy',
				closeOnSelect: false,
				closeOnClear: false
			})
		}
	}
})
.directive('dropdownButton', function() {
	return {
		restrict: 'C',
		link: function(scope, element, attributes) {
			element.dropdown({
				belowOrigin: true,
				constrain_width: false
			})
		}
	}
})
.directive('modalTrigger', function() {
	return {
		restrict: 'C',
		link: function(scope, element, attributes) {
			element.leanModal();
		}
	}
})
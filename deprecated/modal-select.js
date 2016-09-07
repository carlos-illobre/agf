angular.module('agrofinger')
.directive('modalSelect', function() {
	return {
		restrict: 'A',
		replace: true,
		scope: {
			modalSelect: '=',
			title: '@',
			selected: '='
		},
		template:
'<aside class="modal">' +
'	<div style="padding-bottom: 0px;" class="modal-content">' +
'		<h6>{{title}}</h6>' +
'		<div class="input-field">' +
'			<select class="browser-default" ng-options="option for option in modalSelect" ng-model="selected">' +
'			</select>' +
'		</div>' +
'	</div>' +
'	<div class="modal-footer">' +
'		<a href="" class="teal-text text-lighten-1 modal-action modal-close waves-effect waves-green btn-flat">Aceptar</a>' +
'		<a href="" style="padding:0px 1rem" class="grey-text text-darken-1 teal-text text-lighten-1 modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>' +
'	</div>' +
'</aside>'
	}
})
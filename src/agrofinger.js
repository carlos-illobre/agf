angular.module('agrofinger', [
	'ngRoute',
	'ngAnimate',
	'angucomplete-alt',
	'nvd3',
	'materialize-angular-adapter'
])
.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'inicio.html'
	}).when('/presentacion', {
		templateUrl: 'inicio.html'
	}).when('/cuenta', {
		templateUrl: 'iniciar-sesion.html'
	}).when('/cuenta/email', {
		templateUrl: 'registro-de-cuenta-email.html'
	}).when('/cuenta/password', {
		templateUrl: 'registro-de-cuenta-password.html'
	}).when('/cuenta/campos/default', {
		templateUrl: 'registro-de-cuenta-campo.html'
	}).when('/cuenta/opciones', {
		templateUrl: 'primer-uso.html'
	}).when('/cuenta/campos/default/lotes/new', {
		templateUrl: 'crear-lotes.html'
	}).when('/cuenta/campos/default/lotes', {
		templateUrl: 'listado-de-lotes.html'
	}).when('/campos/default/lotes/:lote', {
		templateUrl: 'detalle-del-lote.html'
	}).when('/campos/default/lotes/:lote/aplicaciones/nueva', {
		templateUrl: 'programar-aplicacion.html'
	}).when('/campos/default/lotes/:lote/aplicaciones/nueva/productos', {
		templateUrl: 'seleccion-de-productos.html'
	}).when('/campos/default/lotes/:lote/aplicaciones/nueva/mezcla', {
		templateUrl: 'orden-de-mezcla.html'
	}).when('/campos/nuevo', {
		templateUrl: 'crear-nuevo-campo.html'
	}).when('/detalles-aplicacion', {
		templateUrl: 'detalles-aplicacion.html'
	}).when('/17', {
		templateUrl: 'detalles-aplicacion.html'
	}).when('/campos/default/lotes/:lote/aplicaciones/pendientes', {
		templateUrl: 'aplicaciones-pendientes-para-lote-especifico.html'
	}).when('/tablero', {
		templateUrl: 'tablero-de-control.html'
	}).when('/26', {
		templateUrl: 'listado-de-aplicaciones.html'
	}).when('/listado-de-aplicaciones', {
		templateUrl: 'listado-de-aplicaciones.html'
	})
})

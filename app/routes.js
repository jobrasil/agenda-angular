(function () {
	'use strict';

	angular.module('appAgenda').config(function ($routeProvider, $locationProvider) {
   		$locationProvider.html5Mode(true);
		
		   $routeProvider
			.when('/', {
				templateUrl: 'app/views/lista.html',
				controller: 'ListaController',
				controllerAs: 'ca'
			})

			.when('/adicionar', {
				templateUrl: 'app/views/adicionar.html',
				controller: 'AdicionarController',
				controllerAs: 'ca'
			})

			.when('/documentacao', {
				templateUrl: 'app/views/documentacao.html',
				controller: 'DocumentacaoController',
				controllerAs: 'doc'
			})

			.otherwise({ redirectTo: '/' });

	})
})();
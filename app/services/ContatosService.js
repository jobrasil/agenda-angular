angular.module('appAgenda')
	.service('ContatosService', function ($http) {
		return {
			listaContatos: function (sucessCallback, errorCallback) {
				$http({
					method: 'GET',
					url: 'https://demo3850308.mockable.io/'
				})
					.then(function (response) {
						listAll = response.data;
						sucessCallback(response);
					}, function (response) {
						errorCallback(response);
						console.log('Error');
					});
			}
		};
	}
);

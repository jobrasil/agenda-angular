(function () {
    'use strict';
    angular.module('appAgenda').controller('AdicionarController', AdicionarController);

    function AdicionarController($rootScope, $scope, $location, SETTINGS) {

        $rootScope.activetab = $location.path();
        
        $rootScope.mensagem = "";

        $rootScope.salvar = function () {

            if (!$rootScope.contatos) {
                var contatos = localStorage.getItem(SETTINGS.CONTATOS);
                if (contatos) {
                    var items = angular.fromJson(contatos);
                    angular.forEach(items, function (value) {
                        $rootScope.contatos.push(value);
                    });
                }
            }

            if ($scope.formContato) {
                var newContato = angular.copy($scope.formContato);
                var datacad = new Date().toJSON().slice(0, 10);
                var ano = datacad.slice(0, 4);
                var mes = datacad.slice(6, 7);
                var data = datacad.slice(9, 10);
                newContato.datacadastro = data + '/' + mes + '/' + ano;
                $rootScope.contatos.push(newContato);

                localStorage.removeItem(SETTINGS.CONTATOS);
                localStorage.setItem(SETTINGS.CONTATOS, angular.toJson($rootScope.contatos));

                $rootScope.message = "registro criado com sucesso";
                $location.path('/home');
            } else {
                $rootScope.mensagem = "Preencha pelo menos um campo";
            }
        }
    }


})();
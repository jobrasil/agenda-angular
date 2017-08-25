(function () {
    'use strict';
    angular.module('appAgenda').controller('ListaController', ListaController);

    var $i = 0;
    
    function ListaController($rootScope, $location, $scope, ContatosService, SETTINGS) {
        $rootScope.activetab = $location.path();

        $scope.formContato = {};
        $scope.message = "";

        $scope.newContato = function () {
            $scope.formContato = {}
            $i = 0;
        }

        $scope.saveContato = function () {
            if ($i == 0) { 
                var newContato = angular.copy($scope.formContato);
                var datacadastro = new Date().toJSON().slice(0,10);                
                var ano = datacadastro.slice(0,4);
                var mes = datacadastro.slice(6,7);
                var data = datacadastro.slice(9,10);
                newContato.datacadastro = data+'/'+mes+'/'+ano;
                $scope.contatos.push(newContato);
                $scope.message = "Registro criado com sucesso";
            } else {
                $scope.message = "alterado com sucesso";
            }
            $scope.formContato = {}
        }

        $scope.openContato = function (formContato) {
            $i++;
            $scope.formContato = formContato;
        }

        $scope.deleteContato = function () {
            $scope.contatos.splice($scope.contatos.indexOf($scope.formContato), 1);
            $scope.message = "Registro deletado com sucesso";
        }

        $scope.clearMessage = function () {
            $scope.message = "";
        }
    };

})();
(function () {
    'use strict';

     angular.module('appAgenda').constant('SETTINGS', {
        "CONTATOS": "contatos"
    });

    angular.module('appAgenda').run(function ($rootScope, ContatosService, SETTINGS) {

        var contatos = localStorage.getItem(SETTINGS.CONTATOS);

        $rootScope.contatos = [];

        if (contatos) {
            var items = angular.fromJson(contatos);
            angular.forEach(items, function (value) {
                $rootScope.contatos.push(value);
            });
        } else {
            ContatosService.listaContatos(function (response) {
                $rootScope.contatos = response.data;
                localStorage.setItem(SETTINGS.CONTATOS, angular.toJson(response.data));
            });
        }

    });

})();
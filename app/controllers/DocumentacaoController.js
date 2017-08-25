(function () {
    'use strict';
    angular.module('appAgenda')
        .controller('DocumentacaoController', function ($rootScope, $location) {
            $rootScope.activetab = $location.path();
        });
})();
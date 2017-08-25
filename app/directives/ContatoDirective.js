(function () {
    'use strict';
    angular.module('appAgenda')
    .directive("detalhesContato", function(){
        return {
            templateUrl: "app/views/templates/detalhesContato.html"
        };
    });
})();
'use strict';
var app = angular.module('toDoModule');

app.directive('tdElementPreview', function(){
    return {
        restirict: 'E',
        templateUrl:'scripts/directives/element-directive.html'
    };
});
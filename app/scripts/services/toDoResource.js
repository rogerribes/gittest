'use strict';

var app = angular.module('toDoModule');

app.factory('toDoResource',['$resource','Backand', function($resource, Backand){
   
   
    return $resource(Backand.getApiUrl() + '/1/objects/toDoList/:id',{ id: '@id'},{
        update:{
            method: 'PUT'
        }
    });
}]);
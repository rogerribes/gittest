'use strict';
var app = angular.module('toDoModule');
app.controller('toDoListController', ['$location', 'tdlist',
    function($location, tdlist) {

        // Fetching All elements from API Rest
        console.log("HI");




        var vm = this;
        tdlist.$promise.then(function(data) {
            vm.list = data.data;
            console.log("resolving promise:", vm.list);
        });



       


        console.log("Controller with value: ", vm.list);

    }
]);
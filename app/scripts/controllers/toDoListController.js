'use strict';
var app = angular.module('toDoModule');
app.controller('toDoListController', ['$location', 'tdlist','toDoResource',
    function($location, tdlist,toDoResource) {
        
        // Creating Personalized Scope
        var vm = this;
       vm.orderBy = "urgency";
       vm.showCompleted = false;
       
        // Fetching All elements from API Rest
        tdlist.$promise.then(function(data) {
            vm.list = data.data;
            console.log("resolving promise:", vm.list);
        });

        // Mark Elements Completed
        vm.setCompleted = function(todo){
            todo.completed = true;
            console.log(todo);
            vm.updateTodo = new toDoResource(todo);
            vm.updateTodo.$update();
        };


        // Delete Completeds


        



       


        console.log("Controller with value: ", vm.list);

    }
]);
'use strict';
var app = angular.module('toDoModule');
app.controller('toDoListController', ['toDoService','$location','tdlist',
        function(toDoService, $location, tdlist){
    
    // Fetching All elements from API Rest
   console.log("HI");
   
   
    
    
    var vm = this;
   tdlist.$promise.then(function(data){
         vm.list = data.data;
         console.log("resolving promise:", vm.list);
    });
  
    
    
    vm.selectToDo = function(todo){
        toDoService.todo = todo;
         $location.path('/toDoDetail');
    }
    
    // Fetching TodoList Items
    /** 
    toDoService.get().then( function (data) {
        
        vm.list = data.data;
    });
        */
        console.log("Controller with value: ", vm.list);
    
}]);
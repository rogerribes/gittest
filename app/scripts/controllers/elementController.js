'use strict';
var app = angular.module('toDoModule');
app.controller('elementController', ['toDoResource', '$routeParams', '$location',
    function(toDoResource, $routeParams,$location) {

    var vm = this;

    vm.todo = {};
    console.log("todoElement: ", vm.todo);
    vm.isNew = false;
    vm.disabled = true;
    vm.btnEdit = "Edit";
    vm.btnCancel = "Back";
   

    // SAVE New ToDo Element
    vm.saveNew = function() {
        // Create Date Elements Correctly
        
        vm.todo.addedOn = new Date();
        vm.todo.completed = false;
        vm.todo.dueDate = new Date(vm.todo.dueDate);
        vm.newTodo = new toDoResource(vm.todo);
        vm.newTodo.$save();
    };

    //UPDATE ToDo Element
    vm.updateToDo = function(todo) {
        todo.$update();
    };

    //Check if is Save or Update
    vm.saveOrUpdate = function() {

        if (vm.isNew) {
            vm.saveNew();
        } else {
            vm.updateToDo(vm.todo);
        }
        $location.path('/toDoList');
    };
    

    // Functions to Control Buttons
    vm.isEditable = function() {
         if (!vm.disabled){vm.saveOrUpdate();};
        console.log("todo post form", vm.todo);
        vm.disabled = !vm.disabled;
        
        if (!vm.disabled) {
            vm.btnEdit = "Save";
            vm.btnCancel = "Cancel";
        } else {
            vm.btnEdit = "Edit";
            vm.btnCancel = "Back";
        }
    };
    // Controls if is New Element or Edit
    if (!$routeParams.id) {
        vm.isNew = true;
        vm.disabled = false;
        vm.btnEdit = "Save";
        vm.btnCancel = "Cancel";
    } else { 
        vm.todo = toDoResource.get({
            id: $routeParams.id
        });
        
    }

}]);
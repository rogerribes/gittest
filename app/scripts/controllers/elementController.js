'use strict';
var app = angular.module('toDoModule');
app.controller('elementController', ['toDoResource', '$routeParams', function(toDoResource, $routeParams) {

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
        vm.newTodo = new toDoResource(vm.todo);
        vm.newTodo.addedOn = new Date();
        //vm.newTodo.dueDate = new Date(vm.newTodo.dueDate);
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
        };
    };
    

    // Functions to Control Buttons
    vm.isEditable = function() {
        console.log("todo post form", vm.todo);
        vm.disabled = !vm.disabled;
        vm.saveOrUpdate();
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
        vm.todo = {
            "title": "New Todo Element"
        };
        vm.disabled = false;
        vm.btnEdit = "Save";
        vm.btnCancel = "Cancel";
    } else {
        
        vm.todo = toDoResource.get({
            id: $routeParams.id
        });
        vm.todo.dueDate = new Date(vm.todo.dueDate);
        vm.todo.addedOn = new Date(vm.todo.addedOn);
    }

}]);
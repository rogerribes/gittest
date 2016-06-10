'use strict';
var app = angular.module('toDoModule');
app.controller('elementController', ['toDoResource','$routeParams',function(toDoResource, $routeParams){
    
    var vm = this;
    
    vm.todo = {};
    console.log("todoElement: ", vm.todo);
    vm.disabled = true;
    vm.btnEdit = "Edit";
    
    // Controls if is New Element or Edit
    
    
    
    
    // Functions to Control Buttons
    vm.btnEdit = "Edit";
    vm.btnCancel = "Back";
    vm.isEditable = function(){
        vm.disabled = !vm.disabled;
        if(!vm.disabled){
            vm.btnEdit = "Save";
            vm.btnCancel = "Cancel";
        }else{
            vm.btnEdit = "Edit";
            vm.btnCancel = "Back";
        }
    };
    
    if(!$routeParams.id){
        vm.todo = {
            "title": "New Todo Element"
        };
        vm.disabled = false; 
        vm.btnEdit = "Save";
            vm.btnCancel = "Cancel";
    }else{
        vm.todo = toDoResource.get({id:$routeParams.id});
    }
    
}]);
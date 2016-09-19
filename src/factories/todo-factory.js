import _ from 'lodash';
import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', [])

//front-end todo factory, features resful API calls
//  to modify the database

.factory('todoFactory', ($http) => {

  function getTasks($scope) {
    $http.get('/todos').success(response => {
      $scope.todos = response.todos;
    });
  }

  function createTask($scope, params) {
    //if taskInput is empty dont update
    if (!$scope.createTaskInput) {
      return;
    }
    console.log($scope.createTaskDate)

    $http.post('/todos', {
      task: $scope.createTaskInput,
      isCompleted: false,
      isEditing: false
    }).success(response => {
      getTasks($scope);
      $scope.createTaskInput = '';
      //console.log(response);
    });

    //params.createHasInput = false;
    //$scope.createTaskInput = '';
  }

  function updateTask($scope, todo) {
    $http.put('/todos/' + todo._id, {
      task: todo.updatedTask
    }).success(response => {
      getTasks($scope);
      todo.isEditing = false;
    });
    // todo.task = todo.updatedTask;
    // todo.isEditing = false;
  }

  function deleteTask($scope, todoToDelete) {
      //_.remove($scope.todos, todo => todo.task === todoToDelete.task)
      $http.delete('/todos/' + todoToDelete._id )
           .success(res => {
              getTasks($scope);
           });
  }

  function watchCreateTaskInput($scope, params, val) {
    //const createHasInput = params.createHasInput;

    if(!val && params.createHasInput) {
      $scope.todos.pop();
      params.createHasInput = false;
    } else if(val && !params.createHasInput) {
      $scope.todos.push({ task: val, isCompleted: false});
      params.createHasInput = true;
    } else if (val && params.createHasInput) {
      $scope.todos[$scope.todos.length - 1].task = val;

    }
  }

  function onEditClick(todo) {
    todo.updatedTask = todo.task;
    todo.isEditing = true;
  }

  function onCancelClick(todo) {
    todo.isEditing = false;
  }

  function onCompletedClick(todo) {
      todo.isCompleted = !todo.isCompleted;
      $http.put('/todos/' + todo._id, {
        task: todo.task,
        isCompleted: todo.isCompleted
      }).success(response => {
      });

  }

  return {
    createTask,
    updateTask,
    deleteTask,
    watchCreateTaskInput,
    onEditClick,
    onCancelClick,
    onCompletedClick,
    getTasks
  };
});

export default todoFactory;

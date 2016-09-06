import _ from 'lodash';
import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', () => {
  function createTask($scope, params) {
    params.createHasInput = false;
    $scope.createTaskInput = '';
  }

  function updateTask(todo) {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  }

  function deleteTask($scope, todoToDelete) {
      _.remove($scope.todos, todo => todo.task === todoToDelete.task)
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
  }

  return {
    createTask,
    updateTask,
    deleteTask,
    watchCreateTaskInput,
    onEditClick,
    onCancelClick,
    onCompletedClick
  };
});

export default todoFactory;

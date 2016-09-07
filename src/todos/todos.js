import _ from 'lodash';

//todos controller

export default function($scope, todoFactory) {
  let params = {
    createHasInput: false
  };

// console.log(todoFactory.createTask);

  // $scope.todos = [
  //   {
  //     task: 'do dishes',
  //     isCompleted: false,
  //     isEditing: false
  //   },
  //   {
  //     task: 'walk the dog',
  //     isCompleted: true,
  //     isEditing:false
  //   }
  // ];

  todoFactory.getTasks($scope);

//destructuring (feature of es6)
const { createTask, updateTask, deleteTask,
  watchCreateTaskInput, onEditClick, onCancelClick, onCompletedClick } = todoFactory;

  //todo is automatically passed into updateTask
  //factory function by use of partial...
  $scope.updateTask = _.partial(updateTask, $scope);
  $scope.deleteTask = _.partial(deleteTask, $scope);
  //using lodash method partial, but could also use
  // .bind for the same functionality
  $scope.createTask = _.partial(createTask, $scope, params);
  $scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, $scope, params));
  $scope.onEditClick = _.partial(onEditClick);
  $scope.onCancelClick = _.partial(onCancelClick);
  $scope.onCompletedClick = _.partial(onCompletedClick);
}

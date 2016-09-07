var mongoose = require('mongoose');

//mongoose will automatically create a todos db;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todos');

//define schema
var Todo = mongoose.model('Todo', {
  task: String,
  isCompleted: Boolean,
  isEditing: Boolean
});

module.exports.Todo = Todo;

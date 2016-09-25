var mongoose = require('mongoose');
var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

//all routes here begin with /todos

router.get('/', (req, res) => {
  //res.send('HELLO FROM /TODOS');
  Todo.find((err, results) => {
    if (err) { console.log(err); }

    res.send({ todos: results });
  });
});


router.post('/', (req, res) => {
  var todo = new Todo(req.body);
  //console.log(todo)
  todo.save((err) => {
    if (err) { console.log(err); }
    res.send('Successfully added new todo');
  });
});

//update existing item in the db
router.put('/:id', (req, res) => {
  var id = req.params.id;
  Todo.update(
        { _id: id },
        { $set: {task: req.body.task,
                 isCompleted: req.body.isCompleted} },
        (err) => {
          if (err) { console.log(err); }
          res.send('Todo updated');
        });
});

//delete item from db with id == _id
router.delete('/:id', (req, res) => {
  var id = req.params.id;
  Todo.remove({_id: id}, (err) => {
    if (err) console.log(err);
    res.send('Todo deleted');
  });
});

module.exports = router;

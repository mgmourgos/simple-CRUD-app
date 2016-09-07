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
        { $set: {task: req.body.task} },
        (err) => {
          if (err) { console.log(err); }
          res.send('Todo updated');
        });
});

router.delete('/:id', (req, res) => {
  var id = req.params.id;
  Todo.remove({_id: id}, (err) => {
    if (err) console.log(err);
    res.send('Todo deleted');
  });
});

module.exports = router;

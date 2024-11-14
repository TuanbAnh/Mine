const db = require("../config/database");

exports.getAllTodos = function (callback) {
  db.query("SELECT * FROM start", callback);
};

exports.getTodoById = function (id, callback) {
  db.query("SELECT * FROM start WHERE id = ?", [id], callback);
};

exports.createTodo = function (newTodo, callback) {
  db.query("INSERT INTO start SET ?", newTodo, callback);
};

exports.updateTodo = function (id, updatedTodo, callback) {
  db.query("UPDATE start SET ? WHERE id = ?", [updatedTodo, id], callback);
};

exports.deleteTodo = function (id, callback) {
  db.query("DELETE FROM start WHERE id = ?", [id], callback);
};



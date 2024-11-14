const Todo = require("../models/todo");
const XLSX = require("xlsx");

exports.getEcxel = function (req, res) {
  Todo.getAllTodos((err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    // Kiểm tra dữ liệu trả về có phải là mảng không
    if (!Array.isArray(data)) {
      return res.status(400).send("Data is not an array");
    }

    // Tạo tiêu đề cho các cột
    const heading = [
      ["name", "position", "salary", "hire_date", "date", "address"],
    ];

    // Tạo workbook và worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Thêm header vào worksheet
    XLSX.utils.sheet_add_aoa(worksheet, heading);

    // Thêm worksheet vào workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Todos");

    // Ghi dữ liệu ra file Excel dưới dạng buffer
    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

    // Gửi file Excel về phía client để tải xuống
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=sample_data.xlsx"
    );
    res.status(200).send(buffer);
  });
};

exports.getAllTodos = function (req, res) {
  Todo.getAllTodos((err, todos) => {
    if (err) throw err;
    res.json(todos);
  });
};

exports.getTodoById = function (req, res) {
  Todo.getTodoById(req.params.id, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};

/// tường
exports.getTodoByType = function (req, res) {
  Todo.getTodoByType(req.params.id, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};
exports.getSearch = function (req, res) {
  Todo.getSearch(req.params.id, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};

exports.createTodo = function (req, res) {
  const newTodo = {
    name: req.body.name,
    position: req.body.position,
    salary: req.body.salary,
    hire_date: req.body.hire_date,
    date: req.body.date,
    address: req.body.address,
  };

  Todo.createTodo(newTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: "Todo created successfully" });
  });
};

exports.updateTodo = function (req, res) {
  const updatedTodo = {
    name: req.body.name,
    position: req.body.position,
    salary: req.body.salary,
    hire_date: req.body.hire_date,
    date: req.body.date,
    address: req.body.address,
  };

  Todo.updateTodo(req.params.id, updatedTodo, (err, _result) => {
    if (err) throw err;
    res.json({ message: "Todo updated successfully" });
  });
};

exports.deleteTodo = function (req, res) {
  Todo.deleteTodo(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: "Todo deleted successfully" });
  });
};

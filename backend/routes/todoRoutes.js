const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController"); // Đảm bảo đường dẫn đúng

// Routes
router.get("/excel", todoController.getEcxel);
router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodoById); // Sử dụng đúng controller
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;

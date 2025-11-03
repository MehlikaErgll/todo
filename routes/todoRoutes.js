//Bu dosya, /api/todos adresini yönetecek:
// 1. Express Router’ı çağır
// 2. / isteğine bir controller bağla
// 3. Router’ı dışa aktar

const express = require("express");

const router = express.Router();


const {getTodos, createTodo, deleteTodo, updateTodo} = require("../controllers/todoController");
router.get("/", getTodos); 
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

//başka bir dosyaya kullanılması için:
module.exports = router;




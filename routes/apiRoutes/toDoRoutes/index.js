const router = require("express").Router();
const toDosController = require("../../../controllers/toDosController");

router.route("/")
  .get(toDosController.getAllTodos)
  .post(toDosController.addToDo);

router.route('/:id')
  .get(toDosController.getToDoById)
  .delete(toDosController.deleteToDoById);

module.exports = router;

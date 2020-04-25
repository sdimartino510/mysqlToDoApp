const router = require("express").Router();
const toDosController = require("../../../controllers/toDosController");

router.route("/")
  .get(toDosController.findAllToDos)
  .post(toDosController.addToDo);

router.route('/:id')
  .get(toDosController.findToDoById)
  .delete(toDosController.deleteToDoById)
  .patch(toDosController.updateToDoTextById);

module.exports = router;

const router = require("express").Router();
const toDosController = require("../../../controllers/toDosController");

router.route("/")
  .get(toDosController.findAllToDos)
  .post(toDosController.addToDo);

router.route('/completed')
  .get(toDosController.findAllCompleted);

router.route('/incomplete')
  .get(toDosController.findAllIncomplete)

router.route('/:id/updatetext')
  .patch(toDosController.updateToDoTextById);

router.route('/:id')
  .get(toDosController.findToDoById)
  .delete(toDosController.deleteToDoById)
  .patch(toDosController.updateToDoTextById);

router.route('/:id/:completed')
  .patch(toDosController.updateToDoCompleteById);


module.exports = router;

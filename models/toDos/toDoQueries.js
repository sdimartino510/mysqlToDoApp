const findAllToDos = 'SELECT * FROM todos;';
const findAllCompleted = 'SELECT * FROM todos WHERE completed = true;';
const findAllIncomplete = 'SELECT * FROM todos WHERE completed = false;';
const findToDoById = 'SELECT * FROM todos WHERE id = ?;';

const addToDo = 'INSERT INTO todos SET ?;';

const deleteToDoById = 'DELETE FROM todos WHERE id = ?;';

const updateToDoTextById = 'UPDATE todos SET text = ? WHERE id = ?;';
const updateToDoCompleteById = 'UPDATE todos SET completed = ? WHERE id = ?;';

module.exports = {
  findAllToDos,
  findAllCompleted,
  findAllIncomplete,
  findToDoById,
  addToDo,
  deleteToDoById,
  updateToDoTextById,
  updateToDoCompleteById,
}
const connection = require("../config/connection");
const toDoQueries = require("../models/toDos/toDoQueries");

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const [todos] = await connection.query(toDoQueries.findAllToDos);
      res.status(200).json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  addToDo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.json({ error: "You must provide text for todos " });
    }
    try {
      const [response] = await connection.query(toDoQueries.addToDo, { text });
      const [todos] = await connection.query(
        toDoQueries.findToDoById,
        response.insertId
      );
      res.json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  getToDoById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(toDoQueries.findToDoById, id);
      res.status(200).json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  deleteToDoById: async (req, res) => {
    const { id } = req.params;
    try {
      await connection.query(toDoQueries.deleteToDoById, id);
      const [todos] = await connection.query(toDoQueries.findAllToDos);
      res.json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
};

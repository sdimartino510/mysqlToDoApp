const express = require("express");
const routes = require('./routes');

const PORT = 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.post("/api/todos", async (req, res) => {
  
// });

// // Patch is for updating 1 piece of some data
// app.patch("/api/todos/:id", async (req, res) => {
//   //  You will pull out the id from req.params
//   const { id } = req.params;
//   const { text } = req.body;
//   const query = "UPDATE todos SET ? WHERE ?;";
//   try {
//     await connection.query(query, [{ text }, { id }]);
//     const getTodo = "SELECT * FROM todos WHERE ?;";
//     const [todos] = await connection.query(getTodo, { id });
//     res.json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });
// PUT is for  updating multiple properties of some data
app.listen(PORT);

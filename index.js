const express = require("express");
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.post("/api/todos", async (req, res) => {
  
// });

// // Patch is for updating 1 piece of some data
// app.patch("/api/todos/:id", async (req, res) => {
//   //  You will pull out the id from req.params
  
// });
// PUT is for  updating multiple properties of some data
app.listen(PORT);

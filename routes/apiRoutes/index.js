const router = require('express').Router();
const toDoRoutes = require('./toDoRoutes');

router.use('/todos', toDoRoutes);

module.exports = router;
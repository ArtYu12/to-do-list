const TablesController = require('./TablesController')

const routerTables = require('express').Router();

routerTables.get('/tables',TablesController.getTables);
routerTables.get('/tables/:id',TablesController.getTable);
routerTables.post('/tables',TablesController.createTable);
routerTables.delete('/tables',TablesController.deleteTables);
routerTables.put('/tables/:id',TablesController.updateTable);
routerTables.delete('/tables/:id',TablesController.deleteTable);


module.exports = routerTables
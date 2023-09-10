const TextController = require('./TextController');


const routerText = require('express').Router(); 

routerText.get('/text', TextController.getText);
routerText.post('/text', TextController.addText);

module.exports = routerText


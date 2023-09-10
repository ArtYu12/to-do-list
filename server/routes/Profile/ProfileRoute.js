const ProfileController = require("./ProfileController");

const routerProfile = require('express').Router();

routerProfile.get('/profile/', ProfileController.getAll)
routerProfile.get('/profile/:id', ProfileController.getProfile)
routerProfile.post('/profile', ProfileController.createProfile)
routerProfile.put('/profile/:id', ProfileController.updateProfile)
routerProfile.delete('/profile/:id', ProfileController.deleteProfile)
routerProfile.delete('/profile/', ProfileController.deleteAll)

module.exports = routerProfile
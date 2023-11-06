const express = require('express');
const route = express.Router();

const roomsController = require('../controllers/controller')


route.get('/rooms',roomsController.getAllrooms);
route.post('/rooms',roomsController.createRoom);
route.put('/rooms/:room_id',roomsController.UpdateRoom);
route.get('/rooms/:room_id',roomsController.getRoomById);
route.delete('/rooms/:room_id',roomsController.deleteRoom);

module.exports = route;
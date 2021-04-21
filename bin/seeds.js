// Iteration #1
const mongoose= require('mongoose');
const Drone = require('../models/Drone.model');
require('../configs/db.config');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];
async function createDrones(){
    await Drone.create(drones);
}
 
createDrones();
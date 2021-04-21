const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', async (req, res, next) => {
 let drones= await Drone.find();
 res.render('drones/list', {drones:await Drone.find()})
});

router.get('/drones/create', async (req, res, next) => {
  res.render('drones/create-form');

});

router.post('/drones/create', async (req, res, next) => {
    
    const {name, propellers, maxSpeed}= req.body;
    await Drone.create({name, propellers, maxSpeed});
    res.redirect('/drones')
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
const drone= await Drone.findById(req.params.droneId);
  res.render('drones/update-form', {drone} );
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  const {name, propellers, maxSpeed}= req.body;
  const drone= await Drone.findByIdAndUpdate(req.params.droneId, {
    name, propellers, maxSpeed })
    res.redirect('/drones');
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  await Drone.findByIdAndRemove(req.params.droneId);
  res.redirect('/drones');

});

module.exports = router;

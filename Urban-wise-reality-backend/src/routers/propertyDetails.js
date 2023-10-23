const express = require('express');
const router = new express.Router();
const propertyData = require('../models/propertyDetails');

router.post('/addproperty', (req, res) => {
  const property = new propertyData(req.body);
  property.save().then((property) => {
      res.status(201).send(property);
  }).catch((error) => {
      res.status(400).send(error);
      console.log(error); 
  })
})

router.get('/getallproperties', (req, res) => {
  propertyData.find({}).then((property) => {
      res.send(property);
  }).catch((error) => {
      res.status(400).send(error);
  })
})

router.post('/deleteproperty', (req, res) => {
  propertyData.findByIdAndDelete(req.body._id).then((property) => {
      res.send(property);
  }).catch((error) => {
      res.status(400).send(error);
  })
})

module.exports = router;
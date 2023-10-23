const express = require('express');
const router = new express.Router();
const credential = require('../models/userCredentials');

router.post('/signup', (req, res) => {
    const user = new credential(req.body);
    user.save().then((user) => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

router.get('/getallusers', (req, res) => {
    credential.find({}).then((user) => {
        res.send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

router.post('/login', (req, res) => {
    credential.exists({user_name: req.body.user_name, user_password: req.body.user_password}).then((user) => {
        res.send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

router.post('/deleteuser', (req, res) => {
    credential.findByIdAndDelete(req.body._id).then((user) => {
        res.send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

module.exports = router;
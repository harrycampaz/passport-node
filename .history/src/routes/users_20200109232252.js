const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send({message: "Login"})
})

router.get('/register', (req, res) => {
    res.send({message: "register"})
})

module.exports = router;
const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => 
    res.render("login")
)

router.get('/register', (req, res) => 
    res.render("register")
)

router.post('/resgister', (req, res) => {
    console.log(req.body);
    res.send('Hello');
    
})

module.exports = router;
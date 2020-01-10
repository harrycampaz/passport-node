const express = require('express');

const router = express.Router();

const {ensureAuthenticated} =  '../../config/auth';

router.get('/', (req, res) => 
    res.render('welcome')
);

//Dashboard

router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard'), {
    name: req.user.name
});

module.exports = router;
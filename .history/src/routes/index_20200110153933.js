const express = require('express');

const router = express.Router();

import {ensureAuthenticated} from '../../config/auth';

router.get('/', (req, res) => 
    res.render('welcome')
);

//Dashboard

router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard'));

module.exports = router;
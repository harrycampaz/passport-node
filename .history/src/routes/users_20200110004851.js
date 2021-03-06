const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

const User = require('../models/User')

router.get('/login', (req, res) => 
    res.render("login")
)

router.get('/register', (req, res) => 
    res.render("register")
)

router.post('/register', (req, res) => {
    console.log(req.body);

    const { name, email, password, password2 } = req.body;

    let errors = [];

    //Check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill in all fields'});
    }

    //Check password
    if(password !== password2){
        errors.push({msg: 'Passwords do not math'});
    }

    //Check pass length
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    if(errors.length > 0){

        res.render('register', {
            errors,
            name, 
            email, 
            password, 
            password2
        })

    }else {

        // Validations

        User.findOne({email: email}).then(user => {
            if(user){

                // User exist
                errors.push({msg: 'Email is already registered'})
                res.render('register', {
                    errors,
                    name, 
                    email, 
                    password, 
                    password2
                })

            }else {

                const newUser = new User({
                    name, email, password
                });

                console.log(newUser);

                // Hash password

                bcrypt.genSalt(10, (err, salt) => 
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;

                    //Set password to hashed
                    newUser.password = hash;

                    newUser.save().then( user => 
                        res.redirect('/login')
                    ).catch(err => console.log(err));
                    
                }));

                res.send('hello')
                
            }
        });
       
    }

   
    
})

module.exports = router;
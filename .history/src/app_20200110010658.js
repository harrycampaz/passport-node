const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');

const flash = require('connect-flash');

const session = require('express-session');

const app = express();

//EJS

app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser

app.use(express.urlencoded({extended: false}));

// Express Session

app.use(session({
    secret: 'secrect',
    resave: false,
    saveUninitialized: true,
  }));

//Connect Flash

app.use(flash());

//Global

app.use((req, res, next) => {

    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

// Routes

app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

mongoose.Promisem = global.Promise;


mongoose.connect('mongodb://localhost:27017/db_passport', { useNewUrlParser: true }, (err,res) => {
    if(err){
        throw err
    } else {
        console.log("La db esta OK");

        app.listen(PORT, function(){
            console.log("Servidor Api http://localhost:" +PORT+" OK");
        })
    }
});
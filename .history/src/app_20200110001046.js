const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');

const app = express();

//EJS

app.use(expressLayouts);
app.set('view engine', 'ejs');

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

        app.listen(port, function(){
            console.log("Servidor Api http://localhost:" +PORT+" OK");
        })
    }
});
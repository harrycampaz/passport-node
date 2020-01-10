const express = require('express')

const app = express();

// Routes

app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));

const POST = process.env.POST || 5000;

app.listen(POST, console.log('Server started on port ', POST));
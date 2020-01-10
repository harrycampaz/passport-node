const express = require('express')

const app = express();

const POST = process.env.POST || 5000;

app.listen(POST, console.log('Server started on port ', POST));
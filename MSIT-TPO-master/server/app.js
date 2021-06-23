const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(cookieParser());

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT;




app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-All-Headers', '*');
    next();
})


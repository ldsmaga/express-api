require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');
const url = `mongodb+srv://ldzsmaga:${process.env.MONGO_PWD}@cluster-api.lo4s1ga.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url);

mongoose.connection.on('connected', () =>{
    console.log('Application connected to database')
});

mongoose.connection.on('error', err =>{
    console.log('Conection error:', err)
});

mongoose.connection.on('disconnected', () =>{
    console.log('Application disconnected to database')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Application running on port http://localhost:${port}`)
});
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');
const url = 'mongodb+srv://ldzsmaga:Ft0CQL7sfUogQLGG@cluster-api.lo4s1ga.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url);

mongoose.connection.on('error', err =>{
    console.log('Erro na conexão:', err)
});

mongoose.connection.on('disconnected', () =>{
    console.log('Aplicação desconectada do BD')
});

mongoose.connection.on('disconnected', () =>{
    console.log('Aplicação desconectada do BD')
});

mongoose.connection.on('connected', () =>{
    console.log('Aplicação conectada do BD')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Application running on port http://localhost:${port}`)
});
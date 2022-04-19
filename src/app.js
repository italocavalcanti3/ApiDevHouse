/*
const express = require('express');
const routes = require('./routes');
*/

import mongoose from 'mongoose';
import express from 'express';
import routes from './routes';

class App{

    constructor(){
        //this referencia-se à classe
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.6p8dn.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        //Executar quando abrir app
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }


}

//Exportando o server do App
//module.exports = new App().server;
export default new App().server;
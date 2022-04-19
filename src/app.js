/*
const express = require('express');
const routes = require('./routes');
*/

import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes';
import cors from 'cors';

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
        //CORS sempre primeiro
        this.server.use(cors()); //API Pública

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }


}

//Exportando o server do App
//module.exports = new App().server;
export default new App().server;
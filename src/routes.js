// const { Router } = require('express');
import { Router } from 'express';
import HouseController from './controllers/HouseController';
import SessionController from './controllers/SessionController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

//Criando rota POST
routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);

//module.exports = routes;
export default routes;
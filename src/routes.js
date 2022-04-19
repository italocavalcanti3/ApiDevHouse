// const { Router } = require('express');
import { Router } from 'express';
import HouseController from './controllers/HouseController';
import SessionController from './controllers/SessionController';
import DashboardController from './controllers/DashboardController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

//Criando rota POST
routes.post('/sessions', SessionController.store);
routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses', HouseController.destroy);
routes.get('/dashboard', DashboardController.show);

//module.exports = routes;
export default routes;
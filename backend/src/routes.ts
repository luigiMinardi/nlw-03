import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;

// MVC - Model View Controllers
// Model = Representatividade de uma entidade na nossa aplicação, de um dado, de um usuario, um orfanato ou qqr coisa assim.
// View = como as coisas são visualizadas e como ficam disponiveis para o nosso FrontEnd.
// Controllers = onde fica a logica das nossas rotas.
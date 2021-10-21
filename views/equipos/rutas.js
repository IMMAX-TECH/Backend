import Express from 'express';
import {
  queryAllEquipos,
  crearEquipos,
  editarEquipos,
  eliminarEquipos,
  consultarEquipos,
} from '../../controllers/equipos/controller.js';

const rutasEquipos = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error consultando los equipos');
  } else {
    res.json(result);
  }
};

rutasEquipos.route('/equipos').get((req, res) => {
  console.log('alguien hizo get en la ruta /equipos');
  queryAllEquipos(genercCallback(res));
});

rutasEquipos.route('/equipos').post((req, res) => {
  crearEquipos(req.body, genercCallback(res));
});

rutasEquipos.route('/equipos/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /equipos');
  consultarEquipos(req.params.id, genercCallback(res));
});

rutasEquipos.route('/equipos/:id').patch((req, res) => {
  editarEquipos(req.params.id, req.body, genercCallback(res));
});

rutasEquipos.route('/equipos/:id').delete((req, res) => {
  eliminarEquipos(req.params.id, genercCallback(res));
});

export default rutasEquipos;
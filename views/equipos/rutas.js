import Express from 'express';
import {
  queryAllVehicles,
  crearVehiculo,
  editarVehiculo,
  eliminarVehiculo,
  consultarVehiculo,
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
  queryAllVehicles(genercCallback(res));
});

rutasEquipos.route('/equipos').post((req, res) => {
  crearVehiculo(req.body, genercCallback(res));
});

rutasEquipos.route('/equipos/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /equipos');
  consultarVehiculo(req.params.id, genercCallback(res));
});

rutasEquipos.route('/equipos/:id').patch((req, res) => {
  editarVehiculo(req.params.id, req.body, genercCallback(res));
});

rutasEquipos.route('/equipos/:id').delete((req, res) => {
  eliminarVehiculo(req.params.id, genercCallback(res));
});

export default rutasEquipos;
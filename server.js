import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import rutasEquipos from './views/equipos/rutas.js';
import rutasUsuario from './views/usuarios/rutas.js';
import rutasVenta from './views/ventas/rutas.js';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';


dotenv.config({ path: './.env' });

const port = process.env.PORT || 3000;

const app = Express();

app.use(Express.json());
app.use(Cors());

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://immax-tech.us.auth0.com/.well-known/jwks.json'
}),
audience: 'api-autenticacion-immax-tech-proyecto',
issuer: 'https://immax-tech.us.auth0.com/',
algorithms: ['RS256']
});

//app.use(jwtCheck);

app.use(rutasEquipos);
app.use(rutasUsuario);
app.use(rutasVenta);

const main = () => {
  return app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
  });
};

conectarBD(main);
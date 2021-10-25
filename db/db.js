import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';



dotenv.config({ path: './.env' });

const stringConexion = 'mongodb+srv://Dairon:3213328420Aa@proyectoimmax.z4zji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(stringConexion, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let baseDeDatos;

const conectarBD = (callback) => {
  client.connect((err, db) => {
    if (err) {
      console.error('Error conectando a la base de datos');
      return 'error';
    }
    baseDeDatos = db.db('concesionario');
    console.log('baseDeDatos exitosa');
    return callback();
  });
};

const getDB = () => {
  return baseDeDatos;
};

export { conectarBD, getDB };
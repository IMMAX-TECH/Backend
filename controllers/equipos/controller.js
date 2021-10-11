import { ObjectId } from 'mongodb';
import { getDB } from '../../db/db.js';

const queryAllVehicles = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('vehiculo').find({}).limit(50).toArray(callback);
};

const crearVehiculo = async (datosVehiculo, callback) => {
  if (
    Object.keys(datosVehiculo).includes('name') &&
    Object.keys(datosVehiculo).includes('brand') &&
    Object.keys(datosVehiculo).includes('model')
  ) {
    const baseDeDatos = getDB();
    // implementar código para crear vehículo en la BD
    await baseDeDatos.collection('vehiculo').insertOne(datosVehiculo, callback);
  } else {
    return 'error';
  }
};

const consultarVehiculo = async (id, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('vehiculo').findOne({ _id: new ObjectId(id) }, callback);
};

const editarVehiculo = async (id, edicion, callback) => {
  const filtroVehiculo = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('vehiculo')
    .findOneAndUpdate(filtroVehiculo, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarVehiculo = async (id, callback) => {
  const filtroVehiculo = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('vehiculo').deleteOne(filtroVehiculo, callback);
};

export { queryAllVehicles, crearVehiculo, consultarVehiculo, editarVehiculo, eliminarVehiculo };import { ObjectId } from 'mongodb';
import { getDB } from '../../db/db.js';

const queryAllUsers = async (callback) => {
  const baseDeDatos = getDB();
  console.log('query');
  await baseDeDatos.collection('usuario').find({}).limit(50).toArray(callback);
};

const crearUsuario = async (datosUsuario, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuario').insertOne(datosUsuario, callback);
};

const consultarUsuario = async (id, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuario').findOne({ _id: new ObjectId(id) }, callback);
};

const editarUsuario = async (id, edicion, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('usuario')
    .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarUsuario = async (id, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuario').deleteOne(filtroUsuario, callback);
};

export { queryAllUsers, crearUsuario, consultarUsuario, editarUsuario, eliminarUsuario };
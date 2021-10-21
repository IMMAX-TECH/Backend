import ObjectId  from 'mongodb';
import { getDB } from '../../db/db.js';

const queryAllEquipos = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('Equipos').find({}).limit(50).toArray(callback);
};

const crearEquipos = async (datosEquipos, callback) => {
  if (
    Object.keys(datosEquipos).includes('referencia') &&
    Object.keys(datosEquipos).includes('nombre') &&
    Object.keys(datosEquipos).includes('marca') &&
    Object.keys(datosEquipos).includes('modelo')
    
  ) {
    const baseDeDatos = getDB();
    // implementar código para crear vehículo en la BD
    await baseDeDatos.collection('Equipos').insertOne(datosEquipos, callback);
  } else {
    return 'error';
  }
};

const consultarEquipos = async (id, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('Equipos').findOne({ _id: new ObjectId(id) }, callback);
};

const editarEquipos = async (id, edicion, callback) => {
  const filtroEquipos = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('Equipos')
    .findOneAndUpdate(filtroEquipos, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarEquipos = async (id, callback) => {
  const filtroEquipos = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('Equipos').deleteOne(filtroEquipos, callback);
};

export { queryAllEquipos, crearEquipos, consultarEquipos, editarEquipos, eliminarEquipos }; 

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
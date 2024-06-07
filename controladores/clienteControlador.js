const {promiseQuery} = require('../db');

const select_all_usuarios = async (req, res) => {
    try {
      const query = "SELECT * FROM `usuarios`"
  
      const usuarios =  await promiseQuery(query)
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const select_id = async (req, res) => {
    try {
      const { id } = req.params
  
      const query = "SELECT * FROM `usuarios` WHERE id  ?"
  
      const usuarios=  await promiseQuery(query, [id])
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const insert_usuarios = async (req, res) => {
    try {
      const { nombre, apellido, edad } = req.body
  
      const query = "INSERT INTO usuarios (nombre, apellido, edad) VALUES (?, ?,?);"
  
      const usuarios=  await promiseQuery(query, [nombre, apellido, edad])
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const update_usuarios = async (req, res) => {
    try {
      const { id } = req.params
      const { nombre, precio, stock } = req.body
  
      const query = "UPDATE `usuarios` SET nombre = ?, apellido = ?, edad = ? WHERE id  ?"
  
      const usuarios=  await promiseQuery(query, [nombre, precio, stock, id])
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const delete_usuarios = async (req, res) => {
    try {
      const { id } = req.params
  
      const query = "DELETE FROM `usuarios` WHERE id  ?"
  
      const usuarios=  await promiseQuery(query, [id])
      res.json(usuarios)
  } catch (err) {
    throw err
  }
};

module.exports = {
    select_all_usuarios,
    select_id,
    insert_usuarios,
    update_usuarios,
    delete_usuarios
}
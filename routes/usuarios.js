const express = require('express');
const router = express.Router();
const promiseQuery = require('../db')

const {select_all_usuarios, select_id, insert_usuarios, update_usuarios, delete_usuarios} = require("../controladores/clienteControlador");

router.get('/', select_all_usuarios);
router.get('/:id', select_id);
router.post('/', insert_usuarios);
router.put('/:id', update_usuarios);
router.delete('/:id', delete_usuarios); 

module.exports = router;
import {Router} from 'express'
const router= Router();
// const Joi = require('@hapi/joi');
// import {authJwt, verifySignup} from '../middlewares'

import * as detallesPartidasController from '../controllers/detallePartida.controller'
//Al tener la raiz ya con la ruta solo manejo la raiz
//Petición Get que obtiene todos los usuarios
router.get('/', /*authJwt.verifyToken,*/ detallesPartidasController.getDetallesPartidas)
//Petición POST que crea un usuario
router.post('/',detallesPartidasController.createDetallePartida)
//Petición GET para obtener usuario por id
router.get('/:id',detallesPartidasController.getDetallePartidaById)
//Petición PUT para modificar un usuario por id 
router.put('/:id',detallesPartidasController.updateDetallePartidaById)
//Petición Delete para borrar un usuario por id
router.delete('/:id',detallesPartidasController.deleteDetallePartidaById)

//Petición get para el error 404
router.get('*',(req,res)=>{
    res
    .status(404)
    .send(`<h1>No existe la pagina :c</h1>`);
})

module.exports = router;

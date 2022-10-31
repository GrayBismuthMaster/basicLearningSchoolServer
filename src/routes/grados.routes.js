import {Router} from 'express'
const router= Router();
const Joi = require('@hapi/joi');
import {authJwt, verifySignup} from '../middlewares'

import * as gradosController from '../controllers/grados.controller'
//Al tener la raiz ya con la ruta solo manejo la raiz
//Petición Get que obtiene todos los usuarios
router.get('/', /*authJwt.verifyToken,*/ gradosController.getGrados)
//Petición POST que crea un usuario
router.post('/',/*authJwt.verifyToken*,/ /*authJwt.isAdmin , verifySignup.checkRolesExisted,*/ /*verifySignup.checkDuplicateUsernameOrEmail,*/ gradosController.createGrado)
//Petición GET para obtener usuario por id
router.get('/:id',gradosController.getGradoById)
//Petición PUT para modificar un usuario por id 
router.put('/:id',gradosController.updateGradoById)
//Petición Delete para borrar un usuario por id
router.delete('/:id',gradosController.deleteGradoById)

//Petición get para el error 404
router.get('*',(req,res)=>{
    res
    .status(404)
    .send(`<h1>No existe la pagina :c</h1>`);
})

module.exports = router;

import {Router} from 'express'
const router= Router();
// const Joi = require('@hapi/joi');
// import {authJwt, verifySignup} from '../middlewares'

import * as materiasController from '../controllers/materias.controller'
//Al tener la raiz ya con la ruta solo manejo la raiz
//Petición Get que obtiene todos los usuarios
router.get('/', /*authJwt.verifyToken,*/ materiasController.getMaterias)
//Petición POST que crea un usuario
router.post('/',/*authJwt.verifyToken*,/ /*authJwt.isAdmin , verifySignup.checkRolesExisted,*/ /*verifySignup.checkDuplicateUsernameOrEmail,*/ materiasController.createMateria)
//Petición GET para obtener usuario por id
router.get('/:id',materiasController.getMateriaById)
//Petición PUT para modificar un usuario por id 
router.put('/:id',materiasController.updateMateriaById)
//Petición Delete para borrar un usuario por id
router.delete('/:id',materiasController.deleteMateriaById)

//Petición get para el error 404
router.get('*',(req,res)=>{
    res
    .status(404)
    .send(`<h1>No existe la pagina :c</h1>`);
})

module.exports = router;

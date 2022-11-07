import {Router} from 'express'
const router= Router();
// const Joi = require('@hapi/joi');
// import {authJwt, verifySignup} from '../middlewares'

import * as gradosEstudiantesController from '../controllers/gradoEstudiante.controller'
//Al tener la raiz ya con la ruta solo manejo la raiz
//Petición Get que obtiene todos los usuarios
router.get('/', /*authJwt.verifyToken,*/ gradosEstudiantesController.getGradosEstudiantes)
//Petición POST que crea un usuario
router.post('/',gradosEstudiantesController.createGradoEstudiante)
//Petición GET para obtener usuario por id
router.get('/:id',gradosEstudiantesController.getGradoEstudianteById)
//Petición PUT para modificar un usuario por id 
router.put('/:id',gradosEstudiantesController.updateGradoEstudianteById)
//Petición Delete para borrar un usuario por id
router.delete('/:id',gradosEstudiantesController.deleteGradoEstudianteById)

//Petición get para el error 404
router.get('*',(req,res)=>{
    res
    .status(404)
    .send(`<h1>No existe la pagina :c</h1>`);
})

module.exports = router;

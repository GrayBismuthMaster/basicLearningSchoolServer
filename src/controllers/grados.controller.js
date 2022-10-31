const Grado = require('../models/Grado');
const Rol = require ('../models/Rol');

import jwt from 'jsonwebtoken';
require('dotenv').config({path: 'variables.env'});

export const createGrado = async (req, res) =>{
        const {nombre, id_profesores, id_estudiantes,} = req.body;
        const grado  = new Grado({
            nombre,      
            id_profesores,   
            id_materias  
        })
        console.log("Grado"+grado)
        // if(roles){
        //     console.log(body.roles)
        //     const foundRol = await Rol.find({nombreRol :{$in: body.roles}})
        //     usuario.roles = foundRol.map(rol => rol._id);
        // } else{
        //Si no ingresa nada busca el rol usuario y lo crea
        // const rol = await Rol.findOne({nombreRol : "user"});
        //Obtiene el id del rol usuario
        // usuario.roles = [rol._id];
        // }
        const savedGrado = await grado.save();
        //Token para 24 horas
        // const accessToken = jwt.sign({id: savedUser._id},process.env.ACCESSTOKEN,{
        // expiresIn: 86400
        // })
        // const refreshToken = jwt.sign({id: savedUser._id},process.env.REFRESHTOKEN,{
        //     expiresIn: 86400
        // })
        //LocalStorage
       // res.status(200).json({accessToken})
       //Cookies
       // En el date la cookie esta para 300 seconds
       res.status(202)
        // .cookie('accessToken', accessToken, 
        // {
        //     expires: new Date( new Date().getTime() + 300 * 100), 
        //     sameSite: 'strict',
        //      httpOnly: true
        // })
        // .cookie('refreshToken',refreshToken,{
        //     expires: new Date( new Date().getTime() + 300 * 100), 
        //     sameSite: 'strict',
        //     httpOnly: true
        // })
        .send({
            message:"Creación completa",
            data: savedGrado,
        })
       /*
        const resultado = crearUsuario(body);
        //Toda async function retorna una Promise
        resultado.then( user => {
            res.status(201).json({
                valor: user
            });
        }).catch( err =>{
            res.status(400).json({
                error: err
            })
        })
    */
}
export const getGrados = (req, res) =>{
      //res.send("Welcome to user ");
      let grados = obtenerGrados();
      grados.then((accesoGrados)=>{
          res.json(accesoGrados)
      })
      .catch((error)=>{
          console.log(error);
      })
}
export const getGradoById = async (req, res) =>{
        const grado = await Grado.findById(req.params.id);
        res.status(200).json(grado);
}
export const updateGradoById = async (req, res) =>{
        //Para obtener datos actualizados el tercer param
        const gradoActualizado = await Grado.findByIdAndUpdate(req.params.id, req.body ,{
            new :true
        });
        res.status(200).json(gradoActualizado);
        //Encontrar si existe el objeto
        //Buscando usuario pero como es int entonces parseamos
        //let usuario = existeUsuario();
        //let usuario = existeUsuario(req.params.id);
        //Revisando que exista caso contrario enviamos un cod 404
        //if(!usuario) res.status(404).send('El usuario no fue encontrado');
        
        /*
        const {error, value} = validarUsuario(req.body.nombre);
        if(error){
            res.status(400).send(error.details[0].message);
            return;
        }
        usuario.nombre = value.nombre;
        res.send(usuario);
        */
}
export const deleteGradoById = async (req, res)=>{
        await Grado.findByIdAndDelete(req.params.id);
        res.status(204).json();
        //let usuario = existeUsuario(req.params.id);
        //Revisando que exista caso contrario enviamos un cod 404
        //if(!usuario) {
           // res.status(404).send('El usuario no fue encontrado');
           // return;
        //}
        //const index = usuarios.indexOf(usuario);
        //usuarios.splice(index,1);
    
}

//FUNCIONES DE LOS CONTROLLERS-------------------------------------------------------------------------------------------------------------

const obtenerGrados =async  ()=>{
    const grados = await Grado.find({}).populate("id_materias").populate("id_profesores");
    return grados;
}

//Obtener usuario por ID
const validarUsuario = (nom)=>{
    //Agregando JOI para validaciones
    const schema = Joi.object({
        nombre: Joi.string().min(3).required()
    });
    return (schema.validate({ nombre:nom}))
}
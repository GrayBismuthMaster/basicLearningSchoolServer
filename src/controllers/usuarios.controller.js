const Usuario = require('../models/Usuario');
const Rol = require ('../models/Rol');
import jwt from 'jsonwebtoken';
// require('dotenv').config({path: 'variables.env'});

export const createUser = async (req, res) =>{
        console.log("ENTRA ACA")
        //VERIFICACION 
        let verificacionId = Usuario.find(req.body._id);
        if(verificacionId){
            res.status(200).send({message : "Existe usuario"});    
        }
        console.log(req.body.nombre)
        let body = req.body;
        const usuario  = new Usuario({
            nombre           : body.nombre,
            estado           : body.estado,
            username         : body.username,
            email            : body.email ,
            password         : body.password ? await Usuario.encryptPassword(body.password) : "pass"
        })
        console.log("Pdazo"+usuario)
        if(body.roles){
            console.log(body.roles)
        const foundRol = await Rol.find({nombreRol :{$in: body.roles}})
        usuario.roles = foundRol.map(rol => rol._id);
        } else{
        //Si no ingresa nada busca el rol usuario y lo crea
        const rol = await Rol.findOne({nombreRol : "user"});
        //Obtiene el id del rol usuario
        usuario.roles = [rol._id];
        }
        const savedUser = await usuario.save();
        //Token para 24 horas
        const accessToken = jwt.sign({id: savedUser._id},"4d5b158e12ec41d4ee115fed1b48e0b153b0c897b6b2c3d3b9537f835a7bc21070e5c56f154506f7a370d743679bfe0fcd89379eeffdac6c495c115c322fb923",{
        expiresIn: 86400
        })
        const refreshToken = jwt.sign({id: savedUser._id},"4dba9a5c25494e3db6dd3043bc33e2f404dee7f4ad6ccea3498befd5c874b24ea4566eb7e405f80e8b61be673d2ca9ba5ce6c5dde209d58ab033da26611015a0",{
            expiresIn: 86400
        })
        //LocalStorage
       // res.status(200).json({accessToken})
       //Cookies
       // En el date la cookie esta para 300 seconds
       res.status(202)
        .cookie('accessToken', accessToken, 
        {
            expires: new Date( new Date().getTime() + 300 * 100), 
            sameSite: 'strict',
             httpOnly: true
        })
        .cookie('refreshToken',refreshToken,{
            expires: new Date( new Date().getTime() + 300 * 100), 
            sameSite: 'strict',
            httpOnly: true
        })
        .send({
            message:"Creación completa",
            datosUsuarioCreado : savedUser,
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
export const getUsers = (req, res) =>{
      //res.send("Welcome to user ");
      let usuarios = obtenerUsuarios();
      usuarios.then((accesoUsuarios)=>{
          res.json(accesoUsuarios)
      })
      .catch((error)=>{
          console.log(error);
      })
}
export const getUserById = async (req, res) =>{
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
}
export const updateUserById = async (req, res) =>{
        //Para obtener datos actualizados el tercer param
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body ,{
            new :true
        });
        res.status(200).json(usuarioActualizado);
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
export const deleteUserById = async (req, res)=>{
        await Usuario.findByIdAndDelete(req.params.id);
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

export const verifyUser = async (req, res)=>{
    try{
        let {id} = req.params;
        const usuarioVerificado = await Usuario.findById(id);
        console.log("Usuario",usuarioVerificado);
        if(usuarioVerificado){
            console.log("ENtra a ptra verdi", usuarioVerificado.roles[0])
            let foundRol = await Rol.find({_id :{$in: usuarioVerificado.roles}})
            let rols = foundRol.map((rol) => rol.nombreRol === 'user');
            if(rols.includes(true)){
                res.status(200).json({
                    "user" : usuarioVerificado,
                    "state" : true
                })
            }else{
                throw new Error("No existe ese rol de usuario")
            }

        }
        
    }catch(e){
            res.status(404).json({
            "message" : false
        })
    };
    // if(_id){

    // }
}
//FUNCIONES DE LOS CONTROLLERS-------------------------------------------------------------------------------------------------------------

const obtenerUsuarios =async  ()=>{
    const usuarios = await Usuario.find({}).populate('Rol');
    return usuarios;
}

//Obtener usuario por ID
const validarUsuario = (nom)=>{
    //Agregando JOI para validaciones
    const schema = Joi.object({
        nombre: Joi.string().min(3).required()
    });
    return (schema.validate({ nombre:nom}))
}
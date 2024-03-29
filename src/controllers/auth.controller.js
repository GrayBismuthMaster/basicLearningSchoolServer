import User from '../models/Usuario';
import jwt from 'jsonwebtoken';
import Rol from '../models/Rol';
// require('dotenv').config({path: 'variables.env'})
let refreshTokens = [];


export const signIn = async (req, res) =>{
    //Populate regresa objeto entero no solo id aparece el nombre del rol también je je
    const userFound = await User.findOne({email : req.body.email}).populate("roles");
    if(!userFound){ return res.status(400).json({message: "User not found"});
    }else{
        console.log(userFound)
        const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    
    if(!matchPassword){
        return res.status(401).json({token: null, message: 'Invalid Password'});
    }else{
        console.log("usuario desde server")
        console.log(userFound);
        //Probar que existe contrasenia
        //Token creation local Storage
        /*
        const token = jwt.sign({id: userFound._id}, process.env.SECRET,{
            expiresIn: 86400
        });
        res.json({token});
        */
       //Refresh Tokens
       refreshTokens.push(refreshToken)
       //Token con cookies httpOnly
       const accessToken = jwt.sign({id: userFound._id},"4d5b158e12ec41d4ee115fed1b48e0b153b0c897b6b2c3d3b9537f835a7bc21070e5c56f154506f7a370d743679bfe0fcd89379eeffdac6c495c115c322fb923",{
        expiresIn: 86400
        })
        const refreshToken = jwt.sign({id: userFound._id},"4dba9a5c25494e3db6dd3043bc33e2f404dee7f4ad6ccea3498befd5c874b24ea4566eb7e405f80e8b61be673d2ca9ba5ce6c5dde209d58ab033da26611015a0",{
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
        .cookie('authSession', true ,{
            expires: new Date( new Date().getTime() + 300 * 100)
        })
        .cookie('refreshToken',refreshToken,{
            expires: new Date( new Date().getTime() + 300 * 100), 
            sameSite: 'strict',
            httpOnly: true
        })
        .cookie('refreshTokenID',true,{
            expires: new Date( new Date().getTime() + 300 * 100), 
        })
        .send({
            message:"Creación completa",
            datosUsuario : userFound,
            token: accessToken,
        })
    
    }
    }
}
export const gameUserRegister = async(req, res)=>{
    const {nombre}=req.body;
    console.log(req.body);
    const newUser = new User({
        nombre, 
        username : nombre
    })
        //Si no ingresa nada busca el rol usuario y lo crea
        const rol = await Rol.findOne({nombreRol : "user"});
        //Obtiene el id del rol usuario
        newUser.roles = [rol._id];

    const savedUser = await newUser.save();
    console.log(savedUser);
       //Cookies
       // En el date la cookie esta para 300 seconds
       res.status(202)
        .send({
            message:"Creación completa",
            datosUsuario : savedUser
        })
}
export const signup = async(req, res) =>{
    const {nombre, estado, imagen, username, email, password, roles}=req.body;
    console.log(req.body);
    const newUser = new User({
        nombre, 
        // cedula,
        // fecha_nacimiento:  new Date(`${fecha_nacimiento.substring(0,4)}/${fecha_nacimiento.substring(5,7)}/${fecha_nacimiento.substring(8,10)}`),
        // sexo,
        // estado_civil,
        // religion, 
        // ocupacion, 
        // lugar_nacimiento, 
        // residencia, 
        // domicilio, 
        // telefono, 
        estado, 
        imagen, 
        username : !req.body.username ? Date.now() : username, 
        email, 
        password : await User.encryptPassword(password)
    })
    if(roles){
        const foundRol = await Rol.find({nombreRol :{$in: roles}})
        newUser.roles = foundRol.map(rol => rol._id);
    } else{
        //Si no ingresa nada busca el rol usuario y lo crea
        const rol = await Rol.findOne({nombreRol : "user"});
        //Obtiene el id del rol usuario
        newUser.roles = [rol._id];
    }
    const savedUser = await newUser.save();
    console.log(savedUser);
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
        .cookie('authSession', true ,{
            expires: new Date( new Date().getTime() + 300 * 100)
        })
        .cookie('refreshToken',refreshToken,{
            expires: new Date( new Date().getTime() + 300 * 100), 
            sameSite: 'strict',
            httpOnly: true
        })
        .cookie('refreshTokenID',true,{
            expires: new Date( new Date().getTime() + 300 * 100), 
        })
        .send({
            message:"Creación completa",
            token: accessToken,
            datosUsuario : savedUser
        })
    
}
export const refreshToken = async(req,res,next) =>{
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken ) return res.status(403).send({message:"Token regenerado no encontado, por favor logeese de nuevo"}); 
    if(!refreshTokens.includes(refreshToken)) return res.status(403).send({message: "Token regenerado bloqueado, por favor logeese de nuevo"});
    jwt.verify(refreshToken,"4dba9a5c25494e3db6dd3043bc33e2f404dee7f4ad6ccea3498befd5c874b24ea4566eb7e405f80e8b61be673d2ca9ba5ce6c5dde209d58ab033da26611015a0",(err,id)=>{
        if(!err){
            const accessToken = jwt.sign({id: id},"4d5b158e12ec41d4ee115fed1b48e0b153b0c897b6b2c3d3b9537f835a7bc21070e5c56f154506f7a370d743679bfe0fcd89379eeffdac6c495c115c322fb923",{
                expiresIn: 86400
            })

            res.status(202)
        .cookie('accessToken', accessToken, 
        {
            expires: new Date( new Date().getTime() + 300 * 100), 
            sameSite: 'strict',
             httpOnly: true
        })
        .cookie('authSession', true ,{
            expires: new Date( new Date().getTime() + 300 * 100)
        })
        .send({
            previousSessionExpire: true,
            success: true
        })
        }else{
            return res.status(403).send({success: false, message: "Token regenerado inválido"});
        }
    })
    
}
export const logOut = (req, res)=>{
    res.clearCookie('refreshToken').clearCookie('accessToken').clearCookie('authSession').clearCookie('refreshTokenID').send('User logged out');
}
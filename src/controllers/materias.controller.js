const Materia = require('../models/Materia');

export const createMateria = async (req, res) =>{
        const {nombre} = req.body;
        const materia  = new Materia({
            nombre,      
        })
        console.log("Materia"+materia)
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
        const savedMateria = await materia.save();
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
            data: savedMateria,
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
export const getMaterias = (req, res) =>{
      //res.send("Welcome to user ");
      let materias = obtenerMaterias();
      materias.then((accesoMaterias)=>{
          res.json(accesoMaterias)
      })
      .catch((error)=>{
          console.log(error);
      })
}
export const getMateriaById = async (req, res) =>{
        const materia = await Materia.findById(req.params.id);
        res.status(200).json(materia);
}
export const updateMateriaById = async (req, res) =>{
        //Para obtener datos actualizados el tercer param
        const materiaActualizado = await Materia.findByIdAndUpdate(req.params.id, req.body ,{
            new :true
        });
        res.status(200).json(materiaActualizado);
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
export const deleteMateriaById = async (req, res)=>{
        await Materia.findByIdAndDelete(req.params.id);
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

const obtenerMaterias =async  ()=>{
    const materias = await Materia.find({});
    return materias;
}

//Obtener usuario por ID
// const validarUsuario = (nom)=>{
//     //Agregando JOI para validaciones
//     const schema = Joi.object({
//         nombre: Joi.string().min(3).required()
//     });
//     return (schema.validate({ nombre:nom}))
// }
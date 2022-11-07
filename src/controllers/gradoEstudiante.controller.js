const GradoEstudiante = require('../models/GradoEstudiante');

export const createGradoEstudiante = async (req, res) =>{
        const {id_estudiante, id_clase} = req.body;
        const gradoEstudiante  = new GradoEstudiante({      
            id_estudiante,   
            id_clase  
        })
        console.log("GradoEstudiante"+gradoEstudiante)
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
        const savedGradoEstudiante = await gradoEstudiante.save();
        
       res.status(202)
        .send({
            message:"Creación completa",
            data: savedGradoEstudiante,
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
export const getGradosEstudiantes = (req, res) =>{
      //res.send("Welcome to user ");
      let gradosEstudiantes = obtenerGradosEstudiantes();
      gradosEstudiantes.then((accesoGradosEstudiantes)=>{
          res.json(accesoGradosEstudiantes)
      })
      .catch((error)=>{
          console.log(error);
      })
}
export const getGradoEstudianteById = async (req, res) =>{
        const gradoEstudiante = await GradoEstudiante.findById(req.params.id);
        res.status(200).json(gradoEstudiante);
}
export const updateGradoEstudianteById = async (req, res) =>{
        //Para obtener datos actualizados el tercer param
        const gradoEstudianteActualizado = await GradoEstudiante.findByIdAndUpdate(req.params.id, req.body ,{
            new :true
        });
        res.status(200).json(gradoEstudianteActualizado);
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
export const deleteGradoEstudianteById = async (req, res)=>{
        await GradoEstudiante.findByIdAndDelete(req.params.id);
        res.status(204).json({"message" : "Success delete"});
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

const obtenerGradosEstudiantes =async  ()=>{
    const gradosEstudiantes = await GradoEstudiante.find({}).populate("id_estudiante").populate("id_clase");
    return gradosEstudiantes;
}

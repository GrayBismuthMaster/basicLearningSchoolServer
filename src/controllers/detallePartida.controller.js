const DetallePartida = require('../models/DetallePartida');

export const createDetallePartida = async (req, res) =>{
        const {calificacion, id_estudiante, id_clase, id_profesor} = req.body;
        const detallePartida  = new DetallePartida({      
            calificacion, 
            id_estudiante,   
            id_clase,
            id_profesor
        })
        console.log("DetallePartida"+detallePartida);
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
        const savedDetallePartida = await detallePartida.save();
        
       res.status(202)
        .send({
            message:"Creación completa",
            data: savedDetallePartida,
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
export const getDetallesPartidas = (req, res) =>{
      //res.send("Welcome to user ");
      let detallesPartidas = obtenerDetallesPartidas();
      detallesPartidas.then((accesoDetallesPartidas)=>{
          res.json(accesoDetallesPartidas)
      })
      .catch((error)=>{
          console.log(error);
      })
}
export const getDetallePartidaById = async (req, res) =>{
        const detallePartida = await DetallePartida.findById(req.params.id);
        res.status(200).json(detallePartida);
}
export const updateDetallePartidaById = async (req, res) =>{
        //Para obtener datos actualizados el tercer param
        const detallePartidaActualizado = await DetallePartida.findByIdAndUpdate(req.params.id, req.body ,{
            new :true
        });
        res.status(200).json(detallePartidaActualizado);
}
export const deleteDetallePartidaById = async (req, res)=>{
        await DetallePartida.findByIdAndDelete(req.params.id);
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

const obtenerDetallesPartidas =async  ()=>{
    const detallesPartidas = await DetallePartida.find({}).populate("id_estudiante").populate("id_clase").populate("id_profesor");
    return detallesPartidas;
}

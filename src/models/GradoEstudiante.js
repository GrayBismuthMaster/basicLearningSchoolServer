const mongoose = require("mongoose");
const gradoEstudianteSchema = new mongoose.Schema({
    id_estudiante       :   {
                                ref: "Usuario",
                                type: mongoose.Schema.Types.ObjectId
                            },
    id_clase            :   {                                
                                ref: "Grado",
                                type: mongoose.Schema.Types.ObjectId      
                            },
    estado              :   {
                                type: Boolean,
                                default: true
                            },
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('GradoEstudiante',gradoEstudianteSchema);
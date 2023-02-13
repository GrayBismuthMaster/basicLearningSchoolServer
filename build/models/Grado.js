"use strict";

var mongoose = require("mongoose");

var gradoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  fecha_actual: {
    type: Date,
    "default": Date.now()
  },
  id_profesores: [{
    ref: "Usuario",
    type: mongoose.Schema.Types.ObjectId
  }],
  id_materias: [{
    ref: "Materia",
    type: mongoose.Schema.Types.ObjectId
  }],
  estado: {
    type: Boolean,
    "default": true
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = mongoose.model('Grado', gradoSchema);
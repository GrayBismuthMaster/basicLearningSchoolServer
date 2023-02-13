"use strict";

var mongoose = require("mongoose");

var detallePartidaSchema = new mongoose.Schema({
  calificacion: {
    type: Number,
    required: false
  },
  id_clase: {
    ref: "Grado",
    type: mongoose.Schema.Types.ObjectId
  },
  id_estudiante: {
    ref: "Usuario",
    type: mongoose.Schema.Types.ObjectId
  },
  id_profesor: {
    ref: "Usuario",
    type: mongoose.Schema.Types.ObjectId
  },
  estado: {
    type: Boolean,
    "default": true
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = mongoose.model('DetallePartida', detallePartidaSchema);
"use strict";

var mongoose = require('mongoose');

var rolSchema = new mongoose.Schema({
  nombreRol: String
}, {
  versionKey: false
});
module.exports = mongoose.model('Rol', rolSchema);
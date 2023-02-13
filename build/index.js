"use strict";

var _app = _interopRequireDefault(require("./app"));

var _db = _interopRequireDefault(require("./config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config({
  path: 'variables.env'
});

console.log("production");
var mongoEnvPro = process.env.DB_MONGO_ATLAS_PRO;
(0, _db["default"])(mongoEnvPro); //const server = http.createServer(app);

_app["default"].listen({
  port: process.env.PROD_PORT || 5001
}, function () {
  console.log("Servidor Levantado en el puerto ".concat(process.env.PROD_PORT));
});
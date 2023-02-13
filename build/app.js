"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _initialSetup = require("./libs/initialSetup");

var _usuarios = _interopRequireDefault(require("./routes/usuarios.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _profile = _interopRequireDefault(require("./routes/profile.routes"));

var _uploads = _interopRequireDefault(require("./routes/uploads.routes"));

var _grados = _interopRequireDefault(require("./routes/grados.routes"));

var _materias = _interopRequireDefault(require("./routes/materias.routes"));

var _gradosEstudiantes = _interopRequireDefault(require("./routes/gradosEstudiantes.routes"));

var _detallesPartidas = _interopRequireDefault(require("./routes/detallesPartidas.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Depuración
var debug = require('debug')('app:inicio'); //Debug de DB


//import config from './config'
var app = (0, _express["default"])(); //Cookie 

var cookieParser = require('cookie-parser'); //Middleware cookieParser


app.use(cookieParser());

//Cors
var cors = require('cors'); //Middleware de express para manejar post


app.use(_express["default"].json()); //Recibe peticiones del body en formato json
//Y envia a la ruta body var1 = valor&var2=valor
//Rutas ROLES

(0, _initialSetup.createRoles)(); //Utilizar las rutas

//Url encoded permite trabajar con query strings 
//Permite el envío por formularios
app.use(_express["default"].urlencoded({
  extended: true
})); //recursos static

app.use('/public', _express["default"]["static"]("".concat(__dirname, "/public"))); //Middleware para el login
//app.use(logger);
//Config de entornos 
//console.log('Aplication: '+config.get('nombre'));
//console.log('BD server: '+config.get('configDB.host'));
//Morgan es un middleware de terceros para el registro de las peticiones http

if (app.get('env') === 'development') {
  app.use((0, _morgan["default"])('tiny')); //console.log('morgan habilitado');

  debug('Morgan está habilitado');
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
}

if (app.get('env') === 'production') {
  //app.use(cors({origin:'http://dermatologiaBettyGarzon:3000', credentials:true}))
  app.use(cors({
    origin: '*'
  }));
} //Trabajos con la base de datos


debug('Conectando con la base de datos'); //Middleware cuando uso la api de usuarios

app.use('/api/usuarios', _usuarios["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/profile', _profile["default"]); // app.use('/api/pdf' ,pdf )

app.use('/api/uploads', _uploads["default"]);
app.use('/api/grados', _grados["default"]);
app.use('/api/materias', _materias["default"]);
app.use('/api/gradosEstudiantes', _gradosEstudiantes["default"]);
app.use('/api/detallesPartidas', _detallesPartidas["default"]); //Nuevo para recuperar app

module.exports = app;
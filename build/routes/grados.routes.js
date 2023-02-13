"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _express = require("express");

var _middlewares = require("../middlewares");

var gradosController = _interopRequireWildcard(require("../controllers/grados.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();

var Joi = require('@hapi/joi');

//Al tener la raiz ya con la ruta solo manejo la raiz
//Petición Get que obtiene todos los usuarios
router.get('/',
/*authJwt.verifyToken,*/
gradosController.getGrados); //Petición POST que crea un usuario

router.post('/',
/*authJwt.verifyToken*,/ /*authJwt.isAdmin , verifySignup.checkRolesExisted,*/

/*verifySignup.checkDuplicateUsernameOrEmail,*/
gradosController.createGrado); //Petición GET para obtener usuario por id

router.get('/:id', gradosController.getGradoById); //Petición PUT para modificar un usuario por id 

router.put('/:id', gradosController.updateGradoById); //Petición Delete para borrar un usuario por id

router["delete"]('/:id', gradosController.deleteGradoById); //Petición get para el error 404

router.get('*', function (req, res) {
  res.status(404).send("<h1>No existe la pagina :c</h1>");
});
module.exports = router;
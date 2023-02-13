"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyUser = exports.updateUserById = exports.getUsers = exports.getUserById = exports.deleteUserById = exports.createUser = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Usuario = require('../models/Usuario');

var Rol = require('../models/Rol');

require('dotenv').config({
  path: 'variables.env'
});

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var verificacionId, body, usuario, foundRol, rol, savedUser, accessToken, refreshToken;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("ENTRA ACA"); //VERIFICACION 

            verificacionId = Usuario.find(req.body._id);

            if (verificacionId) {
              res.status(200).send({
                message: "Existe usuario"
              });
            }

            console.log(req.body.nombre);
            body = req.body;
            _context.t0 = Usuario;
            _context.t1 = body.nombre;
            _context.t2 = body.estado;
            _context.t3 = body.username;
            _context.t4 = body.email;

            if (!body.password) {
              _context.next = 16;
              break;
            }

            _context.next = 13;
            return Usuario.encryptPassword(body.password);

          case 13:
            _context.t5 = _context.sent;
            _context.next = 17;
            break;

          case 16:
            _context.t5 = "pass";

          case 17:
            _context.t6 = _context.t5;
            _context.t7 = {
              nombre: _context.t1,
              estado: _context.t2,
              username: _context.t3,
              email: _context.t4,
              password: _context.t6
            };
            usuario = new _context.t0(_context.t7);
            console.log("Pdazo" + usuario);

            if (!body.roles) {
              _context.next = 29;
              break;
            }

            console.log(body.roles);
            _context.next = 25;
            return Rol.find({
              nombreRol: {
                $in: body.roles
              }
            });

          case 25:
            foundRol = _context.sent;
            usuario.roles = foundRol.map(function (rol) {
              return rol._id;
            });
            _context.next = 33;
            break;

          case 29:
            _context.next = 31;
            return Rol.findOne({
              nombreRol: "user"
            });

          case 31:
            rol = _context.sent;
            //Obtiene el id del rol usuario
            usuario.roles = [rol._id];

          case 33:
            _context.next = 35;
            return usuario.save();

          case 35:
            savedUser = _context.sent;
            //Token para 24 horas
            accessToken = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, process.env.ACCESSTOKEN, {
              expiresIn: 86400
            });
            refreshToken = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, process.env.REFRESHTOKEN, {
              expiresIn: 86400
            }); //LocalStorage
            // res.status(200).json({accessToken})
            //Cookies
            // En el date la cookie esta para 300 seconds

            res.status(202).cookie('accessToken', accessToken, {
              expires: new Date(new Date().getTime() + 300 * 100),
              sameSite: 'strict',
              httpOnly: true
            }).cookie('refreshToken', refreshToken, {
              expires: new Date(new Date().getTime() + 300 * 100),
              sameSite: 'strict',
              httpOnly: true
            }).send({
              message: "Creación completa",
              datosUsuarioCreado: savedUser
            });
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

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = function getUsers(req, res) {
  //res.send("Welcome to user ");
  var usuarios = obtenerUsuarios();
  usuarios.then(function (accesoUsuarios) {
    res.json(accesoUsuarios);
  })["catch"](function (error) {
    console.log(error);
  });
};

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var usuario;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Usuario.findById(req.params.id);

          case 2:
            usuario = _context2.sent;
            res.status(200).json(usuario);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUserById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var updateUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var usuarioActualizado;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Usuario.findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 2:
            usuarioActualizado = _context3.sent;
            res.status(200).json(usuarioActualizado); //Encontrar si existe el objeto
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

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Usuario.findByIdAndDelete(req.params.id);

          case 2:
            res.status(204).json(); //let usuario = existeUsuario(req.params.id);
            //Revisando que exista caso contrario enviamos un cod 404
            //if(!usuario) {
            // res.status(404).send('El usuario no fue encontrado');
            // return;
            //}
            //const index = usuarios.indexOf(usuario);
            //usuarios.splice(index,1);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;

var verifyUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, usuarioVerificado, foundRol, rols;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return Usuario.findById(id);

          case 4:
            usuarioVerificado = _context5.sent;
            console.log("Usuario", usuarioVerificado);

            if (!usuarioVerificado) {
              _context5.next = 17;
              break;
            }

            console.log("ENtra a ptra verdi", usuarioVerificado.roles[0]);
            _context5.next = 10;
            return Rol.find({
              _id: {
                $in: usuarioVerificado.roles
              }
            });

          case 10:
            foundRol = _context5.sent;
            rols = foundRol.map(function (rol) {
              return rol.nombreRol === 'user';
            });

            if (!rols.includes(true)) {
              _context5.next = 16;
              break;
            }

            res.status(200).json({
              "user": usuarioVerificado,
              "state": true
            });
            _context5.next = 17;
            break;

          case 16:
            throw new Error("No existe ese rol de usuario");

          case 17:
            _context5.next = 22;
            break;

          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](0);
            res.status(404).json({
              "message": false
            });

          case 22:
            ; // if(_id){
            // }

          case 23:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 19]]);
  }));

  return function verifyUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //FUNCIONES DE LOS CONTROLLERS-------------------------------------------------------------------------------------------------------------


exports.verifyUser = verifyUser;

var obtenerUsuarios = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var usuarios;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Usuario.find({});

          case 2:
            usuarios = _context6.sent;
            return _context6.abrupt("return", usuarios);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function obtenerUsuarios() {
    return _ref6.apply(this, arguments);
  };
}(); //Obtener usuario por ID


var validarUsuario = function validarUsuario(nom) {
  //Agregando JOI para validaciones
  var schema = Joi.object({
    nombre: Joi.string().min(3).required()
  });
  return schema.validate({
    nombre: nom
  });
};
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.signIn = exports.refreshToken = exports.logOut = exports.gameUserRegister = void 0;

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config({
  path: 'variables.env'
});

var refreshTokens = [];

var signIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var userFound, matchPassword, accessToken, _refreshToken;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Usuario["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 2:
            userFound = _context.sent;

            if (userFound) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "User not found"
            }));

          case 7:
            console.log(userFound);
            _context.next = 10;
            return _Usuario["default"].comparePassword(req.body.password, userFound.password);

          case 10:
            matchPassword = _context.sent;

            if (matchPassword) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              token: null,
              message: 'Invalid Password'
            }));

          case 15:
            console.log("usuario desde server");
            console.log(userFound); //Probar que existe contrasenia
            //Token creation local Storage

            /*
            const token = jwt.sign({id: userFound._id}, process.env.SECRET,{
                expiresIn: 86400
            });
            res.json({token});
            */
            //Refresh Tokens

            refreshTokens.push(_refreshToken); //Token con cookies httpOnly

            accessToken = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, process.env.ACCESSTOKEN, {
              expiresIn: 86400
            });
            _refreshToken = _jsonwebtoken["default"].sign({
              id: userFound._id
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
            }).cookie('authSession', true, {
              expires: new Date(new Date().getTime() + 300 * 100)
            }).cookie('refreshToken', _refreshToken, {
              expires: new Date(new Date().getTime() + 300 * 100),
              sameSite: 'strict',
              httpOnly: true
            }).cookie('refreshTokenID', true, {
              expires: new Date(new Date().getTime() + 300 * 100)
            }).send({
              message: "Creación completa",
              datosUsuario: userFound,
              token: accessToken
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var gameUserRegister = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var nombre, newUser, rol, savedUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nombre = req.body.nombre;
            console.log(req.body);
            newUser = new _Usuario["default"]({
              nombre: nombre,
              username: nombre
            }); //Si no ingresa nada busca el rol usuario y lo crea

            _context2.next = 5;
            return _Rol["default"].findOne({
              nombreRol: "user"
            });

          case 5:
            rol = _context2.sent;
            //Obtiene el id del rol usuario
            newUser.roles = [rol._id];
            _context2.next = 9;
            return newUser.save();

          case 9:
            savedUser = _context2.sent;
            console.log(savedUser); //Cookies
            // En el date la cookie esta para 300 seconds

            res.status(202).send({
              message: "Creación completa",
              datosUsuario: savedUser
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function gameUserRegister(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.gameUserRegister = gameUserRegister;

var signup = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, nombre, estado, imagen, username, email, password, roles, newUser, foundRol, rol, savedUser, accessToken, refreshToken;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, estado = _req$body.estado, imagen = _req$body.imagen, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            console.log(req.body);
            _context3.t0 = _Usuario["default"];
            _context3.t1 = nombre;
            _context3.t2 = estado;
            _context3.t3 = imagen;
            _context3.t4 = !req.body.username ? Date.now() : username;
            _context3.t5 = email;
            _context3.next = 10;
            return _Usuario["default"].encryptPassword(password);

          case 10:
            _context3.t6 = _context3.sent;
            _context3.t7 = {
              nombre: _context3.t1,
              estado: _context3.t2,
              imagen: _context3.t3,
              username: _context3.t4,
              email: _context3.t5,
              password: _context3.t6
            };
            newUser = new _context3.t0(_context3.t7);

            if (!roles) {
              _context3.next = 20;
              break;
            }

            _context3.next = 16;
            return _Rol["default"].find({
              nombreRol: {
                $in: roles
              }
            });

          case 16:
            foundRol = _context3.sent;
            newUser.roles = foundRol.map(function (rol) {
              return rol._id;
            });
            _context3.next = 24;
            break;

          case 20:
            _context3.next = 22;
            return _Rol["default"].findOne({
              nombreRol: "user"
            });

          case 22:
            rol = _context3.sent;
            //Obtiene el id del rol usuario
            newUser.roles = [rol._id];

          case 24:
            _context3.next = 26;
            return newUser.save();

          case 26:
            savedUser = _context3.sent;
            console.log(savedUser); //Token para 24 horas

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
            }).cookie('authSession', true, {
              expires: new Date(new Date().getTime() + 300 * 100)
            }).cookie('refreshToken', refreshToken, {
              expires: new Date(new Date().getTime() + 300 * 100),
              sameSite: 'strict',
              httpOnly: true
            }).cookie('refreshTokenID', true, {
              expires: new Date(new Date().getTime() + 300 * 100)
            }).send({
              message: "Creación completa",
              token: accessToken,
              datosUsuario: savedUser
            });

          case 31:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signup(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.signup = signup;

var refreshToken = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var refreshToken;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            refreshToken = req.cookies.refreshToken;

            if (refreshToken) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", res.status(403).send({
              message: "Token regenerado no encontado, por favor logeese de nuevo"
            }));

          case 3:
            if (refreshTokens.includes(refreshToken)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", res.status(403).send({
              message: "Token regenerado bloqueado, por favor logeese de nuevo"
            }));

          case 5:
            _jsonwebtoken["default"].verify(refreshToken, process.env.REFRESHTOKEN, function (err, id) {
              if (!err) {
                var accessToken = _jsonwebtoken["default"].sign({
                  id: id
                }, process.env.ACCESSTOKEN, {
                  expiresIn: 86400
                });

                res.status(202).cookie('accessToken', accessToken, {
                  expires: new Date(new Date().getTime() + 300 * 100),
                  sameSite: 'strict',
                  httpOnly: true
                }).cookie('authSession', true, {
                  expires: new Date(new Date().getTime() + 300 * 100)
                }).send({
                  previousSessionExpire: true,
                  success: true
                });
              } else {
                return res.status(403).send({
                  success: false,
                  message: "Token regenerado inválido"
                });
              }
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function refreshToken(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.refreshToken = refreshToken;

var logOut = function logOut(req, res) {
  res.clearCookie('refreshToken').clearCookie('accessToken').clearCookie('authSession').clearCookie('refreshTokenID').send('User logged out');
};

exports.logOut = logOut;
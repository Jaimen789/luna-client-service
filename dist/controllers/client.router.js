"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));
var _client = require("../models/client.model");
var _crypto = _interopRequireDefault(require("crypto"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _jwtVerify = require("../../../jwtVerify/jwtVerify");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var router = (0, _express.Router)();
router.get('/', (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var clients;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client.ClientModel.find();
        case 2:
          clients = _context.sent;
          res.status(200).send(clients);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

//fetch all clients belonging to a specific organisation
router.get('/organisation', (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var organisation, clients;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          organisation = req.query.organisation;
          _context2.next = 3;
          return _client.ClientModel.find({
            organisation: organisation
          });
        case 3:
          clients = _context2.sent;
          if (clients) {
            res.status(200).send(clients);
          } else {
            res.status(404).send({
              message: 'No clients found by that organisation name'
            });
          }
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

//fetch all clients containing assigned groups
router.get('/group', (0, _jwtVerify.jwtVerify)(['Admin', 'Manager', 'Functional', 'Technical']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var groupName, clients;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          groupName = req.query.group;
          _context3.prev = 1;
          _context3.next = 4;
          return _client.ClientModel.find({
            'projects.assignedGroups.groupName': groupName
          });
        case 4:
          clients = _context3.sent;
          res.status(200).send(clients);
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(500).send("Internal server error getting clients with groupName");
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));

//fetch the client given the project name
router.get('/project', (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var projectName, clients, filteredClients;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          projectName = req.query.projectName;
          _context4.next = 3;
          return _client.ClientModel.find({});
        case 3:
          clients = _context4.sent;
          filteredClients = clients.filter(function (client) {
            return client.projects.some(function (project) {
              return project.name === projectName;
            });
          });
          if (filteredClients.length > 0) {
            res.status(200).send(filteredClients[0]);
          } else {
            res.status(404).send({
              message: 'No clients found with that project name'
            });
          }
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()));

//fetch the project given the project objectId
router.get('/project/id', (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _projectId;
    var projectId, project;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          projectId = req.query.projectId;
          projectId = (_projectId = projectId) === null || _projectId === void 0 ? void 0 : _projectId.toString();
          _context5.next = 4;
          return _client.ClientModel.aggregate([{
            $unwind: "$projects" // Unwind the projects array
          }, {
            $match: {
              "projects._id": new _mongoose["default"].Types.ObjectId(projectId)
            }
          }, {
            $replaceRoot: {
              newRoot: "$projects"
            }
          }]);
        case 4:
          project = _context5.sent;
          if (project) {
            res.status(200).send({
              project: project
            });
          } else {
            res.status(404).send({
              message: 'No project found with that projectId'
            });
          }
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}()));

//fetch the project given the project id and the client id
router.get('/project/client', (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var projectId, clientId, clients;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          projectId = req.query.projectId;
          clientId = req.query.clientId;
          _context6.next = 4;
          return _client.ClientModel.find();
        case 4:
          clients = _context6.sent;
          clients.forEach(function (client) {
            if (client.id == clientId) {
              client.projects.forEach(function (project) {
                if (project.id == projectId) {
                  res.status(200).send(project);
                  return;
                }
              });
            }
          });
          res.status(404).send({
            message: 'No project found with that projectId'
          });
        case 7:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()));

//remove a group from a project given the project id, group id and client id
router.put("/remove_group", (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var projectId, groupsToRemove, clientId, client, project, _project$assignedGrou;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          projectId = req.body.projectId;
          groupsToRemove = req.body.groupsToRemove;
          clientId = req.body.clientId;
          console.log("projectId: ", projectId);
          console.log("groupName: ", groupsToRemove);
          console.log("clientId: ", clientId);
          _context7.prev = 6;
          _context7.next = 9;
          return _client.ClientModel.findOne({
            id: clientId
          });
        case 9:
          client = _context7.sent;
          if (!client) {
            _context7.next = 25;
            break;
          }
          console.log("client found");
          project = client.projects.find(function (project) {
            return project.id == projectId;
          });
          if (!project) {
            _context7.next = 22;
            break;
          }
          console.log("project found: ", project);
          project.assignedGroups = (_project$assignedGrou = project.assignedGroups) === null || _project$assignedGrou === void 0 ? void 0 : _project$assignedGrou.filter(function (group) {
            return !groupsToRemove.includes(group.groupName);
          });
          console.log("assigned groups: ", project.assignedGroups);
          _context7.next = 19;
          return client.save();
        case 19:
          res.status(200).send(project);
          _context7.next = 23;
          break;
        case 22:
          res.status(404).send("Project not found");
        case 23:
          _context7.next = 26;
          break;
        case 25:
          res.status(404).send("Client not found");
        case 26:
          _context7.next = 31;
          break;
        case 28:
          _context7.prev = 28;
          _context7.t0 = _context7["catch"](6);
          res.status(500).send("Internal server error removing group from clients project");
        case 31:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[6, 28]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()));

//add a group to a project given the client id and project id
router.post("/add_group", (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var clientId, projectId, newGroups, client, project, _project$assignedGrou2;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          console.log('req body: ', req.body);
          clientId = req.body.clientId;
          projectId = req.body.projectId;
          newGroups = req.body.newGroups;
          _context8.prev = 4;
          console.log("received client id: ", clientId);
          _context8.next = 8;
          return _client.ClientModel.findOne({
            id: clientId
          });
        case 8:
          client = _context8.sent;
          if (!client) {
            _context8.next = 21;
            break;
          }
          project = client.projects.find(function (project) {
            return project.id == projectId;
          });
          if (!project) {
            _context8.next = 18;
            break;
          }
          (_project$assignedGrou2 = project.assignedGroups) === null || _project$assignedGrou2 === void 0 ? void 0 : _project$assignedGrou2.push.apply(_project$assignedGrou2, _toConsumableArray(newGroups));
          _context8.next = 15;
          return client.save();
        case 15:
          res.status(201).send(project);
          _context8.next = 19;
          break;
        case 18:
          res.status(404).send("Project not found");
        case 19:
          _context8.next = 22;
          break;
        case 21:
          res.status(404).send("Client not found");
        case 22:
          _context8.next = 27;
          break;
        case 24:
          _context8.prev = 24;
          _context8.t0 = _context8["catch"](4);
          res.status(500).send("Internal server error adding group to clients project");
        case 27:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[4, 24]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}()));

//ADD PROJECT TO EXISTING CLIENT
router.post("/add_project", (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var clientId, newProject, client, projectExists;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          clientId = req.body.clientId;
          newProject = {
            id: '',
            name: req.body.projectName,
            logo: req.body.logo,
            color: req.body.color,
            assignedGroups: req.body.groups
          };
          _context9.prev = 2;
          _context9.next = 5;
          return _client.ClientModel.findOne({
            id: clientId
          });
        case 5:
          client = _context9.sent;
          if (!client) {
            _context9.next = 16;
            break;
          }
          projectExists = client.projects.some(function (project) {
            return project.name === newProject.name;
          });
          if (!projectExists) {
            _context9.next = 11;
            break;
          }
          res.status(400).send("Project name already exists");
          return _context9.abrupt("return");
        case 11:
          newProject.id = (client.projects.length + 1).toString();
          client.projects.push(newProject);
          _context9.next = 15;
          return client.save();
        case 15:
          res.status(200).send(client);
        case 16:
          _context9.next = 21;
          break;
        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](2);
          res.status(500).send("Internal server error adding project to client");
        case 21:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 18]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}()));

//REMOVE A CLIENT GIVEN THE CLIENT ID
router["delete"]("/delete_client", (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var clientId, deletedClient;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          clientId = req.query.clientId;
          console.log('client Id: ', clientId);
          _context10.prev = 2;
          _context10.next = 5;
          return _client.ClientModel.findOneAndDelete({
            id: clientId
          });
        case 5:
          deletedClient = _context10.sent;
          if (deletedClient) {
            res.status(200).send(deletedClient);
          } else {
            res.status(404).send("Client not found");
          }
          _context10.next = 12;
          break;
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](2);
          res.status(500).send("Internal server error deleting client");
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 9]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}()));
router.post("/create_client", (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var existingUser, inviteToken, clientCount, newProject, newClient, transporter, mailOptions;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          // check if a user with the provided email already exists
          console.log('req: ', req.body);
          _context11.next = 3;
          return _client.ClientModel.findOne({
            email: req.body.email
          });
        case 3:
          existingUser = _context11.sent;
          if (!existingUser) {
            _context11.next = 7;
            break;
          }
          res.status(409).send("User with this email already exists.");
          return _context11.abrupt("return");
        case 7:
          // generate invite token
          inviteToken = _crypto["default"].randomBytes(32).toString("hex");
          _context11.next = 10;
          return _client.ClientModel.countDocuments();
        case 10:
          clientCount = _context11.sent;
          newProject = {
            id: '1',
            name: req.body.projectName,
            logo: req.body.logo,
            color: req.body.color,
            assignedGroups: req.body.groups
          }; // create new client
          newClient = new _client.ClientModel({
            id: String(clientCount + 1),
            // Assign the auto-incremented ID
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            inviteToken: inviteToken,
            organisation: req.body.organisation,
            industry: req.body.industry,
            projects: newProject,
            password: "Admin"
          });
          _context11.next = 15;
          return newClient.save();
        case 15:
          //send verification email
          transporter = _nodemailer["default"].createTransport({
            service: "gmail",
            auth: {
              user: "hyperiontech.capstone@gmail.com",
              pass: "zycjmbveivhamcgt"
            }
          });
          mailOptions = {
            from: process.env.EMAIL,
            to: newClient.email,
            subject: "Invitation to join Luna",
            html: "\n                <html>\n                <head>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            margin: 0;\n                            padding: 0;\n                        }\n                        .email-container {\n                            max-width: 600px;\n                            margin: auto;\n                            background-color: rgba(33, 33, 33, 1);\n                            padding: 20px;\n                        }\n                        .header {\n                            background-color: #04538E;\n                            color: #fff;\n                            padding: 20px;\n                            text-align: center;\n                        }\n                        .header h1 {\n                            margin: 0;\n                        }\n                        .logo {\n                            display: block;\n                            margin: 0 auto 20px;\n                            width: 100px;\n                            height: auto;\n                        }\n                        .greeting {\n                            font-size: 24px;\n                            color: #fff;\n                            text-align: center;\n                        }\n                        .message {\n                            font-size: 18px;\n                            color: rgba(122 , 122 , 122 , 1);\n                            text-align: center;\n                            margin: 20px 0;\n                        }\n                        .activation-link {\n                            display: block;\n                            width: 200px;\n                            margin: 20px auto;\n                            padding: 10px;\n                            background-color: rgba(18, 18, 18, 1);\n                            color: #fff;\n                            text-align: center;\n                            text-decoration: none;\n                            border-radius: 4px;\n                        }\n                        a {\n                            color: #fff;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div class=\"email-container\">\n                        <div class=\"header\">\n\n                            <h1>Welcome to Luna</h1>\n                        </div>\n                        <p class=\"greeting\">Hello ".concat(newClient.name, ",</p>\n                        <p class=\"message\">To complete your signup process, please click the button below.</p>\n                        <a href=\"http://localhost:3000/api/user/activate_account?token=").concat(inviteToken, "\" class=\"activation-link\">Activate Account</a>\n                    </div>\n                </body>\n                </html>\n            ")
            // attachments: [
            //     {
            //         filename: 'luna-logo.png',
            //         path: 'assets/luna-logo.png',
            //         cid: 'logo'
            //     }
            // ]
          };

          transporter.sendMail(mailOptions);
          console.log("New client created successfully");
          res.status(201).send({
            message: 'Client created successfully',
            inviteToken: inviteToken,
            client: newClient
          });
        case 20:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}()));
var _default = router;
exports["default"] = _default;
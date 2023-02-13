"use strict";

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './src/public/img/profile');
  },
  filename: function filename(req, file, cb) {
    cb(null, "".concat(file.originalname).concat(Date.now()));
  }
});
var upload = multer({
  storage: storage
});
module.exports = upload;
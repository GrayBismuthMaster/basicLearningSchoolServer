"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// route/api/profile.jsconst express = require( 'express' );
var aws = require('aws-sdk');

var multerS3 = require('multer-s3');

var multer = require('multer');

var path = require('path');

var url = require('url');

/**

 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
var router = _express["default"].Router();
/**
* PROFILE IMAGE STORING STARTS
*/


var s3 = new aws.S3({
  accessKeyId: 'AKIAQAUKBNLWM74VTENB',
  secretAccessKey: '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',
  Bucket: 'dermatologiahg'
});
/**
* Single Upload
*/

var profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'dermatologiahg',
    acl: 'public-read',
    key: function key(req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 2000000
  },
  // In bytes: 2000000 bytes = 2 MB
  fileFilter: function fileFilter(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');
/**
* Check File Type
* @param file
* @param cb
* @return {*}
*/

function checkFileType(file, cb) {
  // Allowed ext
  var filetypes = /jpeg|jpg|png|gif/; // Check ext

  var extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check mime

  var mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}
/**
* @route POST api/profile/business-img-upload
* @desc Upload post image
* @access public
*/


router.post('/profile-img-upload', function (req, res) {
  profileImgUpload(req, res, function (error) {
    // console.log( 'requestOkokok', req.file );
    // console.log( 'error', error );
    console.log(req.files);

    if (error) {
      console.log('errors', error);
      res.json({
        error: error
      });
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log('Error: No File Selected!');
        res.json('Error: No File Selected');
      } else {
        // If Success
        var imageName = req.file.key;
        var imageLocation = req.file.location; // Save the file name into database into profile model

        res.json({
          image: imageName,
          location: imageLocation
        });
      }
    }
  });
});
module.exports = router;
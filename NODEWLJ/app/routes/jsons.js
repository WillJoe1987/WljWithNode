var express = require('express');
var router = express.Router();
var logger = require('morgan');
/* GET home page. */
//http://localhost:3000/Wlj/WebContent/indexinit.json?_dc=1466495607918
var prex = '/Wlj/WebContent/';
router.get('*.json', function(req, res, next) {
  var url = req.url;
  var realUri = url.substring(prex.length);
  var furl = prex + 'jsons/'+realUri;
  console.log(req);
  console.log(furl);
 // res.sendFile(furl);
});

module.exports = router;

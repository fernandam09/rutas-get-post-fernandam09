var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
  Completar la Asignatura Aquí
  \/\/\/\/\/\/\/\/\/\/\/\/\/\/
 */
router.get('/calculator', function(req, res) {
  res.render('calculator',{});
});

router.post('/calculator', function(req, res) {
 
  
var n1=req.body.n1;
var n2=req.body.n2;
var btnsumar=req.body.btnsumar;
var btnrestar=req.body.btnrestar;
var btnmultiplicar=req.body.btnmultiplicar;
var btndividir=req.body.btndividir;

var resultado;

if((POST["btnsumar"]))
{
  resultado=n1+2;
  res.render('calculator',{"El resultado de la suma es": resultado,"rstMessage":rstMessage});
}

if((POST["btnrestar"]))
{
  resultado=n1+n2;
  res.render('calculator',{"El resultado de la resta es": resultado,"rstMessage":rstMessage});
}

if((POST["btnmultiplicar"]))
{
  resultado=n1+n2;
  res.render('calculator',{"El resultado de la  es": resultado,"rstMessage":rstMessage});
}

if((POST["btndividir"]))
{
  resultado=n1+n2;
  res.render('calculator',{"El resultado de la division  es": resultado,"rstMessage":rstMessage});
}
});

/*
  /\/\/\/\/\/\/\/\/\/\/\/\/\/\
*/

module.exports = router;

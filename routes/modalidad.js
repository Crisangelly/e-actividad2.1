var express = require('express');
var router = express.Router();
const Modalidad_Controller = require('../controllers/Modalidad_Controller');

/* POST */
router.post('/', function(req, res, next){
    let ver_modalidad = Modalidad_Controller.ingesar_modalidad(req.body)
    res.status(ver_modalidad.codigo).send(ver_modalidad.resultado);
});

module.exports = router; 
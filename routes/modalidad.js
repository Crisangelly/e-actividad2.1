var express = require('express');
var router = express.Router();
const Modalidad_Controller = require('../controllers/Modalidad_Controller');

/* GET */
router.get('/', function (req, res, next) {    
    Modalidad_Controller.ver_modalidad().then((resultados)=>{
        res.json(resultados);
    }).catch((error)=>{
        res.status(500).send(error)
    })
});

/* POST */
router.post('/', function(req, res, next){
    Modalidad_Controller.ingresar_modalidad(req.body).then(()=>{
        Modalidad_Controller.ver_modalidad().then((resultados)=>{
            res.json(resultados);
        }).catch((error)=>{
            res.status(500).send(error)
        })
    })
});

module.exports = router; 
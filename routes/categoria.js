var express = require('express');
var router = express.Router();
const Categoria_Controller = require('../controllers/Categoria_Controller');

/* GET  */
router.get('/', function (req, res, next) {    
    Categoria_Controller.ver_categorias().then((resultados)=>{
        res.json(resultados);
    }).catch((error)=>{
        res.status(500).send(error)
    })
});

router.get('/:index', function (req, res, next) {
    Categoria_Controller.ver_equipos_por_categoria(req.params.index).then((resultados)=>{
        res.json(resultados);
    }).catch((error)=>{
        res.status(500).send(error)
    })
}); 

/* POST */
router.post('/', function (req, res, next) {
    Categoria_Controller.ingresar_categoria(req.body).then(()=>{
        Categoria_Controller.ver_categorias().then((resultados)=>{
            res.json(resultados);
        }).catch((error)=>{
            res.status(500).send(error)
        })
    })
});

/* PUT */
router.put('/:index', function (req, res, next) {

});

/* DELETE */
router.delete('/:index', function (req, res, next) {

}); 

module.exports = router; 
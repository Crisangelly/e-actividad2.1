var express = require('express');
var router = express.Router();
const Categoria_Controller = require('../controllers/Categoria_Controller');

/* GET  */
router.get('/:index', function (req, res, next) {
    let ver = Categoria_Controller.ver_equipos_por_categoria(req.params.index);
    res.status(ver.codigo).send(ver)
});

/* POST */
router.post('/', function (req, res, next) {
    let agregada = Categoria_Controller.ingresar_categoria(req.body);
    res.status(agregada.codigo).send(agregada.resultado);
});

/* PUT */
router.put('/:index', function (req, res, next) {
    let editado = Categoria_Controller.editar_categoria(req.params.index, req.body);
    res.status(editado.codigo).send(editado);
});

/* DELETE */
router.delete('/:index', function (req, res, next) {
    let eliminar = Categoria_Controller.eliminar_categoria(req.params.index); 
    res.status(eliminar.codigo).send(eliminar); 
}); 

module.exports = router; 
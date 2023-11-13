var express = require('express');
var router = express.Router();
const Equipos_Controller = require('../controllers/Equipos_Controller')
const Categoria_Controller = require('../controllers/Categoria_Controller');

/* GET */

router.get('/', function (req, res, next) {
    let ver = Equipos_Controller.ver_equipos()
    res.status(ver.codigo).send(ver.resultado)
});

router.get('/verEquipos',function(req, res, next){
    let equipos = Equipos_Controller.ver_equipos_views()
    let categorias = Categoria_Controller.mostrar_categorias()
    console.log(equipos)
    res.render('verEquipos',{title: 'Equipos', equipos: equipos, categorias: categorias});
})  

/* POST */
router.post('/', function(req, res, next){
    let agregado = Equipos_Controller.ingresar_equipo(req.body)
    res.status(agregado.codigo).send(agregado.resultado);
});

/* PUT */
router.put('/:index',function(req, res, next){
    let editado = Equipos_Controller.editar_equipo(req.params.index, req.body)
    res.status(editado.codigo).send(editado);
} );

/* DELETE */
router.delete('/:index',function(req, res, next){
    let eliminar = Equipos_Controller.eliminar_equipo(req.params.index)
    res.status(eliminar.codigo).send(eliminar);   
}); 

router.delete('/sin_categoria/:index',function(req, res, next){
    let eliminar_categoria = Equipos_Controller.eliminar_categoria_inscrita(req.params.index)
    res.status(eliminar_categoria.codigo).send(eliminar_categoria); 
}); 

module.exports = router; 
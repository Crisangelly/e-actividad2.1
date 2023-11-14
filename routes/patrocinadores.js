var express = require('express');
var router = express.Router();
const Patrocinador_Controller = require('../controllers/Patrocinador_Controller');

/* GET user. */

/* router.get('/nuevoPatrocinador',function(req, res, next){
   res.render('nuevoPatrocinador',{title: 'Crear un Patrocinador'});
})  
 */
router.get('/', function(req, res, next){
   Patrocinador_Controller.ver_patrocinador().then((resultados)=>{
      res.json(resultados);
   }).catch((error)=>{
      res.status(500).send(error)
   })
}); 

/* POST */

router.post('/', function (req, res, next) {
   Patrocinador_Controller.ingresar_patrocinador(req.body).then(()=>{
      Patrocinador_Controller.ver_patrocinador().then((resultados)=>{
         res.json(resultados);
      }).catch((error)=>{
         res.status(500).send(error)
      })
   }).catch((error)=>{
      res.status(500).send(error)
   })
}); 

/* router.post('/nuevoPatrocinador', function (req, res, next) {
   let ver = Patrocinador_Controller.ingresar_patrocinador_views(req.body)
   res.status(200).send(ver)
}); */


/* DELETE */

router.delete('/:index', function (req ,res , next) {
   Patrocinador_Controller.eliminar_patrocinador(req.params.index).then(()=>{
      res.json();
   }).catch((error)=>{
      res.status(500).send(error)
   })
})

module.exports = router; 
const Categoria_model = require('../models/Categoria_model');

class CategoriaController{
    ver_categorias(){
        return new Promise((resolve, reject)=>{ 
            Categoria_model.ver_categorias().then((resultado)=>{resolve(resultado)}).catch((error)=>{reject(error)});  
        })   
    }
    ver_equipos_por_categoria(id){
        return new Promise((resolve, reject)=>{
            Categoria_model.ver_equipos_por_categoria(id).then((resultado)=>{resolve(resultado)}).catch((error)=>{reject(error)});  
        })  
    } 
    ingresar_categoria(categoria){
        return Categoria_model.ingresar_categoria(categoria);
    }
    editar_categoria(id, actualizar){
        return Categoria_model.editar_categoria(id, actualizar);
    }
    eliminar_categoria(id){
        return Categoria_model.eliminar_categoria(id);
    }
}

module.exports = new CategoriaController();
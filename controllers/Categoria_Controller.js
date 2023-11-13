const Categoria_model = require('../models/Categoria_model');

class CategoriaController{
    ingresar_categoria(categoria){
        return Categoria_model.ingresar_categoria(categoria);
    }
    editar_categoria(id, actualizar){
        return Categoria_model.editar_categoria(id, actualizar);
    }
    eliminar_categoria(id){
        return Categoria_model.eliminar_categoria(id);
    }
    mostrar_categorias(){
        let mostrar = Categoria_model.mostrar_categorias();
        if(mostrar){
            return mostrar; 
        }else{
            return mostrar;
        }   
    }
    ver_equipos_por_categoria(id){
        return Categoria_model.ver_equipos_por_categoria(id);
    }
}

module.exports = new CategoriaController();
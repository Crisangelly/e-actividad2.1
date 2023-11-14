const Equipo_model = require('../models/Equipo_model');

class EquipoController{
    ver_equipos(){
        return new Promise((resolve, reject)=>{
            Equipo_model.ver_equipos().then((resultado)=>{resolve(resultado)}).catch((error)=>{reject(error)}); 
        })  
    }
    ingresar_equipo(equipo){
        return Equipo_model.ingresar_equipo(equipo);
    }
    ver_equipos_views(){
        let mostrarequipos= Equipo_model.ver_equipos_views();
        if(mostrarequipos){
            return mostrarequipos; 
        }else{
            return mostrarequipos;
        }   
    }
    editar_equipo(id, actualizar){
        return Equipo_model.editar_equipo(id, actualizar);
    }
    eliminar_equipo(id){
        return Equipo_model.eliminar_equipo(id);
    }
    eliminar_categoria_inscrita(id){
        return Equipo_model.eliminar_categoria_inscrita(id); 
    }
}

module.exports = new EquipoController();
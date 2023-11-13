const Patrocinador_Model = require('../models/Patrocinador_model');

class PatrocinadorController{
    ingresar_patrocinador(patrocinador){
        return Patrocinador_Model.ingresar_patrocinador(patrocinador);
    }
    ingresar_patrocinador_views(patrocinador){   
        return Patrocinador_Model.ingresar_patrocinador_views(patrocinador)
    }
    ver_patrocinador(){
        return Patrocinador_Model.ver_patrocinador();
    }
}

module.exports = new PatrocinadorController();
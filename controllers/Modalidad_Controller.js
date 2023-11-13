const Modalidad_Model = require('../models/Modalidad_model');

class ModalidadController{
    ingesar_modalidad(modalidad){
        return Modalidad_Model.ingesar_modalidad(modalidad);
    }
}

module.exports = new ModalidadController();
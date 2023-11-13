const modalidades = require('../ejemplos/modalidades');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class Modalidad{
    constructor(id, nombre){
        this.id =  id,
        this.nombre = nombre
    }
}

class ModalidadModel{
    ingesar_modalidad(modalidad){
        modalidad.id = uuidv4();
        let nueva_modalidad = new Modalidad(modalidad.id, modalidad.nombre)
        modalidades.push(nueva_modalidad);
        let resultado = new respuesta(200, "modalidad agregada con éxito", modalidades); 
        return resultado;
    }
}

module.exports = new ModalidadModel();
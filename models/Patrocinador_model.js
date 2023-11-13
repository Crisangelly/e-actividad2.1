const patrocinadores = require('../ejemplos/patrocinadores');
const respuesta = require('../models/Respuesta');
const { v4: uuidv4 } = require('uuid');

class Patrocinador{
    constructor(id, nombre_comercial, persona_de_contacto, telefono, patrocinio, comentario){
        this.id = id,
        this.nombre_comercial = nombre_comercial,
        this.persona_de_contacto = persona_de_contacto,
        this.telefono = telefono,
        this.patrocinio = patrocinio,
        this.comentario = comentario
    }
}

class PatrocinadorModel{
    ingresar_patrocinador(patrocinador){
        patrocinador.id = uuidv4();
        let nuevo_patrocinador = new Patrocinador(patrocinador.id, patrocinador.nombre_comercial, patrocinador.persona_de_contacto, patrocinador.telefono, patrocinador.patrocinio, patrocinador.comentario);
        patrocinadores.push(nuevo_patrocinador);
        let resultado = new respuesta(200, "patrocinador agregado con éxito", patrocinadores); 
        return resultado;
    }
    ingresar_patrocinador_views(patrocinador){   
        patrocinador.id = uuidv4();
        let nuevo_patrocinador = new Patrocinador(patrocinador.id, patrocinador.nombre_comercial, patrocinador.persona_de_contacto, patrocinador.telefono, patrocinador.patrocinio, patrocinador.comentario);
        patrocinadores.push(nuevo_patrocinador);
        return patrocinadores
    }
    ver_patrocinador(){
        if(patrocinadores.length > 0){
            console.log("Los patrocinadores son:", patrocinadores);
            let resultado = new respuesta(200, "consulta completada con éxito", patrocinadores); 
            return resultado;
        }else{
            let resultado = new respuesta(404, "no hay patrocinadores registrados", undefined);
            return resultado;
        }
    }
}

module.exports = new PatrocinadorModel();
const equipos = require('../ejemplos/equipos');
const categorias = require('../ejemplos/categorias');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class Equipo{
    constructor(id, representante, modalidad, email, telefono, nombre_del_equipo, comentario, categoria){
        this.id = id,
        this.representante = representante,
        this.modalidad = modalidad,
        this.email = email,
        this.telefono = telefono,
        this.nombre_del_equipo = nombre_del_equipo,
        this.participantes = [],
        this.comentario = comentario,
        this.categoria = categoria
    }
    agregar_participantes(participante){
        this.participantes.push(participante);
    }
}

class EquipoModel{
    ingresar_equipo(equipo){
        equipo.id = uuidv4();
        let nuevo_equipo = new Equipo(equipo.id, equipo.representante, equipo.modalidad, equipo.email, equipo.telefono, equipo.nombre_del_equipo, equipo.comentario, equipo.categoria);
        for (let i = 0; i < equipo.participantes.length; i++) {
            nuevo_equipo.agregar_participantes(equipo.participantes[i])
        }
        equipos.push(nuevo_equipo);
        let resultado = new respuesta(200, "equipo agregado con éxito", equipos); 
        return resultado; 
    }
    ver_equipos(){
        if(equipos.length > 0){
            console.log("Los equipos son:", equipos);
            let resultado = new respuesta(200, "consulta de equipos completada con éxito", equipos); 
            return resultado;
        }else{
            let resultado = new respuesta(404, "no hay equipos registrados", undefined);
            return resultado;
        }
    }  
    ver_equipos_views(){
        if(equipos.length > 0){ 
            return equipos;
        }else{
            return equipos;
        }
    }  
    editar_equipo(id, actualizar){
        let i = equipos.findIndex(e => e.id == id);
        if (i !== -1) {
            equipos[i] = actualizar;
            let resultado = new respuesta(200, "equipo editado con éxito", equipos[i]); 
            return resultado;
        }else{
            let resultado = new respuesta(404, "no hay un equipo con ese id", undefined);
            return resultado;
        }
    }
    eliminar_equipo(id){
        let i = equipos.findIndex(e => e.id == id);
        if (i !== -1) {
            equipos.splice(i,1);
            let resultado = new respuesta(200, "equipo borrado con éxito", equipos); 
            return resultado;   
        } else {
            let resultado = new respuesta(404, "no hay un equipo con ese id", undefined);
            return resultado;
        } 
    }
    eliminar_categoria_inscrita(id){
        let i = equipos.findIndex(e => e.id == id);
        if (i !== -1) {
            equipos[i].modalidad = null;
            equipos[i].categoria = null;
            let resultado = new respuesta(200, "categoría inscrita borrada con éxito", equipos[i]); 
            return resultado;   
        } else {
            let resultado = new respuesta(404, "no hay un equipo con ese id", undefined);
            return resultado;
        } 
    }
}

module.exports = new EquipoModel(); 
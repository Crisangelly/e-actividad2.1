const connection = require('./db');

class Equipo{
    constructor(representante, email, telefono, nombre_de_equipo, participantes, comentario){
        this.representante = representante,
        this.email = email,
        this.telefono = telefono,
        this.nombre_de_equipo = nombre_de_equipo,
        this.participantes = participantes,
        this.comentario = comentario
    }
}

class Inscripcion{
    constructor(idCategoria, idEquipo){
        this.idCategoria = idCategoria
        this.idEquipo = idEquipo
    }
}

class EquipoModel{
    ver_equipos(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `equipos`', function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(rows)  
                }
            })
        })
    } 
    ver_equipos_views(){
        if(equipos.length > 0){ 
            return equipos;
        }else{
            return equipos;
        }
    }  
    ver_padrinos(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT `id_equipo`,`representante`,`participantes`,`nombre_de_equipo`,`id_patrocinador`, `nombre_comercial`, `persona_de_contacto` FROM `padrinos` JOIN `equipos` ON `id_equipo` = `idEquipo` JOIN `patrocinadores` ON `id_patrocinador` = `idPatrocinador`', function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(rows)  
                }
            })
        })
    }
    ingresar_equipo(equipo){
        return new Promise((resolve, reject) => { 
            let Nuevo_equipo = new Equipo(equipo.representante, equipo.email, equipo.telefono, equipo.nombre_de_equipo, equipo.participantes, equipo.comentario)
            connection.query('INSERT INTO `equipos` SET ?',Nuevo_equipo, function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    return resolve(equipo)
                }
            }) 
        })
    }
    ingresar_inscripcion(equipo, idDelEquipo){
        return new Promise((resolve, reject) => { 
            for (let i = 0; i < equipo.categorias.length; i++) { //Insertar varias inscripciones
            let idDeCategoria = equipo.categorias[i]
            let inscripcion = new Inscripcion(idDeCategoria, idDelEquipo)
                connection.query('INSERT INTO `inscripciones` SET ?',inscripcion, function(errFinal, rowsFinal, fieldsFinals) {
                    if (errFinal){
                        reject("La conexión a la base de datos a fallado")
                    }
                })
            }   
            resolve()
        })
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
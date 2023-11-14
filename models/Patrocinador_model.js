const connection = require('./db');

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
    ver_patrocinador(){ 
        return new Promise((resolve, reject) => {
            connection.query('SELECT `id_patrocinador`,`nombre_comercial`,`persona_de_contacto`,`telefono`,`nombre_patrocinio`,`monto`, `comentario` FROM `patrocinadores` JOIN `patrocinios` ON `idPatrocinio` = `id_patrocinio`', function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(rows)  
                }
            })
        })  
    }
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
}

module.exports = new PatrocinadorModel();
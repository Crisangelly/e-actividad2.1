const connection = require('./db');

class Categoria{
    constructor(idModalidad, nombre_categoria, descripcion, reglas, premio){
        this.idModalidad = idModalidad,
        this.nombre_categoria = nombre_categoria,
        this.descripcion = descripcion,
        this.reglas = reglas,
        this.premio = premio
    }
}

class CategoriaModel{
    ver_categorias(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `categorias`', function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(rows)  
                }
            })
        })
    }
    ver_equipos_por_categoria(id){
        return new Promise((resolve, reject) => {
            connection.query('SELECT `nombre_categoria`,`id_equipo`,`representante`, `email`, `telefono`, `nombre_de_equipo`, `participantes`, `comentario` FROM `inscripciones` JOIN `categorias` ON `id_categoria` = `idCategoria` JOIN `equipos` ON `id_equipo` = `idEquipo` WHERE `id_categoria` = ?',id, function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(rows)  
                }
            })
        })
    }
    ingresar_categoria(categoria){ 

    }
    editar_categoria(id, actualizar){

    }
    eliminar_categoria(id){

    }
}

module.exports = new CategoriaModel();
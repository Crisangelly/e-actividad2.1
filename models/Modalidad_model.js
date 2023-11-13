const connection = require('./db');

class Modalidad{
    constructor(nombre){
        this.nombre_modalidad = nombre
    }
}

class ModalidadModel{
    ver_modalidad(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `modalidades`', function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(rows)  
                }
            })
        })
    }
    ingresar_modalidad(modalidad){
        return new Promise((resolve, reject)=>{
            let Nueva_modalidad = new Modalidad(modalidad.nombre_modalidad)
            connection.query('INSERT INTO `modalidades` SET ?',Nueva_modalidad, function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve()  
                }
            })
        })
    }
}

module.exports = new ModalidadModel();
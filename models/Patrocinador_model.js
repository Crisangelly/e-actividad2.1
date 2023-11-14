const connection = require('./db');

class Patrocinador{
    constructor(nombre_comercial, persona_de_contacto, telefono, idPatrocinio, comentario){
        this.nombre_comercial = nombre_comercial,
        this.persona_de_contacto = persona_de_contacto,
        this.telefono = telefono,
        this.idPatrocinio = idPatrocinio,
        this.comentario = comentario
    }
}

class Padrino{
    constructor(idEquipo, idPatrocinador){
        this.idEquipo = idEquipo,
        this.idPatrocinador = idPatrocinador
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
        return new Promise((resolve, reject) => {
            let Nuevo_patrocinador = new Patrocinador(patrocinador.nombre_comercial, patrocinador.persona_de_contacto, patrocinador.telefono, patrocinador.idPatrocinio, patrocinador.comentario)
            connection.query('INSERT INTO `patrocinadores` SET ?',Nuevo_patrocinador, function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(patrocinador)  
                }
            })
        }).then(function (patrocinador){
            return new Promise((resolve, reject) => { 
                if(patrocinador.idPatrocinio == 5){  
                    connection.query('SELECT * FROM `patrocinadores`', function(errP, rowsP, fieldsP) {
                        if (errP){
                            reject("La conexión a la base de datos a fallado")
                        }else {
                            let idDelPatrocinador = rowsP[rowsP.length -1].id_patrocinador;
                            let retorna = [patrocinador, idDelPatrocinador];
                            resolve(retorna)
                        }
                    })  
                }else{
                    let retorna = [patrocinador]
                    resolve(retorna)
                }
            }) 
        }).then(function (patrocinadorYId){
            return new Promise((resolve, reject) => { 
                if(patrocinadorYId[0].idPatrocinio == 5){
                    if(patrocinadorYId[0].idEquipo == ""){
                        reject("Para ser un padrino debe patrocinar a algún equipo")
                        //DEBE eliminar a ese patrocinador
                        connection.query('DELETE FROM `patrocinadores` WHERE `id_patrocinador` = ?',patrocinadorYId[1], function(errFinal, rowsFinal, fieldsFinal) {
                            if (errFinal){
                                reject("La conexión a la base de datos a fallado")
                            }else {
                                resolve()
                            }
                        }) 
                    }else{
                        let Nuevo_padrino = new Padrino(patrocinadorYId[0].idEquipo, patrocinadorYId[1])
                        connection.query('INSERT INTO `padrinos` SET ?',Nuevo_padrino, function(errFinal, rowsFinal, fieldsFinal) {
                            if (errFinal){
                                reject("La conexión a la base de datos a fallado")
                            }else {
                                resolve()
                            }
                        }) 
                    } 
                }else{
                    resolve()
                }
            }) 
        })
    }
    ingresar_patrocinador_views(patrocinador){   
/*         patrocinador.id = uuidv4();
        let nuevo_patrocinador = new Patrocinador(patrocinador.id, patrocinador.nombre_comercial, patrocinador.persona_de_contacto, patrocinador.telefono, patrocinador.patrocinio, patrocinador.comentario);
        patrocinadores.push(nuevo_patrocinador);
        return patrocinadores */
    }
    eliminar_patrocinador(id){
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM `patrocinadores` WHERE `id_patrocinador` = ?',id, function(err, rows, fields) {
                if (err){
                    reject("La conexión a la base de datos a fallado")
                }else {
                    resolve(rows)  
                }
            })
        })  
    }
}

module.exports = new PatrocinadorModel();
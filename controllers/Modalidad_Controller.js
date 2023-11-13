const Modalidad_Model = require('../models/Modalidad_model');

class ModalidadController{
    ver_modalidad(){
        return new Promise((resolve, reject)=>{ 
            Modalidad_Model.ver_modalidad().then((resultado)=>{resolve(resultado)}).catch((error)=>{reject(error)});  
        })  
    }
    ingresar_modalidad(modalidad){
        return new Promise((resolve, reject)=>{
            Modalidad_Model.ingresar_modalidad(modalidad).then(resolve()).catch((error)=>{reject(error)});   
        })
    }
}

module.exports = new ModalidadController();
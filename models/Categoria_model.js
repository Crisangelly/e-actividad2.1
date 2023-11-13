const categorias = require('../ejemplos/categorias');
const equipos = require('../ejemplos/equipos');
const respuesta = require('../models/Respuesta');
const { v4: uuidv4 } = require('uuid');

class Categoria{
    constructor(id, id_modalidad, nombre, descripcion, premio){
        this.id = id,
        this.id_modalidad = id_modalidad,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.reglas = [],
        this.premio = premio
    }
    agregar_reglas(regla){
        this.reglas.push(regla);
    }
}

class CategoriaModel{
    ingresar_categoria(categoria){ 
        categoria.id = uuidv4();
        let nueva_categoria = new Categoria(categoria.id, categoria.id_modalidad, categoria.nombre, categoria.descripcion, categoria.premio);
        for (let i = 0; i < categoria.reglas.length; i++) {
            nueva_categoria.agregar_reglas(categoria.reglas[i])
        }
        categorias.push(nueva_categoria);
        let resultado = new respuesta(200, "categoría agregada con éxito", categorias); 
        return resultado;
    }
    editar_categoria(id, actualizar){
        let i = categorias.findIndex(c => c.id == id);
        if (i !== -1) {
            categorias[i] = actualizar;
            let resultado = new respuesta(200, "categoría editado con éxito", categorias[i]); 
            return resultado;
        }else{
            let resultado = new respuesta(404, "no hay una categoría con ese id", undefined);
            return resultado;
        }
    }
    eliminar_categoria(id){
        let i = categorias.findIndex(c => c.id == id);
        if (i !== -1) {
            let id_cat = categorias[i].id
            if(equipos.length > 0){
                for (let i = 0; i < equipos.length; i++) {
                    if(equipos[i].categoria == id_cat){
                        equipos.splice(i,1);
                    }
                }
            }
            categorias.splice(i,1);
            let resultado = new respuesta(200, "categoría borrada con éxito", undefined); 
            console.log(equipos)
            return resultado;   
        } else {
            let resultado = new respuesta(404, "no hay una categoría con ese id", undefined);
            return resultado;
        } 
    }
    mostrar_categorias(){
        if(categorias.length > 0){ 
            return categorias;
        }else{
            return categorias;
        }
    }
    ver_equipos_por_categoria(id){
        if(equipos.length > 0){
            var contequipos=[];
            for(let i=0; i< equipos.length;i++){
                if (equipos[i].categoria === id){
                    contequipos.push(equipos[i])
                }
            }
            if(contequipos.length > 0){
                let resultado = new respuesta(200, "consulta de equipos completada con éxito", contequipos);
                return resultado; 
            }else{
                let resultado = new respuesta(404, "no hay equipos registrados con esa categoria", undefined);
                return resultado; 
            }
        }else{
            let resultado = new respuesta(404, "no hay equipos registrados", undefined);
            return resultado;  
        }
    }
}

module.exports = new CategoriaModel();
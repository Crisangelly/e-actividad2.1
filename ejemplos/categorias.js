const categorias = [
    {
        id: "24998562-fac1-4c3a-9551-6feaa1f37bd6",
        id_modalidad: "29431f98-f414-4c43-81e3-482142d173d3", //Batalla de Robots
        nombre: "Modalidad sumo",
        descripcion: "Para este año 2023, en la modalidad sumo participarán robots bípedos, con el objetivo de sacar al oponente del área establecida.",
        reglas: ["El robot debe ser controlado por control remoto","Contar con batería y no con alimentación externa","Deben ser seguros y no representar un peligro para otros competidores o espectadores"],
        premio: 350
    },
    {
        id: "55714699-a348-41ed-b805-66232dce77ef",
        id_modalidad: "b4d89f98-6874-465a-b03c-47b5f7201c1f", //Vehículos Autonomos
        nombre: "Recolección de objetos",
        descripcion: "Crea un vehículo que sea capaz de reconocer y clasificar objetos según su color.",
        reglas: ["Vehículo autónomo, con batería. No se permite controlarlo a control remoto.","Tamaño máximo del robot: 30 cm por lado extendido","Objetos de dimensiones de entre: 3 y 5 cm de diámetro por 3 y 5 cm de altura"],
        premio: 500
    },
    {
        id: "a5414165-0991-4dce-ac45-a3519abbfe58",
        id_modalidad: "05612b06-81a7-4749-9ea5-25c8d570a80d", //Soluciones industriales
        nombre: "El objetivo y el problema",
        descripcion: "Para esta modalidad, se presenta un problema de una industria. El objetivo es presentar un prototipo que proponga una solución al problema.",
        reglas: ["Gana el equipo de participantes que presente la mejor propuesta.", "El jurado debe considerarlo como una solución aceptable al problema presentado", "El prototipo debe ser funcional y representar el problema y la solución."],
        premio: 500
    } 
]

module.exports = categorias;
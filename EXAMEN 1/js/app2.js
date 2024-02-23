// Crear un Registro de Alumnos (20%):
// a. Crea un programa en JavaScript que permita registrar información de alumnos.
// b. Debe utilizar el método prompt para capturar la siguiente información de cada alumno:
// i. Nombre del alumno.
// ii. Edad del alumno.
// iii. Calificación del alumno.
// c. Almacena la información de cada alumno en un objeto y agrega en una lista llamada
// listaAlumnos.
// d. Permite al usuario registrar tantos alumnos como desee, hasta que decida terminar la entrada
// de datos.
// e. Al finalizar la entrada de datos, muestra la lista completa de alumnos en la consola y se visualiza
// si el alumnos aprobó o reprobó la clase, la nota para aprobar es 65%.

// let alumno=[]

// let x=1;
// for (let i = 0; i < x; i++) {

//     alumno[i] = {
//         nombre: prompt(`Ingrese un nombre`),
//         edad: prompt(`Ingrese la edad`),
//         nota: parseInt(prompt(`Ingrese la Nota`)),
//         resultado: function calculador(nota) {
            
//         }
//     }
//     console.table(alumno);
//     op = prompt(`Ingrese -1 para salir`)
//     if (op!=-1) {
//         x++;    
//     }
    
// }


let op = 0;

let arrayCom = []
// function Planilla(empleado) {
//     this.empleado= {empleado};
// }

// function Empleado(nombre, sueldoBase, IHSS,INFOP,totalPgar) {
//     this.nombre = nombre;
//     this.sueldoBase= sueldoBase;
//     this.iHSS = IHSS;
//     this.iNFOP = INFOP;
//     this.totalPagar = totalPgar;
// }

while (op!=1) {

    
    let nombre = prompt(`Ingrese el nombre del alumno`);
    let edad = prompt(`Ingrese la edad`)
    let nota = prompt(`Ingrese la nota`)
    edad = parseInt(edad);
    let respuesta;
    if (nota>=65) {
        respuesta= true
    }else{
        respuesta = false;
    }
    // Tome en cuenta que las deducciones de ley son: IHSS 3.5%, INFOP 1.5%

   let  empleado = String(nombre) +'       '+ String(edad) + '    '+String(nota) + '   '+String(respuesta)

    arrayCom = [...arrayCom , empleado]
    // console.log(empleado);
    // console.log(planilla);
    

    op = prompt(`Ingrese 1 si desea salir, ingrese cualquier otro numero o letra si desea continuar`)


    if (op ==1){
 
        console.log(`NOMBRE               EDAD               Nota          PASO?`);
        arrayCom.forEach( empleado => {
        console.table(empleado);
    });
    }
    

}
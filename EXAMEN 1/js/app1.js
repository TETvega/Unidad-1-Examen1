

let numeroPlanilla = prompt(`Ingrese el numero de la Planilla : Ejemplo FEB-01-2024`)
let nombreEmpresa = prompt(`Ingrese el Nombre de la empresa`);


let totalPlanilla = 0;
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

    
    let nombre = prompt(`Ingrese el nombre del Empleado`);
    let sueldoBase = prompt(`Ingrese el sueldo Base del empleado`)
    sueldoBase = parseFloat(sueldoBase);

    // Tome en cuenta que las deducciones de ley son: IHSS 3.5%, INFOP 1.5%

    let IHSS = parseFloat(sueldoBase*0.035).toFixed(2);
    let INFOP = parseFloat(sueldoBase*0.015).toFixed(2);

    let totalPagar= parseFloat(sueldoBase-IHSS-INFOP).toFixed(2);
    totalPlanilla += totalPagar;


   let  empleado = String(nombre) +'                       '+ String(sueldoBase) + '              '+String(IHSS) + '              '+String(INFOP) + '              '+ totalPagar

    arrayCom = [...arrayCom , empleado]
    // console.log(empleado);
    // console.log(planilla);
    

    op = prompt(`Ingrese 1 si desea salir, ingrese cualquier otro numero o letra si desea continuar`)


    if (op ==1){
        console.log(`${numeroPlanilla}`);
         console.log(`${nombreEmpresa}`);
        console.log(`NOMBRE    BASE     IHSS    INFOP   TOTAL`);
        arrayCom.forEach( empleado => {
        console.table(empleado);
    });

    console.log(totalPlanilla);
    }
    

}



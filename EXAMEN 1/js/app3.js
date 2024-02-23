

let a= prompt(`Ingrese el valor de a`)
let b= prompt(`Ingrese el valor de b`)
let c= prompt(`Ingrese el valor de c`)

a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)


 console.log(a);
 console.log(b);
 console.log(c);
 

let discriminador =  (Math.pow(b , 2) - (4 *a *c)) 
if (discriminador >= 0) {
    let xPos = (-b + Math.sqrt(discriminador))/ (2*a);
    let xNeg = (-b - Math.sqrt(discriminador))/ (2*a);

    console.log(`La solucion es \nx1= ${xPos} \nx2 = ${xNeg}`);

}else{
    console.log(`La solucion esta con una raiz negativa por lo tanto es imaginaria`);
    let xPos = -b/ (2*a);
    let xPosIm=  Math.sqrt((-discriminador))/(2*a) ;
    let xNegIm = -Math.sqrt((-discriminador))/(2*a)

    console.log(`La solucion es \nx1= ${xPos} + ${xPosIm} i  \nx2 = ${xPos} - ${xNegIm} i`);
}






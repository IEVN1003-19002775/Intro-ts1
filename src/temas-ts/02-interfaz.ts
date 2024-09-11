
interface Alumno{
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number;
}

const alumno:Alumno = {
    nombre: 'Mario',
    edad: 23,
    email: 'mario@gmail.com',
}
console.log(alumno);

let mascotas =['perro','gato','perico'];
mascotas [1] = 'Nuevo gato';
mascotas.push('león');
console.log(mascotas)


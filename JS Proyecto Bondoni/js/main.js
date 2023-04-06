//Agenda de contactos de alumnos/as

const contacto1 = {
    nombre1: "Pedro",
    apellido1: "Gonzalez",
    dni1: "40345940",
    tel1: "2216458694",
    direccion1: "invento 678",
};

const contacto2 = {
    nombre2: "Agustina",
    apellido2: "Zarate",
    dni2: "40123456",
    tel2: "2216329573",
    direccion2: "Calle falsa 332",
};

const contacto3 = {
    nombre3: "Luciana",
    apellido3: "Fernandez",
    dni3: "40987654",
    tel3: "22162344555",
    direccion3: "Calle inexistente 256",
};

const contacto4 = {
    nombre4: "Matias",
    apellido4: "Rodriguez",
    dni4: "40678678",
    tel4: "2216225443",
    direccion4: "Calle 2560 num 111",
};

const contacto5 = {
    nombre5: "Rocio",
    apellido5: "Caceres",
    dni5: "40222333",
    tel5: "22162344665",
    direccion5: "Calle x num 444",
};

console.log(contacto1);
console.log(contacto2["nombre2"]);
console.log(contacto3);
console.log(contacto4["apellido4"]);
console.log(contacto5);


contacto1.direccion1 = "Calle lejos num 567";
console.log(contacto1.direccion1);

//funcion constructora
function datosAlumnos(nombre, apellido, dni, tel, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.tel = tel;
    this.direccion = direccion;
}

const contacto = new datosAlumnos("Juliana", "Perez", 40345234, 2213345678, "Calle 2 num 45")
console.log(contacto);

//Construccion del array
const datosAlumno = [contacto1, contacto2, contacto3, contacto4, contacto5];
console.log(datosAlumno);

console.log(datosAlumno.length);
for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
}
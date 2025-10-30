function mostrarDatos(nombre, edad, ...hobbies) {
    return "Nombre: "+nombre+"\nEdad: "+edad+"\nHobies: "+hobbies.join(", ");
}

console.log(mostrarDatos("Ana", 28, "leer", "viajar", "cocinar"));
console.log(mostrarDatos("Luis", 35, "futbol", "cine"));    
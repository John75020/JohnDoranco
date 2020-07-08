for (var nombre = 15; nombre <= 30; nombre++) {
    var message = ""; 
    if (nombre % 2 === 0) {
        // Nombre divisible par 2 : on ajoute "Divisible" au message
        message += 'Divisible';
    }
if (message === "") {
        // Si message est vide, le nombre n'est pas divisible par 2:
        // le message affiché sera le nombre
        message = nombre;
    }
    console.log(message);
}
}
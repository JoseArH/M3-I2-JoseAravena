function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

function obtenerRangoEtario(edad) {
    if (edad < 0) {
        return "Edad no válida. La edad no puede ser negativa.";
    } else if (edad <= 12) {
        return "Niño";
    } else if (edad <= 17) {
        return "Adolescente";
    } else if (edad <= 64) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}

function determinarRangoEtario() {
    let edadInput = document.getElementById("edad").value;
    let resultadoDiv = document.getElementById("resultado");

    if (isNumber(edadInput)) {
        let edad = parseInt(edadInput, 10);
        let rangoEtario = obtenerRangoEtario(edad);
        resultadoDiv.textContent = `Rango etario: ${rangoEtario}`;
    } else {
        resultadoDiv.textContent = "El dato ingresado no es un número válido.";
    }
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array para almacenar los nombres de los amigos
let sorteoRealizado = false; // Variable para controlar si el sorteo ya se ha realizado

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Obtener y limpiar espacios en blanco

    // Expresión regular para validar nombres (letras, espacios y caracteres latinos)
    const nombreValido = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (!nombreValido.test(nombre)) {
        alert("Por favor, inserte un nombre válido (solo letras, espacios y caracteres válidos).");
        return;
    }

    amigos.push(nombre); // Agregar al array
    actualizarListaAmigos(); // Refrescar la lista en la UI
    input.value = ""; // Limpiar campo de entrada
}

// Función para actualizar la lista en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado previo

    if (sorteoRealizado) {
        alert('El sorteo ya se ha realizado. Reinicia el juego para sortear de nuevo.');
        return;
    }

    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre seleccionado

    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</li>`; // Mostrar el resultado
    sorteoRealizado = true; // Marcar que el sorteo se ha realizado
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar el array de amigos
    sorteoRealizado = false; // Reiniciar el estado del sorteo
    actualizarListaAmigos(); // Limpiar la lista en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}

// Agregar evento de teclado para el campo de entrada
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
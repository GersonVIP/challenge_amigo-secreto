// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar el nombre al arreglo
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value.trim(); // Obtener el valor del input

    // Verificar que el nombre no esté vacío
    if (amigo) {
        amigos.push(amigo);  // Agregar el nombre al arreglo
        mostrarListaAmigos(); // Mostrar la lista de amigos
        input.value = ''; // Limpiar el input después de agregarlo
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para mostrar los amigos en la lista
function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

    // Mostrar cada amigo en la lista
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    // Seleccionar un nombre aleatorio
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Mostrar el nombre sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el área del resultado
    let liResultado = document.createElement('li');
    liResultado.textContent = `¡Tu amigo secreto es: ${amigoSorteado}!`;
    resultado.appendChild(liResultado);
}

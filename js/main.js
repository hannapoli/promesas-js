const btn = document.querySelector('#btn');
const infoUsuario = document.querySelector('#infoUsuario');

const usuario = {
    id: 1,
    nombre: "Fulanito Pérez Etxebarria",
    email: "fulanito123@gmail.com",
}

//======================PROMESAS==================

/**
 * Agrega un Listener al botón para obtener la respuesta del usuario.
 * @event
 * @listens click
 */
btn.addEventListener('click', () => {
    recibirRespuesta();
});

/**
 * Función para renderizar los datos sobre el usuario en el DOM.
 * @param {Object} usuario - Objeto que contiene los datos del usuario.
 * @param {string} usuario.nombre - Nombre del usuario.
 * @param {string} usuario.email - Correo electrónico del usuario.
 * @returns {Object} usuario - Objeto que contiene los datos del usuario
 */
const renderizarDatos = ({ nombre, email }) => {
    const userContainer = document.createElement("DIV");
    const pNombre = document.createElement("P");
    const pCorreo = document.createElement("P");

    userContainer.classList.add('userContainer');
    pNombre.textContent = nombre;
    pCorreo.textContent = email;

    userContainer.append(pNombre);
    userContainer.append(pCorreo);
    infoUsuario.append(userContainer);

    return usuario;
}
/**
 * Función que simula una llamada a una API y devuelve una promesa.
 * La promesa se resuelve después de un retraso simulado (2 segundos).
 * @returns {Promise<Object>} Promesa que se resuelve con el objeto del usario
 */
const llamarAPI = () => {
    return new Promise((resolve, reject) => {
        //la variable temporal para testear las funciones:
        setTimeout(() => {
            let chivato = true;
            if (chivato === true) {
                resolve(usuario);
            } else {
                reject('No se sabe. Sigue buscando...');
            }
        }, 2000);
    });
}

/**
 * Invoca la llamada simulada a la API y renderiza los datos del usuario.
 * Maneja la promesa utilizando .then() y .catch.
 * @function recibirRespuesta
 * @returns {void} No devuelve ningún valor directamente.
 */
// const recibirRespuesta = () => {
//     llamarAPI()
//         .then((respuesta) => {
//             renderizarDatos(respuesta);
//         })
//         .catch((error) => {
//             infoUsuario.textContent = error;
//         })
// }

//========================AWAIT======================
/**
 *  * Invoca la llamada simulada a la API y renderiza los datos del usuario.
 * @async
 * @returns {Promise<Object>} Promesa que se resuelve con el objeto del usario
 * @throws {Error|string} Si ocurre un error durante la llamada a la API.
 */
const recibirRespuesta = async () => {
    try {
        let respuesta = await llamarAPI();
        renderizarDatos(respuesta);
        return (respuesta)
    } catch (error) {
        infoUsuario.textContent = error;
        throw error;
    }
}
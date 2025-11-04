const btn = document.querySelector('#btn');
const infoUsuario = document.querySelector('#infoUsuario');

const usuario = {
    id: 1,
    nombre: "Fulanito Pérez Etxebarria",
    email: "fulanito123@gmail.com",
}

//======================PROMESAS===============

//Eventos
btn.addEventListener('click', () => {
    recibirRespuesta();
});

//Funciones

const renderizarDatos = (usuario) => {
    const userContainer = document.createElement("DIV");
    const pNombre = document.createElement("P");
    const pCorreo = document.createElement("P");

    userContainer.classList.add('userContainer');
    pNombre.textContent = usuario.nombre;
    pCorreo.textContent = usuario.email;

    userContainer.append(pNombre);
    userContainer.append(pCorreo);
    infoUsuario.append(userContainer);

    return usuario;
}
//Función que simule una llamada a una API y devuelva una promesa.
// La promesa se resuelve después de un retraso simulado (2s).

const llamarAPI = () => {
    return new Promise((resolve, reject) => {
        let chivato = false;
        if (chivato === true) {
            setTimeout(() => {
                resolve(usuario);
            }, 2000);
        } else {
            setTimeout(() => {
                reject('No se sabe. Sigue buscando...');
            }, 2000);
        }
    });
}

//Invocación de la promesa
// const recibirRespuesta = () => {
//     llamarAPI()
//         .then((respuesta) => {
//             renderizarDatos(respuesta);
//         })
//         .catch((error) => {
//             infoUsuario.textContent = error;
//         })
// }

//========================AWAIT===================
const recibirRespuesta = async () => {
    try {
        let respuesta = await llamarAPI();
        renderizarDatos(respuesta);
    } catch (error) {
        infoUsuario.textContent = error;
    }
}
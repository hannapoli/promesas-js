const btn = document.querySelector('#btn');
const infoUsuario = document.querySelector('#infoUsuario');

const usuario = {
    id: 1,
    nombre: "Fulanito Pérez Etxebarria",
    correoElectrónico: "fulanito123@gmail.com",
    edad: 36,
    cuidad: "Llodio",
    profesión: "actor"
}

//================================PROMESAS

//Eventos
btn.addEventListener('click', () => {
    recibirRespuesta();
});

//Funciones

//Crea una función que simule una llamada a una API y devuelva una promesa.
// La promesa debe resolverse después de un retraso simulado (por ejemplo, 2 segundos).

const renderizarDatos = (usuario) => {
    const pNombre = document.createElement("P");
}

const llamarAPI = () => {
    let promesa = new Promise((resolve, reject) => {
        let chivato = true;
        if (chivato === true) {
            resolve('bien');
            //pintar
        } else {
            reject('El usuario no existe!')
            //error
        }
    });
    return promesa;
}

//Invocación de la promesa
const recibirRespuesta = () => {
    llamarAPI()
        .then((respuesta) => {
            console.log(respuesta);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log('finally');
        })
}
//resolver la promesa con timeout 2000

//.then y catch para mostrar los datos o un error

//========================AWAIT
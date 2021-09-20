let usuario = sessionStorage.getItem("usuarioSessionStore");
let datos = document.getElementById("selection");

// Crea dinamicamente el texto para la personalizacion del mensaje
const createNombre = () => {
  
    const select = `${usuario} tenga en cuenta`;
    datos.innerHTML = select;
};

//Inicia la funcion al  iniciar la pagina.
function start() {
    if (sessionStorage.getItem("usuarioSessionStore") === null) {
        datos.innerHTML = `Participante no registrado... tenga en cuenta`;
    }else{
        createNombre();
    }
}
  
start();
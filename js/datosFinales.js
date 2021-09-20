let usuario = sessionStorage.getItem("usuarioSessionStore");
let puntosC1 = sessionStorage.getItem("puntosC1SS");
let puntosC2 = sessionStorage.getItem("puntosC2SS");
let puntosC3 = sessionStorage.getItem("puntosC3SS");
let puntosC4 = sessionStorage.getItem("puntosC4SS");
let puntosC5 = sessionStorage.getItem("puntosC5SS");
let filas = document.getElementById("puntaje-usuario");
let total = parseInt(puntosC1) + parseInt(puntosC2) + parseInt(puntosC3)+parseInt(puntosC4) + parseInt(puntosC5);


//Carga los datos obtenidos mediente el proceso para el almacenamiento en el localStorage
function localStoreDatosList(){
  let datosList = JSON.parse(localStorage.getItem('localDatosList')) || [];

  let newDatos = {
      Nombre: usuario,
      Puntoscategoria1: puntosC1, 
      Puntoscategoria2: puntosC2,
      Puntoscategoria3: puntosC3,
      Puntoscategoria4: puntosC4,
      Puntoscategoria5: puntosC5
  }

  datosList.push(newDatos);

  localStorage.setItem('localDatosList', JSON.stringify(datosList));
}
// Muestra dinamicamente  los resultados obtenidos por el usuario al guardar los resultados.
const createRow = () => {

    const tbody = `
                <tr>
                    <th>${usuario}</th>
                    <td>${puntosC1}</td>
                    <td>${puntosC2}</td>
                    <td>${puntosC3}</td>
                    <td>${puntosC4}</td>
                    <td>${puntosC5}</td>
                    <td>${total}/ de 300</td>
                </tr>
                    `;
    filas.innerHTML = tbody;
}



createRow();





let filasHistoricas = document.getElementById("puntaje-historicos");

//Carga del localStorage y muestra los datos historicos de los usuarios del juego dinamicamente en una tabla
document.addEventListener('DOMContentLoaded', function(event){
    let datosHistoricos = JSON.parse(localStorage.getItem('localDatosList'))
    console.log(datosHistoricos);
    for (let item of datosHistoricos) {
            let total = parseInt(item.Puntoscategoria1) + parseInt(item.Puntoscategoria2) + parseInt(item.Puntoscategoria3) + parseInt(item.Puntoscategoria4) + parseInt(item.Puntoscategoria5);
        filasHistoricas.innerHTML += `
                <tr>
                    <th>${item.Nombre}</th>
                    <td>${item.Puntoscategoria1}</td>
                    <td>${item.Puntoscategoria2}</td>
                    <td>${item.Puntoscategoria3}</td>
                    <td>${item.Puntoscategoria4}</td>
                    <td>${item.Puntoscategoria5}</td>
                    <td>${total}/ de 300</td>
                </tr>        
            `   
    }
})


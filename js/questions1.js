// Carga los array de las preguntas en formato JSON para su lectura y manupulacion
window.onload = function() {
    base_preguntas = readText("../questionsGame1.json")
    interprete_bp = JSON.parse(base_preguntas)
    escogerPreguntaAleatoria()
  }
  
  let pregunta
  let posibles_respuestas
  btn_correspondiente = [
    select_id("btn1"), select_id("btn2"),
    select_id("btn3"), select_id("btn4")
  ]
  npreguntas = []
  
  let preguntas_hechas = 0
  let preguntas_correctas = 0
  let puntos = 0
  
  //funcion para seleccionar las preguntas aleatoriamente basada en el archivo que guarda las preguntas en formato JSON
  function escogerPreguntaAleatoria() {
    let n = Math.floor(Math.random() * interprete_bp.length)
   
    while (npreguntas.includes(n)) {
      n++
      if (n >= interprete_bp.length) {
        n = 0 
      }
      if (npreguntas.length == interprete_bp.length) {
        npreguntas = []
      }
    }
    npreguntas.push(n)
    preguntas_hechas++

    if (preguntas_hechas > 5) { // condicional utilizado para renderizacion a la siguiente pregunta, ademas para  la  asignacion de los puntos y el almacenaje de estos en el sessionStorage

      if (preguntas_correctas == 1) {
        puntos = 10;     
      }else if (preguntas_correctas ==2){
        puntos = 20;
      }else if (preguntas_correctas == 3){
        puntos = 30;
      }else if (preguntas_correctas == 4){
        puntos = 40;
      }else if (preguntas_correctas == 5){
        puntos = 60;
      }

      let valueCategoria1 = puntos;
      sessionStorage.setItem("puntosC1SS", valueCategoria1);

      alert(`Termina la 1ª categoria. Puntos en 1ª categoria ${puntos},  aceptar para avanzar`);
      window.location.href= "categoria2.html";

    }
    escogerPregunta(n)
  }
  
  function escogerPregunta(n) {
    pregunta = interprete_bp[n]
    select_id("categoria").innerHTML = "Nombre categoria : "+pregunta.categoria
    select_id("pregunta").innerHTML = pregunta.pregunta
    
    let pc = preguntas_correctas
    if(preguntas_hechas>1){
      select_id("puntaje").innerHTML = "Numero de preguntas correctas: "+pc
      select_id("preguntasHechas").innerHTML = "Numero de preguntas respondidas: "+ (preguntas_hechas-1)
    }else{
       select_id("puntaje").innerHTML = ""
    }
    // manejo de las imagenes y modificacion de sus propiedades  
    style("imagen").objectFit = pregunta.objectFit;
    desordenarRespuestas(pregunta)
    if (pregunta.imagen) {
      select_id("imagen").setAttribute("src", pregunta.imagen)
      style("imagen").height = "150px"
      style("imagen").width = "200px"
    } else {
      style("imagen").height = "0px"
      style("imagen").width = "0px"
      setTimeout(() => {
              select_id("imagen").setAttribute("src", "")
      }, 500);
    }
  }
  
  // Desordena las preguntas para  que no se presenten siempre en la misma posicion 
  function desordenarRespuestas(pregunta) {
    posibles_respuestas = [
      pregunta.respuesta,
      pregunta.incorrecta1,
      pregunta.incorrecta2,
      pregunta.incorrecta3
    ]
    posibles_respuestas.sort(() => Math.random() - 0.5)
  
    select_id("btn1").innerHTML = posibles_respuestas[0]
    select_id("btn2").innerHTML = posibles_respuestas[1]
    select_id("btn3").innerHTML = posibles_respuestas[2]
    select_id("btn4").innerHTML = posibles_respuestas[3]
  }
  
  let suspender_botones = false
  
  // al dar click en el boton este nos permitira visualmente ver el resultado de la seleccion
  function oprimir_btn(i) {
    if (suspender_botones) {
      return
    }
    suspender_botones = true
    if (posibles_respuestas[i] == pregunta.respuesta) {
      preguntas_correctas++
      btn_correspondiente[i].style.background = "lightgreen"
    } else {
      btn_correspondiente[i].style.background = "pink"
    }
    for (let j = 0; j < 4; j++) {
      if (posibles_respuestas[j] == pregunta.respuesta) {
        btn_correspondiente[j].style.background = "lightgreen"
        break
      }
    }
    setTimeout(() => {
      reiniciar()
      suspender_botones = false
    }, 3000);
  }
  
  
  
  function reiniciar() {
    for (const btn of btn_correspondiente) {
     btn.style.background = "white"
    }
    escogerPreguntaAleatoria()
  }
  
  function select_id(id) {
    return document.getElementById(id)
  }
  
  function style(id) {
    return select_id(id).style
  }
  
  function readText(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      texto = xmlhttp.responseText;
    }
    return texto;
  }
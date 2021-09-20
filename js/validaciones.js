// Funcion para la Validacion que  solo se ingresen caracteres alfabeticos, no permite numeros
function soloLetras(e) {
    var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

    for (var i in especiales) {
    if (key == especiales[i]) {
        tecla_especial = true;
        break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
    }
}
// Funcion para la Validacion Rechaza si se intenta  enviar el registro del usuario sin campos digitados
function validaVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
        }
    else {
        return false;
        }
    }

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FrmIngresar").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

    let validado = 0;
    let valueUsuario = document.getElementById('nombre').value;
    sessionStorage.setItem("usuarioSessionStore", valueUsuario);
   

    
    if(validaVacio($("#nombre").val()) || $("#nombre").val().length == 0) {
        Swal.fire({
            title:'Error en el ingreso',text:'Debe ingresar su nombre',icon:'error',footer:'<span class="validacion">',
            padding:'1rem',
            backdrop:true,
            position:'center',
        }); 
        $("#nombreHelp").text("Debe ingresar su nombre");
      return;
    }else {
        validado++;
    }

    if($("#nombre").val().length <= 2 ){
        Swal.fire({
            title:'Error en el ingreso',text:'El nombre debe ser mayor o igual a 3 caracteres',icon:'error',footer:'<span class="validacion">',
            padding:'1rem',
            backdrop:true,
            position:'center',
        }); 
        $("#nombreHelp").text("El nombre debe ser mayor a 3 caracteres");
      return;

    }else{
        validado++;
    }

    if (validado == 2 ) {

         window.location.href= "Vista/categorias.html";
    }
    
  }



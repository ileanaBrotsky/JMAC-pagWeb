
function mostrarServicioUno() { 
  let mostrarServicioUno= document.getElementById("mostrarServUno");
  let containerServicios = document.getElementById("c_servicios");
  
  mostrarServicioUno.style.display = "grid";
  containerServicios.style.display = "none";
  
}

function mostrarServicioDos() { 
    let mostrarServicioDos= document.getElementById("mostrarServDos");
    let containerServicios = document.getElementById("c_servicios");
    
    mostrarServicioDos.style.display = "grid";
    containerServicios.style.display = "none";
    
  }
  function mostrarServicioTres() { 
    let mostrarServicioTres= document.getElementById("mostrarServTres");
    let containerServicios = document.getElementById("c_servicios");
    mostrarServicioTres.style.transition = "all 1s"
    mostrarServicioTres.style.display = "grid";
    containerServicios.style.display = "none";
    
  }
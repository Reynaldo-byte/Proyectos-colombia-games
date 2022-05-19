
var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
}
var imge=7;
function drop(ev) {
 
  ev.preventDefault();
  var content = ev.dataTransfer.getData("text");
  var drag = document.getElementById(content);
  var drop = document.getElementById(dejado);
  var src = drag.getAttribute("src");
    var svg = document.getElementById("Capa_1");
  var img = document.createElement("image");
 console.log(dejado) 
   if (imge==0) {
      document.getElementById("avanzar").removeAttribute("hidden")
      document.getElementById("mensaje").removeAttribute("hidden")
      document.querySelector('h1').innerHTML="Ahora vamos a jugar con los rostros"
    }
  if (dejado === drag.getAttribute("data-drag")) {
      imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "cabeza":
        disB("cabeza_x5F_1");
     
      
       
        break;
      case "camisa":
 
        disB("camisa_x5F_1");

        break;
      case "izquierdo":
     
        disB("izquierdo_x5F_1");
       
        break;
              case "izquierda":
     
        disB("izquierda_x5F_1");
       
        break;
              case "derecho":
     
        disB("derecho_x5F_1");
       
        break;
              case "derecha":
     
        disB("derecha_x5F_1");
       
        break;
              case "falda":
     
        disB("falda_x5F_1");
       
        break;
            case "cuello":
     
        disB("cuello_x5F_1");
       
        break;


    }
  }
}

function disB(id) {
    document.getElementById(id).classList.remove("dis-n");
  document.getElementById(id).classList.add("dis-b");
}
function disN(id) {
    document.getElementById(id).classList.remove("dis-b");
  document.getElementById(id).classList.add("dis-n");
}
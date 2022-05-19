
var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
}
var imge=3;
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
      document.getElementById("mensaje").removeAttribute("hidden")
    }
  if (dejado === drag.getAttribute("data-drag")) {
      imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "helado":
        disB("gracias_x5F_helado");
        disN("pedido_x5F_helado");
      
             console.log(dejado)
        break;
      case "hamburguesa":
 
        disB("gracias_x5F_hamburguesa");
        disN("pedido_x5F_hambuguesa")
        break;
      case "pizza":
     
        disB("gracias_x5F_pizza");
        disN("pedido_x5F_pizza")
        break;
      case "bebida":
     
        disB("gracias_x5F_bebida");
        disN("pedido_x5F_bebida")
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
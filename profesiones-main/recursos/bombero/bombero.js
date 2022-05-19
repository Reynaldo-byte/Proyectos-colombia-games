
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
      document.getElementById("mensaje").removeAttribute("hidden")
      document.getElementById("incendio").setAttribute("hidden","")
    }
  if (dejado === drag.getAttribute("data-drag")) {
      imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "_x31_":
        disB("_x32_");
        disN("_x31_");
        break;
       case "_x32_":
        disB("_x33_");
        disN("_x32_");
        break;
         case "_x33_":
        disB("_x34_");
        disN("_x33_");
        break;
        case "_x34_":
        disB("_x35_");
        disN("_x34_");
        break;
         case "_x35_":
        disB("_x36_");
        disN("_x35_");
        break;
         case "_x36_":
        disB("_x37_");
        disN("_x36_");
        break;
         case "_x37_":
        disB("_x38_");
        disN("_x37_");
        break;
         case "_x38_":

        disN("_x38_");

            

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
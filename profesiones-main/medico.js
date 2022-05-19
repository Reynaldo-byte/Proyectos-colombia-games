
var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
}
var imge=2;
function drop(ev) {
 
  ev.preventDefault();
  var content = ev.dataTransfer.getData("text");
  var drag = document.getElementById(content);
  var drop = document.getElementById(dejado);
  var src = drag.getAttribute("src");
    var svg = document.getElementById("Capa_1");
  var img = document.createElement("image");
 console.log(drag) 
   if (imge==0) {
      document.getElementById("mensaje").removeAttribute("hidden")
    }
  if (dejado === drag.getAttribute("data-drag")) {
      imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "fractura":
        disB("curado_fractura");
        disN("fractura");
      
             console.log(dejado)
        break;
      case "cabeza":
 
        disB("curado_sangre");
        disN("cabeza")
        break;
      case "gripe":
     
        disB("curado_cabeza");
        disN("gripe")
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
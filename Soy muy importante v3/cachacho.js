
var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id) 
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
  var id=drag.getAttribute('id')
 console.log(dejado) 
if (imge==0) {
  document.getElementById('avanzar').removeAttribute("hidden")
  document.getElementById('mensaje').removeAttribute("hidden")
}
  if (dejado === drag.getAttribute("data-drag")) {
    imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "camisa":

      disB("camisa_x5F_1")
      
       
        break;
      case "pantalon":
 disB("pantalon_x5F_1")
        

        break;
      case "zapatos":
      disB("zapatos_x5F_1")

       
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
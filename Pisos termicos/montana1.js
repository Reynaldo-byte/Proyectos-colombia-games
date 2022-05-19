
var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id) 
}
var imge=4;
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
  window.location.assign('montana2.html')
}
  if (dejado === drag.getAttribute("data-drag")) {
    imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "calido":
      disB('calido1')
      break;
      case "templado":
      disB('templado1')
      break;
      case "frio":
      disB('frio1')
      break;
      case "paramo":
      disB('paramo1')
      break;
      case "glaciar":
      disB('glaciar1')
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

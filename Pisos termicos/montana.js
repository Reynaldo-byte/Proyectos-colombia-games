
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
  window.location.assign('montana1.html')
}
  if (dejado === drag.getAttribute("data-drag")) {
    imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "calido":
      disB(0)
      break;
      case "templado":
      disB(1000)
      break;
      case "frio":
      disB(2000)
      break;
      case "paramo":
      disB(3000)
      break;
      case "glaciar":
      disB(4000)
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


var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id) 
}
var imge=6;
var imgr=3;
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
try {

if (imge==0 ) {
  document.getElementById('reinicio').removeAttribute('hidden')
}
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}


  if (dejado === drag.getAttribute("data-drag")) {
    imge=imge-1;
    imgr=imgr-1;
    console.log(id);
    drag.remove();
    switch (dejado) {
  
      case "primero":
      disB(id)
      break;
      case "segundo":
       disB(id)
      break;
      case "productores":
       disB(id)
      break;
      case "tercero":
       disB(id)
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

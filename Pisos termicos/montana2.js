
var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id) 
}
var imge=9;
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
  if (imge==0) {
  window.location.assign('montana3.html')}

else{
if (imgr==0 ) {
  document.getElementById('reinicio').removeAttribute('hidden')
}}
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
  
      case "calido":
      disB(id)
      break;
      case "templado":
       disB(id)
      break;
      case "frio":
       disB(id)
      break;
      case "paramo":
       disB(id)
      break;
      case "glaciar":
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

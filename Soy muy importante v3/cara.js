
var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id) 
}
var imge=11;
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
}
  if (dejado === drag.getAttribute("data-drag")) {
    imge=imge-1;
    console.log(img);
    drag.remove();
    switch (dejado) {
  
      case "ojos":
     console.log('1')
                if(id=='drag7'){disB("ojos_x5F_3");
        console.log('1')
      disN("ojos_x5F_2");
    disN("ojos_x5F_1");}
        if(id=='drag8'){disB("ojos_x5F_2");
          disN("ojos_x5F_3");
    disN("ojos_x5F_1");
      console.log('1')}
        if(id=='drag9'){disB("ojos_x5F_1");
          disN("ojos_x5F_2");
    disN("ojos_x5F_3");}
     
      
       
        break;
      case "nariz":
        if(id=='drag1'){disB("nariz_x5F_3");
        console.log('1')
      disN("nariz_x5F_2");
    disN("nariz_x5F_1");}
        if(id=='drag2'){disB("nariz_x5F_2");
          disN("nariz_x5F_3");
    disN("nariz_x5F_1");
      console.log('1')}
        if(id=='drag3'){disB("nariz_x5F_1");
          disN("nariz_x5F_2");
    disN("nariz_x5F_3");
      console.log('1')}
        

        break;
      case "boca":
     
                if(id=='drag6'){disB("boca_x5F_3");
        console.log('1')
      disN("boca_x5F_2");
    disN("boca_x5F_1");}
        if(id=='drag4'){disB("boca_x5F_2");
          disN("boca_x5F_3");
    disN("boca_x5F_1");
      console.log('1')}
        if(id=='drag5'){disB("boca_x5F_1");
          disN("boca_x5F_2");
    disN("boca_x5F_3");}
       
        break;

      case "cabello":
     
                if(id=='drag10'){disB("cafe_x5F_1");
                disB("cafe");
        console.log('1')
    disN("rojo_x5F_1");
                disN("rojo");
              disN("negro_x5F_1");
                disN("negro");}
        if(id=='drag12'){disN("cafe_x5F_1");
                disN("cafe");
       
    disB("rojo_x5F_1");
                disB("rojo");
              disN("negro_x5F_1");
                disN("negro");}
        if(id=='drag11'){disN("cafe_x5F_1");
                disN("cafe");
        console.log('1')
    disN("rojo_x5F_1");
                disN("rojo");
              disB("negro_x5F_1");
                disB("negro");}
       
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
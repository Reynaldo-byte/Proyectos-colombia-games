let colorOriginal;
function init() {
            let video;
let paisesMapa;
let elementosDomSvg;

let rutaAnimacion;
let contenedorImagen;
let documento;
    let elementosSvg = document;
     documento = elementosSvg;
 
   

    paisesMapa = [
elementosSvg.getElementById("Aurelio"),
elementosSvg.getElementById("Federico"),
elementosSvg.getElementById("Jairo"),
elementosSvg.getElementById("esopo"),
elementosSvg.getElementById("rafael"),
elementosSvg.getElementById("hans"),
elementosSvg.getElementById("William"),
elementosSvg.getElementById("robert"),
elementosSvg.getElementById("sofocles")
    ]
    paisesMapa.forEach(pais => {
        pais.addEventListener('mouseover', overMapa, false);
  pais.addEventListener('mouseout', outMapa, false);
    pais.addEventListener('click',MostrarAnimacion,false);
        pais.style.cursor = 'pointer';})
         elementosSvg.getElementById("Aurelio").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("Federico").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("Jairo").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("esopo").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("rafael").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("hans").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("William").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("robert").addEventListener('click',MostrarAnimacion,false);
elementosSvg.getElementById("sofocles").addEventListener('click',MostrarAnimacion,false);}
        const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "recursos/35.mp3";

const audio2 = document.createElement("audio");
audio2.preload = "auto";
audio2.src = "recursos/62.mp3";
const audio3 = document.createElement("audio");
audio3.preload = "auto";
audio3.src = "recursos/36.mp3";
function overMapa(e) {
    colorOriginal = e.path[0].style.fill
    e.path[0].style.filter='brightness(1.5)'
 colorOriginal = e.path[1].style.fill
    e.path[1].style.filter='brightness(1.5)'
audio3.play();
    MostrarOculto(e.target.parentNode.id,1)
    console.log(e.target.parentNode.id)

}


function outMapa(e) {
    e.path[0].style.fill = colorOriginal
    e.path[0].style.filter='none'
  e.path[1].style.fill = colorOriginal
    e.path[1].style.filter='none'
    MostrarOculto(e.target.parentNode.id,0)
 
}
function MostrarAnimacion(e){
 let elementosSvg = document;
let id=e.target.parentNode.id;


    switch (id) {
            case 'Aurelio':
        window.open("http://amediavoz.com/arturo.htm")
    break;
        case 'Jairo':
        window.open("http://frases-poemas.blogspot.com/2007/02/jairo-anbal-nio.html")
    break;
        case 'esopo':
        window.open("http://ciudadseva.com/textos/cuentos/euro/esopo/esopo.htm")
    break;
        case 'rafael':
        window.open("https://albalearning.com/audiolibros/pombo/")
    break;
        case 'hans':
        window.open("http://ciudadseva.com/autor/hans-christian-andersen/cuentos/")
    break;
        case 'William':
        window.open("https://ciudadseva.com/autor/william-shakespeare/")
    break;
        case 'robert':
        window.open("https://ciudadseva.com/autor/robert-louis-stevenson/cuentos/")
    break;
        case 'sofocles':
        window.open("http://ciudadseva.com/texto/antigona/")
    break;
        case 'Federico':
        window.open("https://usuaris.tinet.cat/picl/libros/glorca/gl000000.htm")
    break;

    default: break;
}
}
function MostrarOculto(id, visible) {
let elementosSvg = document;
    let estado = visible == 1 ? "block" : "none"
    switch (id) {
    case 'Aurelio':
     elementosSvg.getElementById("Aurelio_x5F_1").style.display=estado;

    break;
        case 'Jairo':
        elementosSvg.getElementById("Jairo_x5F_1").style.display=estado;
       
    break;
        case 'esopo':
        elementosSvg.getElementById("esopo_x5F_1").style.display=estado;

    break;
        case 'rafael':
elementosSvg.getElementById("rafael_x5F_1").style.display=estado;



    break;
        case 'hans':
        elementosSvg.getElementById("hans_x5F_1").style.display=estado;

    break;
        case 'William':
elementosSvg.getElementById("William_x5F__x21_").style.display=estado;

    break;
        case 'robert':
      elementosSvg.getElementById("robert_x5F_1").style.display=estado;
    break;
        case 'sofocles':
       elementosSvg.getElementById("sofocles_x5F_1_00000168833416223282946520000000769388652898454952_").style.display=estado;
    break;
        case 'Federico':
        elementosSvg.getElementById("Federico_x5F_1").style.display=estado;

    break;

    default: break;
}}
function comenzar() {
    document.getElementById("encabezado").style.display="none";
    document.getElementById("texto_1").removeAttribute("hidden");
        document.getElementById("Aurelio_x5F_1").style.display="none";
document.getElementById("Federico_x5F_1").style.display="none";
document.getElementById("William_x5F__x21_").style.display="none";
document.getElementById("rafael_x5F_1").style.display="none";
document.getElementById("sofocles_x5F_1_00000168833416223282946520000000769388652898454952_").style.display="none";
document.getElementById("esopo_x5F_1").style.display="none";
document.getElementById("hans_x5F_1").style.display="none";
document.getElementById("robert_x5F_1").style.display="none";
document.getElementById("Jairo_x5F_1").style.display="none";
init()
}

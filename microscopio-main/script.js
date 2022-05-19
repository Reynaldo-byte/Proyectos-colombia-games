const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "151.mp3";

		const audio2 = document.createElement("audio");
audio2.preload = "auto";
audio2.src = "102.mp3";

	function init() {
			let video;
let paisesMapa;
let elementosDomSvg;
let colorOriginal;
let rutaAnimacion;
let contenedorImagen;
let documento;
    let elementosSvg = document.querySelector('#Capa_1');
     documento = elementosSvg;
 
   



elementosSvg.addEventListener('mouseover', overMapa, false);
  elementosSvg.addEventListener('mouseout', outMapa, false);
    ;
        }
function MostrarAnimacion(e){
 let elementosSvg = document.querySelector('#Capa_1');
let id=e.target.parentNode.id;

switch (id) {
        case 'microscopio':
			document.getElementById("texto").removeAttribute("hidden");




	
            break;
       
}}
function MostrarOculto(id, visible) {
let elementosSvg = document
    let estado = visible == 1 ? "block" : "none"
    switch (id) {
        case 'microscopio':

             elementosSvg.getElementById("texto").style.display=estado;

	
            break;
      


        default:
            break;
    }}

function overMapa(e) {
    colorOriginal = e.path[0].style.fill
    e.path[0].style.filter='brightness(1.5)'
 colorOriginal = e.path[1].style.fill
    e.path[1].style.filter='brightness(1.5)'
    MostrarOculto(e.target.parentNode.id,1);

}


function outMapa(e) {
    e.path[0].style.fill = colorOriginal
    e.path[0].style.filter='none'
  e.path[1].style.fill = colorOriginal
    e.path[1].style.filter='none';
	    MostrarOculto(e.target.parentNode.id,0);
 
}
    function x40(id) {
        switch (id){case 'sals':
        document.getElementById('sals').src='recursos/sal1.jpg'
        break
        case 'alas':
        document.getElementById('alas').src='recursos/vivos1.jpg'
        break
        case 'gusanos':
        document.getElementById('gusanos').src='recursos/gusano1.jpg'
        break
        case 'arenas':
        document.getElementById('arenas').src='recursos/arena1.jpg'
        break
        case 'cebollas':
        document.getElementById('cebollas').src='recursos/cebolla1.jpg'
        break
        case 'cafes':
        document.getElementById('cafes').src='recursos/cafe1.jpg'
        break
    }}
        function x100(id) {
        switch (id){case 'sals':
        document.getElementById('sals').src='recursos/sal2.jpg'
        break
        case 'alas':
        document.getElementById('alas').src='recursos/vivos2.jpg'
        break
        case 'gusanos':
        document.getElementById('gusanos').src='recursos/gusano2.jpg'
        break
        case 'arenas':
        document.getElementById('arenas').src='recursos/arena2.jpg'
        break
        case 'cebollas':
        document.getElementById('cebollas').src='recursos/cebolla2.jpg'
        break
        case 'cafes':
        document.getElementById('cafes').src='recursos/cafe2.jpg'
        break
    }
        
        // body...
    }
    function volver(){      document.getElementById('Capa_1').setAttribute('style','display:block')
        document.getElementById('vivos').setAttribute('hidden','')
            document.getElementById('inertes').setAttribute('hidden','')
document.getElementById('volver').setAttribute('hidden','')
        document.getElementById('ala').setAttribute('hidden','')
            document.getElementById('cebolla').setAttribute('hidden','')
            document.getElementById('gusano').setAttribute('hidden','')
                document.getElementById('sal').setAttribute('hidden','')
            document.getElementById('arena').setAttribute('hidden','')
            document.getElementById('cafe').setAttribute('hidden','')}
    function inertes() {
        document.getElementById('inertes').removeAttribute('hidden')
        document.getElementById('volver').removeAttribute('hidden')
        document.getElementById('vivos').setAttribute('hidden','')
        document.getElementById('volver').removeAttribute('hidden')
        document.getElementById('Capa_1').setAttribute('style','display:none')
        document.getElementById('ala').setAttribute('hidden','')
            document.getElementById('cebolla').setAttribute('hidden','')
            document.getElementById('gusano').setAttribute('hidden','')
    }
        function vivos() {
            document.getElementById('volver').removeAttribute('hidden')
        document.getElementById('vivos').removeAttribute('hidden')
        document.getElementById('inertes').setAttribute('hidden','')
        document.getElementById('Capa_1').setAttribute('style','display:none')
                    document.getElementById('sal').setAttribute('hidden','')
            document.getElementById('arena').setAttribute('hidden','')
            document.getElementById('cafe').setAttribute('hidden','')

                    
    }
    function cargar(id) {
        switch (id){
            case 'ala':
            document.getElementById('ala').removeAttribute('hidden')
            document.getElementById('cebolla').setAttribute('hidden','')
            document.getElementById('gusano').setAttribute('hidden','')
            document.getElementById('sal').setAttribute('hidden','')
            document.getElementById('arena').setAttribute('hidden','')
            document.getElementById('cafe').setAttribute('hidden','')
            break
            case 'cebolla':
            document.getElementById('ala').setAttribute('hidden','')
            document.getElementById('cebolla').removeAttribute('hidden')
            document.getElementById('gusano').setAttribute('hidden','')
            document.getElementById('sal').setAttribute('hidden','')
            document.getElementById('arena').setAttribute('hidden','')
            document.getElementById('cafe').setAttribute('hidden','')
            break
            case 'gusano':
            document.getElementById('ala').setAttribute('hidden','')
            document.getElementById('cebolla').setAttribute('hidden','')
            document.getElementById('gusano').removeAttribute('hidden')
            document.getElementById('sal').setAttribute('hidden','')
            document.getElementById('arena').setAttribute('hidden','')
            document.getElementById('cafe').setAttribute('hidden','')
            break

            case 'sal':
            document.getElementById('ala').setAttribute('hidden','')
            document.getElementById('cebolla').setAttribute('hidden','')
            document.getElementById('gusano').setAttribute('hidden','')
            document.getElementById('sal').removeAttribute('hidden')
            document.getElementById('arena').setAttribute('hidden','')
            document.getElementById('cafe').setAttribute('hidden','')
            break
            case 'arena':
            document.getElementById('ala').setAttribute('hidden','')
            document.getElementById('cebolla').setAttribute('hidden','')
            document.getElementById('gusano').setAttribute('hidden','')
            document.getElementById('sal').setAttribute('hidden','')
            document.getElementById('arena').removeAttribute('hidden')
            document.getElementById('cafe').setAttribute('hidden','')
            break
            case 'cafe':
            document.getElementById('ala').setAttribute('hidden','')
            document.getElementById('cebolla').setAttribute('hidden','')
            document.getElementById('gusano').setAttribute('hidden','')
            document.getElementById('sal').setAttribute('hidden','')
            document.getElementById('arena').setAttribute('hidden','')
            document.getElementById('cafe').removeAttribute('hidden')           
            break
        }
        // body...
    }
				

		
		
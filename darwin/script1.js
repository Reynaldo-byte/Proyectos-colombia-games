

function actualizar(id) {
	switch (id){
		case 'a':
			document.getElementById('gifs').src="recursos/personas.gif"
			document.getElementById('texto').innerHTML="Los indivíduos de una misma especie no son idénticos entre sí, pues cada indivíduo difiere de los demás en algún rasgo"
personas.play();
tarantula.pause();
camello.pause();
aves.pause();

			break;
		case 'b':
			document.getElementById('gifs').src="recursos/tarantula.gif"
			document.getElementById('texto').innerHTML="Las poblaciones permanecen constantes, ya que, a pesar de que surgen nuevos indivíduos, factores como: las enfermedades, el clima, y la competencia acaban con muchos de ellos disminuyendo su número. Esta situación trae como consecuencia una lucha por la existencia."
personas.pause();
tarantula.play();
camello.pause();
aves.pause();

			break;		
		case 'c':
			document.getElementById('gifs').src="recursos/camello.gif"
			document.getElementById('texto').innerHTML="Sólo los indivíduos mejor adaptados al ambiente logran sobrevivir, reproducirse y tener hijos que heredarán sus características."
personas.pause();
tarantula.pause();
camello.play();
aves.pause();

			break;
		case 'd':
			document.getElementById('gifs').src="recursos/aves.gif"
			document.getElementById('texto').innerHTML="Todas las formas de vida habrían evolucionado de un ancestro común"
personas.pause();
tarantula.pause();
camello.pause();
aves.play();
		

	}
	// body...
}
function avanzar(){
	document.getElementById('inicio').setAttribute("hidden","");
	document.getElementById('contenido').removeAttribute("hidden")
}

var puntaje=0;
var pregunta=1
let ruta_1_x=[576,576,576,576,586,599.4,614.08,626.04,654.85,654.9,683,701.1,718,738,745.5,761.5,761.5,768,761.5,773.4,799.25,814.9,827.1]
let ruta_1_y=[377.5,450.5,455.5,463.5,475.7,483.31,497,506.7,513.5,518.1,518.1,518.1,518.1,518.1,502.1,463.5,448.5,439.5,420.5,413.2,388.5,382.5,370.5]
let ruta_2_x=[814.9,791.3,773.4,763.4,750.4,745.4,738,714]
let ruta_2_y=[354.5,354.5,354.5,344.5,335,325,316,316]
let ruta_3_x=[675.5,656.5,640.5,630.5,620.5,596.5,582.5,573.5,569.5,569.5,536.5,515.5]
let ruta_3_y=[316,300,300,896,291,290,288,291,292,293,293,293]
let ruta_4_x=[515,499,491,484,478,471,461,450]
let ruta_4_y=[293,293,286,279,279,275,269,250]
let ruta_5_x=[450,452,451,444,437,417,397]
let ruta_5_y=[250,260,275,290,300,320,320]
let ruta_6_x=[397,427,457,477,527,502,490,470,460,457]
let ruta_6_y=[320,340,370,400,420,440,460,490,510,542]

function respuesta(value) {
	if (value==true) {

		rutas(pregunta)
		puntaje=puntaje+20
		document.getElementById("barco").setAttribute("class","dis-b")
		document.getElementById("explosion").setAttribute("class","dis-n")
		document.getElementById('puntaje').innerHTML="<p>"+puntaje+"</p>";
	
		document.getElementById('mal_'+pregunta).setAttribute("hidden","")
		

	}
		if (value==false) {
		puntaje=puntaje-20
		document.getElementById("barco").setAttribute("class","dis-n")
		document.getElementById("explosion").setAttribute("class","dis-b")
		document.getElementById('puntaje').innerHTML="<p>"+puntaje+"</p>";
		document.getElementById('mal_'+pregunta).removeAttribute("hidden")
	}

}
function inicio() {
	document.getElementById('inicio').setAttribute("hidden","")
	document.getElementById('inicio_2').removeAttribute("hidden")
	// body...
}
function comenzar() {
	document.getElementById('inicio_2').setAttribute("hidden","")
	document.getElementById('pregunta_1').removeAttribute("hidden")
	document.getElementById('puntaje').removeAttribute("hidden")
	document.getElementById('mapa').removeAttribute("hidden")
	// body...
}
function rutas(id) {
	var i=0
	const h=[0,ruta_1_x.length,ruta_2_x.length,ruta_3_x.length,ruta_4_x.length,ruta_5_x.length,ruta_6_x.length]
	document.getElementById('pregunta_'+id).setAttribute("hidden","")
								setTimeout(	function intento(){
								pregunta=pregunta+1;
								
			if (pregunta<=6) {document.getElementById('pregunta_'+pregunta).removeAttribute("hidden")

						}
		else{
			if (puntaje>=80) {
				document.getElementById('gana').removeAttribute("hidden")
			}
			else{
				document.getElementById('intenta').removeAttribute("hidden")
			}
		}},100*h[pregunta]-1)
	switch (id) {

		case 1:
			setInterval(function ruta() {	
		if(i <= ruta_1_x.length-1) {
		document.getElementById('explosion').removeAttribute("transform")
		
		document.getElementById("explosion").setAttribute("transform","matrix(1 0 0 1 "+ruta_1_x[i]+" "+ruta_1_y[i]+")")
		document.getElementById('barco').removeAttribute("transform")
		
		document.getElementById("barco").setAttribute("transform","matrix(1 0 0 1 "+ruta_1_x[i]+" "+ruta_1_y[i]+")")
		i++;
		// body...
	}}
	

	,100)
			break;
		case 2:
			setInterval(function ruta() {	
		if(i <= ruta_2_x.length-1) {
					document.getElementById('explosion').removeAttribute("transform")
		
		document.getElementById("explosion").setAttribute("transform","matrix(1 0 0 1 "+ruta_2_x[i]+" "+ruta_2_y[i]+")")
		document.getElementById('barco').removeAttribute("transform")
		
		document.getElementById("barco").setAttribute("transform","matrix(1 0 0 1 "+ruta_2_x[i]+" "+ruta_2_y[i]+")")
		i++;
		// body...
	}}
	

	,100)
			break;
		case 3:
			setInterval(function ruta() {	
		if(i <= ruta_3_x.length-1) {
					document.getElementById('explosion').removeAttribute("transform")
		
		document.getElementById("explosion").setAttribute("transform","matrix(1 0 0 1 "+ruta_3_x[i]+" "+ruta_3_y[i]+")")
		document.getElementById('barco').removeAttribute("transform")
		
		document.getElementById("barco").setAttribute("transform","matrix(1 0 0 1 "+ruta_3_x[i]+" "+ruta_3_y[i]+")")
		i++;
		// body...
	}}
	

	,100)
			break;
					case 4:

			setInterval(function ruta() {	
		if(i <= ruta_4_x.length-1) {
					document.getElementById('explosion').removeAttribute("transform")
		
		document.getElementById("explosion").setAttribute("transform","matrix(1 0 0 1 "+ruta_4_x[i]+" "+ruta_4_y[i]+")")
		document.getElementById('barco').removeAttribute("transform")
	
		document.getElementById("barco").setAttribute("transform","matrix(1 0 0 1 "+ruta_4_x[i]+" "+ruta_4_y[i]+")")
		i++;
		// body...
	}}
	

	,100)
			break;
					case 5:
			setInterval(function ruta() {	
		if(i <= ruta_5_x.length-1) {
					document.getElementById('explosion').removeAttribute("transform")
		
		document.getElementById("explosion").setAttribute("transform","matrix(1 0 0 1 "+ruta_5_x[i]+" "+ruta_5_y[i]+")")
		document.getElementById('barco').removeAttribute("transform")
	
		document.getElementById("barco").setAttribute("transform","matrix(1 0 0 1 "+ruta_5_x[i]+" "+ruta_5_y[i]+")")
		i++;
		// body...
	}}
	

	,100)
			break;
								case 6:
			setInterval(function ruta() {	
		if(i <= ruta_6_x.length-1) {
					document.getElementById('explosion').removeAttribute("transform")
		
		document.getElementById("explosion").setAttribute("transform","matrix(1 0 0 1 "+ruta_6_x[i]+" "+ruta_6_y[i]+")")
		document.getElementById('barco').removeAttribute("transform")
		
		document.getElementById("barco").setAttribute("transform","matrix(1 0 0 1 "+ruta_6_x[i]+" "+ruta_6_y[i]+")")
		i++;
		// body...
	}}
	

	,100)
			break;
	}


	
}

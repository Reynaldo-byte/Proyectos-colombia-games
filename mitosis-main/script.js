var i=0;

function respuestas(status,id){
	if(status=='correcta'){
		document.getElementById('correcta'+id).setAttribute('style','border-color:green;border-width:0.5rem;')
		document.getElementById('avance_'+i).removeAttribute('hidden')
	}
	else{
				document.getElementById('incorrecta'+id).setAttribute('style','border-color:red;border-width:0.5rem;')
		document.getElementById('avance_'+i).setAttribute('hidden','');
	}
}
function avanzar(){
	document.getElementById('pregunta_'+i).setAttribute('hidden','');
	i=i+1;
	document.getElementById('pregunta_'+i).removeAttribute('hidden');
}

function toque(id) {
	document.getElementById("toque-"+id).removeAttribute("hidden");
	console.log("toque-"+id)
}
function cerrar(id) {
	document.getElementById(id).setAttribute("hidden","")
	// body...
}
function gire_cerrar(id) {
	document.getElementById('gire-'+id).setAttribute("hidden","")
		document.getElementById('gire').setAttribute("hidden","")
	// body...
}
function levante(id) {
	document.getElementById("levante-"+id).removeAttribute("hidden");
	// body...
}
function voltear(id){
	if (id=='anverso') {	
	document.getElementById("anverso").removeAttribute("hidden")
	document.getElementById("reverso").setAttribute("hidden","")
document.getElementById('anverso_uv').setAttribute("hidden","")
document.getElementById("reverso_uv").setAttribute("hidden","")
	document.getElementById("voltear").setAttribute("onclick","voltear('reverso')")
}
if (id=='reverso') {
document.getElementById("anverso").setAttribute("hidden","")
document.getElementById("reverso").removeAttribute("hidden")
document.getElementById('anverso_uv').setAttribute("hidden","")
document.getElementById("reverso_uv").setAttribute("hidden","")
		document.getElementById("voltear").setAttribute("onclick","voltear('anverso')")

}
if (id=='reverso_uv') {
document.getElementById("anverso").setAttribute("hidden","")
document.getElementById("reverso").setAttribute("hidden","")
document.getElementById('anverso_uv').setAttribute("hidden","")
document.getElementById("reverso_uv").removeAttribute("hidden")
		document.getElementById("voltear").setAttribute("onclick","voltear('anverso_uv')")

}
	if (id=='anverso_uv') {	
		document.getElementById("voltear").setAttribute("onclick","voltear('reverso_uv')")
	document.getElementById("anverso").setAttribute("hidden","")
	document.getElementById("reverso").setAttribute("hidden","")
document.getElementById('anverso_uv').removeAttribute("hidden")
document.getElementById("reverso_uv").setAttribute("hidden","")}

}
function uv(n) {
	if (n==1) {
		document.getElementById("anverso").setAttribute("hidden","")
	document.getElementById("reverso").setAttribute("hidden","")
	document.getElementById('anverso_uv').removeAttribute("hidden")
	document.getElementById("voltear").setAttribute("onclick","voltear('reverso_uv')")
	document.getElementById("uv").setAttribute("onclick","uv(2)")
	}
	if (n==2) {
	document.getElementById("anverso").removeAttribute("hidden")
	document.getElementById("reverso_uv").setAttribute("hidden","")
	document.getElementById('anverso_uv').setAttribute("hidden","")
	document.getElementById("voltear").setAttribute("onclick","voltear('reverso')")
	document.getElementById("uv").setAttribute("onclick","uv(1)")
	}
	// body...
}
function gire(id){
	document.getElementById('gire-'+id).removeAttribute("hidden")
	document.getElementById('gire').removeAttribute("hidden")

}

function compruebe(id) {
	document.getElementById('compruebe-'+id).removeAttribute("hidden")
	// body...
}

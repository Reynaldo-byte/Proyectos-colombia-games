function inicio() {
	document.getElementById("info").removeAttribute("hidden");
	document.getElementById("inicio").setAttribute("hidden","");
	// body...
}
function billetes() {
	document.getElementById("billetes").removeAttribute("style");
	document.getElementById("info").setAttribute("hidden","");
	document.getElementById("monedas").setAttribute("hidden","");
}
function monedas(){
		document.getElementById("billetes").setAttribute("style","display:none");
	document.getElementById("info").setAttribute("hidden","");
	document.getElementById("monedas").setAttribute("style","display:grid");
}
function volverB() {
	document.getElementById("billetes_img").setAttribute("hidden","")
	document.getElementById("info").removeAttribute("hidden");
		document.getElementById("billetes").setAttribute("style","display:none");
}
function volverM() {
	document.getElementById("info").removeAttribute("hidden");
	document.getElementById("monedas").setAttribute("style","display:none");
}
function cinco() {document.getElementById("2000").setAttribute("hidden","");
	document.getElementById("5000").removeAttribute("hidden");
	document.getElementById("billetes").removeAttribute("hidden");
	document.getElementById("billetes_img").removeAttribute("hidden");
	document.getElementById("10000").setAttribute("hidden","")
		document.getElementById("2000").setAttribute("hidden","");
	document.getElementById('20000').setAttribute("hidden",'');
document.getElementById('50000').setAttribute("hidden","")
document.getElementById('100000').setAttribute("hidden","")
}
function dos() {
	document.getElementById("10000").setAttribute("hidden","")
	document.getElementById("5000").setAttribute("hidden","");
	document.getElementById("2000").removeAttribute("hidden");
	document.getElementById('20000').setAttribute("hidden","");
document.getElementById('50000').setAttribute("hidden","")
document.getElementById('100000').setAttribute("hidden","")
	document.getElementById("billetes").removeAttribute("hidden");
	document.getElementById("billetes_img").removeAttribute("hidden");
	
}
function diez(){
	document.getElementById("10000").removeAttribute("hidden")
	document.getElementById("5000").setAttribute("hidden","");
	document.getElementById("2000").setAttribute("hidden","");
	document.getElementById('20000').setAttribute("hidden","")
document.getElementById('50000').setAttribute("hidden","")
document.getElementById('100000').setAttribute("hidden","")
	document.getElementById("billetes").removeAttribute("hidden");
	document.getElementById("billetes_img").removeAttribute("hidden");

}
function cincuenta() {
	document.getElementById("10000")
document.getElementById('5000').setAttribute("hidden","")
document.getElementById('2000').setAttribute("hidden","")

document.getElementById('20000').setAttribute("hidden","")
document.getElementById('50000').removeAttribute("hidden");
document.getElementById('100000').setAttribute("hidden","")
	document.getElementById("billetes").removeAttribute("hidden");
	document.getElementById("billetes_img").removeAttribute("hidden");




}
function cien() {
		document.getElementById("10000").setAttribute("hidden","")
document.getElementById('5000').setAttribute("hidden","")
document.getElementById('2000').setAttribute("hidden","")

document.getElementById('20000').setAttribute("hidden","")
document.getElementById('50000').setAttribute("hidden","")
document.getElementById('100000').removeAttribute("hidden");
	document.getElementById("billetes").removeAttribute("hidden");
	document.getElementById("billetes_img").removeAttribute("hidden");
}
function veinte(){
			document.getElementById("10000").setAttribute("hidden","")
document.getElementById('5000').setAttribute("hidden","")
document.getElementById('2000').setAttribute("hidden","")

document.getElementById('20000').removeAttribute("hidden");
document.getElementById('50000').setAttribute("hidden","")
document.getElementById('100000').setAttribute("hidden","")
	document.getElementById("billetes").removeAttribute("hidden");
	document.getElementById("billetes_img").removeAttribute("hidden");
}
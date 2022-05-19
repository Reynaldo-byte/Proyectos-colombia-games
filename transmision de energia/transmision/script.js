var i=1;

function avanzar() {
	var video=document.querySelector("video");
	var button=document.querySelector("button");
	button.innerHTML="Atras";
	button.setAttribute("onclick","location.reload()");
	video.removeAttribute("hidden");
	video.play();
	// body...
}
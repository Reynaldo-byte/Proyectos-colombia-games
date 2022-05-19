var i=33;

var pos=[-70,-65,-60,-55,-50,-45,-40,-35,-30,-30];
function cargar() {

  setInterval(function(){
if(i==39){
 document.getElementById('button').removeAttribute('hidden')
}
if (i>=39) {
  document.getElementById("img_animacion").src="recursos/38.png";

  

}else{
document.getElementById("img_animacion").src="recursos/"+i+".png";
document.getElementById("img_animacion").setAttribute("style","margin-left:"+pos[i-29]+"%");

}
i=i+1;

}
  ,200);}
  function avanzar() {
    document.getElementById('video').removeAttribute('hidden')
    document.getElementById('button').setAttribute('hidden','')
    document.getElementById('img_animacion').setAttribute('hidden','')
  }
  function sound(){
    
  }
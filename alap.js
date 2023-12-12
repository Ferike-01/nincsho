let menuSzoveg=` <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">Nyitolap</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="elso.html">Üdvözlet</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="masodik.html">Második</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`
document.getElementById("menu").innerHTML=menuSzoveg

function kattintas(){
    //alert("Hello")
    let vnev=document.getElementById("vezeteknev").value 
    let knev=document.getElementById("keresztnev").value
    document.getElementById("kiiras").innerHTML=`Üdvözöllek ${vnev} ${knev} !!! `
}
function sarga(){
    document.getElementById("vezeteknev").style.backgroundColor="yellow"
}
function feher(){
  document.getElementById("vezeteknev").style.backgroundColor="white"
}


function sarga2(){
  document.getElementById("keresztnev").style.backgroundColor="yellow"
}
function feher2(){
document.getElementById("keresztnev").style.backgroundColor="white"
}



function nagy(kepneve){
  document.getElementById("nagykep").innerHTML=`<img src="kepek/${kepneve}" alt="" style="width: 400px">`
  document.getElementById("k1.jpg").style.border="2px solid white"
  document.getElementById("k2.jpg").style.border="2px solid white"
  document.getElementById("k3.jpg").style.border="2px solid white"
  document.getElementById(kepneve).style.border="2px solid blue"
}





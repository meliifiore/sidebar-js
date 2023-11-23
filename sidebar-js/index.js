const menutoggle= document.querySelector(".menu-toggle");
const navigation= document.querySelector(".navigation");

menutoggle.onclick = function(){
    navigation.classList.toggle('open')
}

// con queryselectorAll selecionamos todas las clases list//
const list = document.querySelectorAll(".list");
function activarLink(){
    list.forEach((item)=>item.classList.remove('active'))//aca selecciona descontractura el active y lo desactiva en tdos los objetos//
    this.classList.add('active') //aca activa el estado activo cuando hagamos click en el objeto espesifico//
    
}
list.forEach((item)=>item.addEventListener('click',activarLink))
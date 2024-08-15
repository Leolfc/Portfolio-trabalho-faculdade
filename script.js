
let menuBurguer = document.getElementById('menu')

function clickMenu(){
  if(menuBurguer.style.display == 'flex')
    menuBurguer.style.display = 'none'
else{
  menuBurguer.style.display= 'flex'
}
}

 clickMenu()

 function mostrarMenu(){
  if(window.innerWidth >= 768){
    menuBurguer.style.display = 'flex'
  }else{
    menuBurguer.display = 'none'
  }
 }
 mostrarMenu()
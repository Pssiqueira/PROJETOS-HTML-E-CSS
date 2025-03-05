var nav = document.getElementById('nav')
var lista = document.getElementById('lista')
nav.addEventListener("click", ()=>{
    if(lista.style.display == 'block'){
        lista.style.display = 'none'
    }else{
        lista.style.display = 'block'
    }
    
})
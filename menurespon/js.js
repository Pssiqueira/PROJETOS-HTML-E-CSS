var nav = document.getElementById('nav')
var lista = document.getElementById('lista')
nav.addEventListener("click", ()=>{
    if(window.innerWidth < 768){
        if(lista.style.left == '10px'){
            lista.style.left = '-100px'
        }else{
            lista.style.left = '10px'
        }
    }
})


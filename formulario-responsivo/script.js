var mail = document.getElementById('mail')
var label = document.querySelectorAll("label")

label.forEach(function(elemento, indice){
elemento.innerHTML = elemento.innerText.split(' ').join('')
})


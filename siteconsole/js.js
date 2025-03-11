var navmain = document.getElementById('nav-mai')
var down = document.getElementById('dow')
var sear = document.getElementById('sea')
function menu(){
    down.classList.add('slide')
    sear.classList.add('slide2')
    if(navmain.style.left == '-200px'){
        navmain.style.left = '0'
    }else{
        navmain.style.left = '-200px'
        down.classList.remove('slide')
        sear.classList.remove('slide2')
    }
    
}
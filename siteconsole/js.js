var navmain = document.getElementById('nav-main')
var down = document.getElementById('down')
var sear = document.getElementById('sear')
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
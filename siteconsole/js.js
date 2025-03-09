var navmain = document.getElementById('nav-main')
function menu(){
    if(navmain.style.left == '-200px'){
        navmain.style.left = '0'
    }else{
        navmain.style.left = '-200px'
    }
}
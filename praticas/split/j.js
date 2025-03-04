function fib(a){
    var ini = 0
    var seg = 1
    for(var i = 2; i < a;i++){
        var seq = seg + ini
        console.log(seq)
        seg = seq 
        ini = seg - ini 
    
    }

}
console.log(fib(10))
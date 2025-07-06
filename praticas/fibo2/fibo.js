var p = 0
var s = 1
for(var i = 2; i<=10; i++){
    var soma = p + s
    console.log(soma)
    s = soma
    p = s - p
}


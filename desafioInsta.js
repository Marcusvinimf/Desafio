let array1 = [1, 2, 3]
let array2 = [12, 35, 9, 56, 24]

function feito(x) {
    
    let novoArray = [x[x.length-1]];
    
    for(let i=1; i<(x.length-1); i++){
        novoArray.push(x[i])
    }
    novoArray.push(x[0])
    return novoArray;
}

console.log(feito(array1));
console.log(feito(array2));
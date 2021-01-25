function dec2bin(a,b){
    let dec = a+b
    return (dec >>> 0).toString(2);
}

console.log(dec2bin(4,2));    
console.log(dec2bin(-1,1));  
console.log(dec2bin(256,4657));  
console.log(dec2bin(-256,15));
console.log(dec2bin(5,1))
console.log(dec2bin(-4,-1))
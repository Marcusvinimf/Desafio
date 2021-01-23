function arrayDiff(a, b) {
    
    let newArray = [];

    for(let i=0; i<a.length; i++)
    {
        let idx = b.indexOf(a[i]);

        if(a[i] != b[idx]) newArray.push(a[i]);
    }

    return newArray;
}

console.log(arrayDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [1, 2, 5, 7]))
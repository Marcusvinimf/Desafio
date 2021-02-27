function twoSum(numbers, target) {

    let newArray = [];

    for(let i=0; i<numbers.length -1; i++)
    {
        let outro = 1;
        let our = numbers[i] + numbers[outro];
        if(our == target)
        {
            newArray.push([numbers[i]] + [numbers[outro]]);
        }else{
            outro++
        }
    }

    return newArray;
}

let um  = [1, 2, 3];
let dois = 4;

console.log(twoSum(um, dois))
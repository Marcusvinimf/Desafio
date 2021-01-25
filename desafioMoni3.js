let list0 = ([])
// returns 
let list1 = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]
// returns 'Bart, Lisa & Maggie'
let list2 = ([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
let list3 = ([ {name: 'Bart'} ])
// returns 'Bart'
let list4 = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'} ])
let list5 = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Merge'} ])

function list(names){

    if(names.length == 0) return ""
    for(let i=0; i<names.length; i++)
    {
        if(names.length == 1) {return names[0].name}
        if(names.length == 2) {return `${names[0].name} & ${names[1].name}`}
        if(names.length == 3) {return `${names[0].name}, ${names[1].name} & ${names[2].name}`}
        else
        {
            for(let j=0; j<names.length -3; j++){
                let ultimos = `${names[names.length -2].name}, ${names[names.length -1].name} & ${names[names.length].name}`
                let primeiros = `${names[j].name}, `
                console,log(primeiros)
                return primeiros + ultimos;
            }
        }
    }
}

// console.log(list(list1));
// console.log(list(list2));
// console.log(list(list3));
// console.log(list(list0));
console.log(list(list5));
console.log(list(list4));
let list7 = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Merge'}, {name: 'Amanda'}, {name: 'Marcus'} ])

let list6 = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Merge'}, {name: 'Amanda'} ])

let list5 = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Merge'} ])

let list4 = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'} ])

let list3 = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

let list2 = ([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

let list1 = ([ {name: 'Bart'} ])
// returns 'Bart'

let list0 = ([])
// returns ''

function list(names){
    if (names.length == 0){
        return ""
    }

    if (names.length == 1){
        return names[0].name
    }

    if (names.length == 2){
        return names[0].name + " & " + names[1].name
    }

    if (names.length == 3){
        return names[0].name + ", " + names[1].name + " & " + names[2].name
    }

    if (names.length >= 4){

        let arrNames = []
        for (let i = 1; i < names.length-2; i++){
            arrNames.push(`${names[i].name}`)
        }

        let stringNames = arrNames.toString().replace(/,/g,", ")

        let firstName = names[0].name
        let lastName = names[names.length-1].name
        let secondToLastName = names[names.length-2].name
        let twoLastNames = secondToLastName + " & " + lastName

        let allNames = firstName + ", " + stringNames + ", " + twoLastNames

        return allNames
    }
}

console.log(list(list7))
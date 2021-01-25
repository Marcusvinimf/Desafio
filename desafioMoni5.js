let friend1 = ["Ryan", "Kieran", "Mark"];

function friend(friends){
    let nomes = [];
    for(let i=0; i<friends.length; i++)
        if(friends[i].length == 4) nomes.push(friends[i]);
    return nomes;
}
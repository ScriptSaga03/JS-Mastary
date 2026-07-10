// create an array
let team = ["Kohli", "Rohit", "Bumrah"];
console.log(team)

/*
read value  / access value
Array se value nikalne ke liye hum square brackets [] ke andar uska index number likhte hain.
*/

console.log(team[0]);  // output kohli (first player)
console.log(team[2]);  // output bumrah [last player]

// output undefiend :  agr esi index maang li jo hai hi nhi to undefiend
console.log(team[5])

/*
2. Update / Re-assign (Value badalna)
Kisi specific index par jaakar hum purani value ko nayi value se replace kar sakte hain.
*/

team[1] = "Dhoni"
console.log(team)



// create / insert value

// aakhir mai value dalna ho to 
team.push('Ronaldo');


// shuruat mai value dalni ho to
team.unshift('Yamal');
console.log(team)


// delete value nikalna ya hatana ho 
// pop : last element remove kr deta and return bhi krta hai 
let removePlayer =  team.pop();
console.log(team);
console.log(removePlayer)


// starting se nikalna ho to shift 
let removeFirstPlayer = team.shift();
console.log(team);
console.log(removeFirstPlayer)



// Task
let fruits = ["Apple", "Banana"];
const addFruitsInLast = (list, item ) =>{
    list.push(item);
    return list;
}

console.log('add item :' , addFruitsInLast(fruits, "Grapes"));

console.log('add item :' , addFruitsInLast(fruits, "Watermelon"));



// add fruits in starting
const addFruitsInFirst = (list, item )  => {
     list.unshift(item);
     return list
}


console.log('add item : ', addFruitsInFirst(fruits, "strawberry" ));


// update item 
const updateFruitList = (item , index, value) =>{
    item[index] = value;
    return item
}

console.log('update fruit list: ', updateFruitList(fruits, 3,"ice-cream"));


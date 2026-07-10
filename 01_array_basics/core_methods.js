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



// build in method


/*
1. splice() (Array ke beech mein se Kuch bhi karo — Delete, Insert, ya Update)
Yeh array ka sabse powerful method hai. Yeh original array ko badal deta hai. Iska formula hota hai:
array.splice(start_index, delete_count, new_item1, new_item2...)

Scenario A: Beech se element delete karna

JavaScript

*/
let actors = ["Shahrukh", "Salman", "Aamir", "Hrithik"];
// Index 1 (Salman) se shuru karo, aur 1 hi element delete karo
actors.splice(1, 1); 
console.log(actors);


/*Scenario B: Beech mein naya element insert karna

JavaScript
// Index 2 par jaao, 0 element delete karo (matlab kuch mat hatao), aur "Akshay" daal do

*/

actors.splice(2, 0, "Akshay");
console.log(actors);



/*


2. slice() (Tukda nikalna — Non-Mutating)
Jaise pizza ka ek slice nikalte hain, waise hi yeh array ka ek hissa kaat kar naya array deta hai. Yeh original array ko haath bhi nahi lagata.
array.slice(start_index, end_index) (Note: end_index waala element shamil nahi hota)

JavaScript
let numbers = [10, 20, 30, 40, 50];
// Index 1 se shuru karo aur index 4 se pehle tak nikal lo (yani index 1, 2, 3)
let chunk = numbers.slice(1, 4);

console.log(chunk);   // Output: [20, 30, 40]
console.log(numbers); // Output: [10, 20, 30, 40, 50] (Original safe hai!)
3. concat() (Arrays ko aapas mein jodna)
Yeh do ya do se zyada arrays ko jod kar ek naya array bana deta hai.

JavaScript
let veg = ["Aloo", "Gobhi"];
let nonVeg = ["Chicken", "Mutton"];

let allFood = veg.concat(nonVeg);
console.log(allFood); // Output: ["Aloo", "Gobhi", "Chicken", "Mutton"]
4. includes() (Check karna ki element hai ya nahi)
Yeh check karta hai ki array ke andar koi value maujood hai ya nahi. Yeh hamesha true ya false deta hai (Jaise objects mein hasOwnProperty tha).

JavaScript
let tools = ["VS Code", "Git", "Docker"];

console.log(tools.includes("Git"));    // Output: true
console.log(tools.includes("Python"));



*/


// task 2 (method: splice , slice, includes, concat);
let techStack = ["HTML", "CSS", "Java", "Python"];

const removeItem = (arr,strInd, endInd) => {
    arr.splice(strInd, endInd);
    return arr;
}

console.log('remove item :' ,removeItem(techStack, 2,1));


// find item 
const findTech = (arr, item ) =>{
   return  arr.includes(item);

}
console.log("find item : ", findTech(techStack,'react'));


// chuck 
const getChuck = (arr, start, end) =>{
   return  arr.slice(start, end);
}

console.log('chunk :', getChuck(techStack, 0,2))




/*
5. join() (Array ko Text/String banana)
Yeh array ke saare elements ko aapas mein jod kar ek single string (text) bana deta hai. 
Aap brackets ke andar bata sakte ho ki beech mein kya lagana hai (jaise comma, space, ya dash)

*/


let myWords = ["My", "name", "is", "Mehtab"];
let sentence1 = myWords.join(" ");
console.log(sentence1)


/*
6. reverse() (Ulta kar dena — Mutating)
Yeh array ka order bilkul ulta (piche se aage) kar deta hai. Dhayan rahe, yeh original array ko badal deta hai.

*/

let order  = ['first', 'second', 'third'];
order.reverse();
console.log(order);


/*
7. sort() (Tartib mein lagana / Alphabetical Order — Mutating)
Yeh array ke elements ko alphabetical order (A to Z) mein arrange kar deta hai. Yeh bhi original array ko badal deta hai.
(Note: Numbers ke liye iska ek chota sa rule alag hota hai jo hum aage dekhenge, abhi text par samajhte hain).

*/

let fruitsList = ["Banana", "Apple", "Mango", "Cherry"];
fruitsList.sort();

console.log(fruitsList);



/*
8. indexOf() aur lastIndexOf() (Position/Index dhoondhna)
indexOf(): Yeh check karta hai ki koi element array mein pehli baar kaunse index par aaya hai. Agar element array mein nahi hai, toh yeh -1 deta hai.
lastIndexOf(): Agar ek hi element array mein baar-baar aaya hai, toh yeh batata hai ki woh aakhiri baar kaunse index par aaya tha.
*/


let repeatList = ["Aloo", "Gobhi", "Matar", "Aloo", "Paneer"];

// Pehli baar "Aloo" kahan hai?
console.log(repeatList.indexOf("Aloo")); // Output: 0

// Aakhiri baar "Aloo" kahan hai?
console.log(repeatList.lastIndexOf("Aloo")); // Output: 3

// Jo cheez hai hi nahi:
console.log(repeatList.indexOf("Chicken"));



let rawSkills = ["Git", "HTML", "CSS", "Docker", "HTML"];

const findLastIndex = (arr, item) => {
    return arr.lastIndexOf(item)
}

console.log('find html last index :' , findLastIndex(rawSkills, 'HTML'));

const sortAndModifiedList = (arr) =>{
   return  [...arr].sort().join("-")
}
console.log('sort and modified list :', sortAndModifiedList(rawSkills));
const isExistSkill = (arr, item) => {
    let index = arr.indexOf(item);
    
    if (index > -1) {
        return `Skill found at index: ${index}`;
    } else {
        return "Skill not found!";
    }
}

console.log(isExistSkill(rawSkills, "React"));  // Output: Skill not found!
console.log(isExistSkill(rawSkills, "Docker"));



/*
1. Array.isArray() (Kya yeh sach mein array hai?)
JavaScript mein jab aap typeof [] karte ho, toh woh "object" batata hai. Isliye yeh pata karne ke liye ki koi cheez array hai ya nahi, hum iska use karte hain. Yeh true ya false deta hai.
*/

let myArr = [1, 2, 3];
let myObj = { name: "Mehtab" };

console.log(Array.isArray(myArr)); // Output: true
console.log(Array.isArray(myObj)); // Output: false



/*
2. at() (Negative Indexing ki power)
Pehle agar hume array ka aakhiri element chahiye hota tha, 
toh hume arr[arr.length - 1] likhna padta tha. at() ne ise aasan kar diya.
 Isme aap negative numbers bhi daal sakte ho, -1 ka matlab aakhiri element, -2 ka matlab piche se dusra.
*/


let heroes = ["Ironman", "Batman", "Thor"];

console.log(heroes.at(0));  // Output: Ironman
console.log(heroes.at(-1));


/*
3. flat() (Khichdi array ko seedha karna)
Agar aapke paas ek array ke andar aur arrays hain (nested arrays), 
toh flat() un sabko nikaal kar ek single normal array bana deta hai. Brackets mein aap depth (kitne level andar jaana hai) batate ho.

*/
let messyArr = [1, [2, 3], [4, [5, 6]]];

console.log(messyArr.flat(1)); // Output: [1, 2, 3, 4, [5, 6]] (1 level flat hua)
console.log(messyArr.flat(2)); // Output: [1, 2, 3, 4, 5, 6] (Pura flat ho gaya!)



/*
4. toString() (Chupchaap string badalna)
Yeh array ke saare elements ko comma , se jodkar ek simple string bana deta hai. Yeh join(",") ki tarah hi kaam karta hai, par isme aap separator badal nahi sakte.
*/

let items = ["Aloo", "Pyaz", "Tamatar"];
console.log(items.toString());
/*
5. copyWithin() (Array ke andar hi copy-paste chalana — Mutating)
Yeh thoda kam use hota hai par bade data mein kaam aata hai. Yeh array ke hi ek hisse ko copy karke, usi array ke dusre hisse par overwrite kar deta hai, bina size badle.
copyWithin(target_index, start_index, end_index)
*/
let chars = ["A", "B", "C", "D", "E"];
// Index 0 par paste karo... woh maal jo index 3 se shuru ho raha hai
chars.copyWithin(0, 3); 
console.log(chars); // Output: ["D", "E", "C", "D", "E"] ("D", "E" copy hokar aage aa gaye)





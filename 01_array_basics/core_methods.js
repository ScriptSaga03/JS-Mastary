
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

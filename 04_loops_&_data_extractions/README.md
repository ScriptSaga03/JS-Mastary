1. for...of Loop (Har item par direct loop chalana)
Puraane for(let i=0; i<arr.length; i++) se bohot zyada clean aur aasan tareeqa hai jab aapko index ki chinta na ho aur sirf values chahiye hon.

JavaScript
let tools = ["Git", "Docker", "VS Code"];

for (let tool of tools) {
    console.log("Tool:", tool);
}
2. entries() aur keys() (Index aur Value sath mein ya alag se)
keys(): Yeh array ke saare indexes ka ek iterable deta hai.

entries(): Yeh index aur value dono ki jodiya ([index, value]) banata hai.

JavaScript
let fruits = ["Apple", "Banana"];

// entries() ko for...of ke sath chalana
for (let [index, item] of fruits.entries()) {
    console.log(`Index ${index} par hai: ${item}`);
}
// Output:
// Index 0 par hai: Apple
// Index 1 par hai: Banana
3. Array.from() (Kisi bhi cheez ko Array banana)
Jab aapke paas koi string ya DOM nodes (HTML elements) hon aur unko ek array mein convert karna ho:

JavaScript
let nameStr = "MEHTAB";
let charArray = Array.from(nameStr);

console.log(charArray); // Output: ['M', 'E', 'H', 'T', 'A', 'B']
4. Spread (...) vs Rest (...) Operator
Teeno dots ... ka kaam context ke hisab se badalta hai:

Spread (Bikherna / Expand): Array ko khol kar uski values ko bahar nikaalta hai.

JavaScript
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
Rest (Ikatha karna / Gather): Multiple values ko samet kar ek array bana deta hai.

JavaScript
let [first, second, ...baakiSab] = [10, 20, 30, 40, 50];
console.log(first);    // 10
console.log(baakiSab);

## 📦 Bucket 3: Modern Non-Mutating Methods (ES2023+)

JavaScript ke purane methods (`sort()`, `reverse()`, `splice()`) original array ko permanently badal (mutate kar) dete hain. Is functional side-effect ko khatam karne ke liye, modern JavaScript ne safe, **non-mutating** alternatives diye hain jo original data ko secure rakh kar ek naya modified array return karte hain.

### 🛠️ Key Methods Covered

1. **`toSorted()`**: Original array ko chhue bina contents ko sort karke naya array deta hai.
2. **`toReversed()`**: Bina core structure badle order ko ulta (reverse) kar deta hai.
3. **`toSpliced()`**: Bina memory reference kharab kiye elements ko beech se add/remove/replace karta hai.
4. **`with(index, value)`**: Kisi ek index ki value ko safely overwrite karke naya array clone karta hai.

---

### 💻 Practical Implementation & Challenge Code

Neeche iska optimized code diya gaya hai jo reusability aur strict non-mutation rules ko follow karta hai:

```javascript
// Dataset
let fastFood = ["Burger", "Pizza", "Samosa", "Sandwich"];

/**
 * Challenge 1: getReversedMenu
 * Safely reverses the menu array without modifying the source data.
 * @param {Array} arr 
 * @returns {Array} A new reversed array
 */
const getReversedMenu = (arr) => {
    return arr.toReversed();
};

console.log("--- 1. toReversed() Test ---");
console.log("Original Before:", fastFood);
console.log("Reversed Menu:  ", getReversedMenu(fastFood));
console.log("Original After: ", fastFood); // Remains safe!
console.log("\n");


/**
 * Challenge 2: replaceItemSafely
 * Dynamically replaces an element at a specific index using the modern .with() method.
 * @param {Array} arr 
 * @param {number} index 
 * @param {string} value 
 * @returns {Array} A cloned array with updated value
 */
const replaceItemSafely = (arr, index, value) => {
    return arr.with(index, value);
};

console.log("--- 2. with() Test ---");
console.log("Replaced Menu:  ", replaceItemSafely(fastFood, 2, "Momos"));
console.log("Original Check: ", fastFood); // Verified unchanged!
console.log("\n");


/**
 * Challenge 3: removeMiddleItems
 * Removes specific items from the middle using non-mutating slicing logic.
 * @param {Array} arr 
 * @returns {Array} Cloned array without elements at index 1 and 2
 */
const removeMiddleItems = (arr) => {
    // Index 1 se shuru karke 2 elements ("Pizza", "Samosa") delete karega
    return arr.toSpliced(1, 2);
};

console.log("--- 3. toSpliced() Test ---");
console.log("Spliced Menu:   ", removeMiddleItems(fastFood));
console.log("Original Final: ", fastFood); // 100% Immutable!

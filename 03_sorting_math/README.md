1. Alphabetical vs Numeric Sort (Farq kya hai?)
JavaScript ka default .sort() numbers ke sath pagalpan karta hai. Wo numbers ko strings (text) samajh kar sort karta hai.

JavaScript
let badNums = [10, 5, 80, 2];
badNums.sort(); 
console.log(badNums); // Output: [10, 2, 5, 80] <-- Galat hai! 
// Kyunki string mein "10" ka "1", "2" se pehle aata hai.
Sahi Tareeqa (Numeric Sort):
Hume sort ke andar ek compare function dena padta hai: (a, b) => a - b.

Agar a - b negative hai, toh a pehle aayega.

Agar positive hai, toh b pehle aayega.

JavaScript
let goodNums = [10, 5, 80, 2];

// Ascending Order (Chote se Bada)
goodNums.sort((a, b) => a - b); 
console.log(goodNums); // Output: [2, 5, 10, 80] ✓

// Descending Order (Bade se Chota)
goodNums.sort((a, b) => b - a); 
console.log(goodNums); // Output: [80, 10, 5, 2] ✓
2. Random Sort (Shuffling / Array ko mix karna)
Agar hume kisi array ke items ko randomly upar-neeche karna ho (jaise kisi game mein cards shuffle karna), toh hum Math.random() - 0.5 ka use karte hain.

JavaScript
let cards = ["A", "B", "C", "D"];
cards.sort(() => Math.random() - 0.5);
console.log(cards); // Har baar alag random order aayega!
3. Math.min() aur Math.max() (Sabse chota aur bada)
JavaScript ke paas pure Math objects hain jo numbers par kaam karte hain. Lekin yeh array seedhe nahi lete, inke aage hume Spread Operator (...) lagana padta hai taaki array khul sake.

JavaScript
let prices = [200, 500, 100, 900];

console.log(Math.max(...prices)); // Output: 900
console.log(Math.min(...prices)); // Output: 100
4. Home-made Min/Max (Bina Math object ke custom logic)
Kabhi-kabhi interviewers bolte hain: "Math.max use mat karo, khud ka logic likho loop chala kar." Iska tareeqa yeh hota hai ki hum pehle number ko sabse bada/chota maan lete hain, fir pure array se compare karte hain.

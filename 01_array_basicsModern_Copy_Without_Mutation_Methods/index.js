


//challange

let fastFood = ["Burger", "Pizza", "Samosa", "Sandwich"];

/*
Ek function getReversedMenu(arr) banaye jo toReversed() se list ko ulta karke return kare.

Ek function replaceItemSafely(arr, index, value) banaye jo with() ka use karke kisi bhi index ki value ko safely naye item se replace karke naya array de.

Ek function removeMiddleItems(arr) banaye jo toSpliced() ka use karke beech ke do items ("Pizza" aur "Samosa") ko remove karke naya array de.


*/



const getReversedMenu = arr => {
    return arr.toReversed();
};
console.log(fastFood);
console.log('reversed :',getReversedMenu(fastFood));
console.log(fastFood);

const replaceItemSafely = arr => {
    return arr.with(2, 'Momos')
}
console.log('replace items : ', replaceItemSafely(fastFood));



const removeMiddleItems  = arr => {
    return arr.toSpliced(1,2)
};

console.log(removeMiddleItems(fastFood))

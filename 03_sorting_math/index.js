
let productPrices = [120, 45, 850, 310, 99];

// getSortedPrices(arr): Jo safely (bina original array badle yaani toSorted use karke) prices ko bade se chote (Descending) order mein return kare.

// getExtremePrices(arr): Jo ek object return kare jisme sabse sasta (min) aur sabse mehanga (max) price ho, Math.min aur Math.max ka use karke. Example output: { sasta: 45, mehanga: 850 }.

// [BONUS INTERVIEW CHALLENGE]: Ek function banao findCustomMax(arr). Isme Math.max use nahi karna. Aapko ek simple variables aur loop ya logic use karke array ka sabse bada number dhoondh kar return karna hai.


const getSortedPrices = (arr) =>{
    if(!Array.isArray(arr) || arr.length === 0){
        return 'error: this is not a valid value!'
    }else{
        return arr.toSorted((a, b) =>  b - a)
    }
}
console.log('desc order:  ', getSortedPrices(productPrices))



const getExteremePrices = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Error: Invalid array!";
    }
    const expensive = Math.max(...arr);
    const cheap  = Math.min(...arr);

    return {
        max:  expensive,
        min: cheap
    }
}
console.log('extereme Prices : ', getExteremePrices(productPrices))
const findCustomMax = arr =>{
    let max = arr[0]

    for(let i = 0; i <  arr.length; i++){
        if(arr[i] >  max) {
            max = arr[i]
        }
    }
    return {
        max
    }
}

console.log('custom max finder: ', findCustomMax(productPrices))


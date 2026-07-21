
let devSkills = ["HTML", "CSS", "JS", "Node", "MongoDB"];

const printFormattedSkills = arr =>{
    // for(let i = 1  ; i < arr.length; i++){
    //    console.log(`index ${i} : and skill: ${arr[i]}`)
    // }

    for(let [ind, item ] of arr.entries()) console.log(`index: ${ind} 
        skill: ${item}
        `)
}

console.log(printFormattedSkills(devSkills));



const extractCoreAndRest = arr => {
   const [core, core2, ...rest] = arr
   return {
    core: [core, core2],
    rest
   }
}
console.log(extractCoreAndRest(devSkills))

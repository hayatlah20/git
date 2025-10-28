const prompt = require("prompt-sync")()

let array = [2, 3, 5, 3, 2, 5, 3]
let compte=0

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[i] == array[j]){
            compte++
        }
    }
    if (compte % 2 != 0) {
        console.log("Le nombre impair est :", array[i])
        break 
    }
}
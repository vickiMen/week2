const StringFormatter = function() {

    const capitalizeFirst = string => string[0].toUpperCase() + string.slice(1).toLowerCase()
    
    const skewerCase = string => string.replace(' ', '-')
    
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }   
}

const formatter = StringFormatter()

let dorothy = formatter.capitalizeFirst("dorothy") //should print Dorothy
console.log(dorothy)
let blueBox = formatter.skewerCase("blue box") //should print blue-box
console.log(blueBox)

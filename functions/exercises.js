// let logData = function(data) {
//   console.log(data)
// }
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };

//   displayData(alert, logData, "I like to party")


// const arrow = (x,y,z) => x+y+z


const capitalize = string => string[0].toUpperCase() + string.slice(1).toLowerCase()
// let firstLetter = string[0].toUpperCase();
// let restOfTheWord = string.slice(1).toLowerCase();
// return firstLetter+restOfTheWord //

let bob = capitalize("bOb") // returns Bob
let taylor = capitalize("TAYLOR") // returns Taylor
let felishia = capitalize("feliSHIA")

console.log(bob, taylor, felishia)


// const determineWeather = temp => {
//   if(temp > 25){
//     return "hot"
//   }
//   return "cold"
// }

// const commentOnWeather = temp => { x = ('it\'s ' + determineWeather(temp)); return x}

// a = commentOnWeather(30) //returns "It's hot"
// b = commentOnWeather(22) //returns "It's cold"


function celebrityIDCreator (theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
          return function () {
              return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
          } () // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
      } (i); // immediately invoke the function passing the i variable as a parameter
  }

  return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
 console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs [1]; console.log(cruiseID.id); // 101
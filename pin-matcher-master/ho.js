function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
const x = Math.floor(Math.random() * (1000 - 99)) + 99; 
console.log (x);


// function myFunctionRandom(min, max) {
//     //     min = Math.ceil(min);
//     //     max = Math.floor(max);
//     //     return Math.floor(Math.random() * (max - min)) + min; 
//     //   }
//     //   var x = Math.floor(Math.random() * (9999 - 1000)) + 1000; 
//     //   document.getElementById("demo").value = x;
// }
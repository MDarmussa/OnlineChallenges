// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

//Solution

function extractMiddle(str) {

     var position;
     var length;

     if(str.length % 2 == 1) {
         position = str.length / 2;
         length = 1;
     } else {
         position = str.length / 2 - 1;
         length = 2;
     }

     return str.substring(position, position + length)
 }

 console.log(extractMiddle("mtfq"));


 
//length/2 -> 
// function getMiddle(s) {
//      var length = s.length;
//      var middle = length / 2;
//      let floor = Math.floor(middle); // floor = Math.floor(s.length/2)

//      const middleNumber = Number(middle);
//      const floorNumber = Number(floor);
//      const mathNumber = middleNumber - floorNumber; // mathNumber = Number(length/2) - Number(math.floor(length/2))

//      if (mathNumber > 0) {
//           let finalMiddle = s[floorNumber];
//           return finalMiddle;
//      } else {
//           let finalMiddle1 = s[floorNumber - 1]; // finalMiddle = s[Number(Math.floor(length/2)-1)]
//           let finalMiddle2 = s[floorNumber];
//           return finalMiddle1 + finalMiddle2;
//      }
// }
// console.log(getMiddle('school'))



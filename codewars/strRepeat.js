// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//define a function takes two parameter, int and str
//define a str called strCounter holder - strCounter = ""
// for loop that count from 0 to int
// strCounter += i;
// return strCounter

function repeatStr (num, str) {
     strCounter = "";
     for (i = 0; i < num; i++) {
          strCounter += str;
     }
     return strCounter;
}
console.log(repeatStr(2, 'Moe '))
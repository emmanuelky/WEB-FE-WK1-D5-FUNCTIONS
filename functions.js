/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const area = function (l1, l2) {
    return l1 * l2
}
area(2, 2) // output 4*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2nd METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*function area(l1, l2) {
    return l1 * l2
}
area(3, 4) // output 12*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const area = (l1, l2) => l1 * l2;

area(2, 4)// output 8



/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const crazySum = function (num1, num2) {

    if (num2 === num2) {
        return (num1 + num2) * 3
    } else {
        return num1 + num2
    }

}
crazySum(2, 2) // 12
crazySum(2, 3) // 5 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const crazySum = (num1, num2) => num1 === num2 ? (num1 + num2) * 3 : num1 + num2;

console.log(crazySum(2, 2)) // output 12
console.log(crazySum(2, 4)) // output 6

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const crazyDiff = function (numb) {
    if (numb > 19) {
        return Math.abs(numb - 19) * 3
    }
    else {
        return Math.abs(numb - 19)
    }

}
console.log(crazyDiff(2))


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2nd METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


function crazyDiff (numb) {
    if (numb > 19) {
        return Math.abs(numb - 19) * 3
    }
    else {
        return Math.abs(numb - 19)
    }

}
console.log(crazyDiff(2))

*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//



const crazyDiff = (n) => n > 19 ? Math.abs(n - 19) * 3 : Math.abs(n - 19)

console.log(crazyDiff(2))




/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const boundary = function (n) {
    if (n >= 20 && n <= 100) {
        return true
    } else if (n === 400) {
        return true
    } else {
        return false
    }
}
boundary(50) // true
boundary(400) // true
boundary(500) // false*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2nd METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(50)) // true
console.log(boundary(400)) // true
console.log(boundary(500)) // false*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


const boundary = (n) => (n >= 20 && n <= 100) || n === 400 ? true : false

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const strivify = function (x) {
    let str = "Strive "
    let addWord = x
    let result = str + "" + addWord
    let newResult = result.replace("Strive", "");

    console.log(newResult)
    return
}

strivify("hard")
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const strivify = (str) => str.startsWith("strive") ? str : "strive " + str;

console.log(strivify("strive hard"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*

const check3and7 = function (num) {
    return num % 3 === 0 || num % 7 === 0 ? true : "Not a multiple of 3 or 7";
    
}

check3and7(20) // "Not a multiple of 3 or 7"
check3and7(21) // true   */


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const check3and7 = (num) => num % 3 === 0 || num % 7 === 0 ? `${num} is a multiple of 3 or 7` : `${num} is a not multiple of 3 or 7`;

console.log(check3and7(21))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const reverseString = function (str) {
    let newStrr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStrr += str[i]
    }
    return newStrr
}
console.log(reverseString("hello"))*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const reverseString = (str) => str.split("").reverse().join("");


console.log(reverseString("John"))


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1st METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const upperFirst = function (upperstring) {

    let capLetter = upperstring.toLowerCase().split(' ')

    for (i = 0; i < capLetter.length; i++) {
        capLetter[i] = capLetter[i].charAt(0).toUpperCase() + capLetter[i].substring(1)
    }

    return capLetter.join(' ')
}

console.log(upperFirst("leaRn tO rEAd wELL"))*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)

console.log(upperFirst("facebook"))


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1ST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

/*const cutString = function (cutstrn) {
    return firsLastStr = cutstrn.slice(1, -1)

}
console.log(cutString("loading"))*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEST METHOD SOLUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const cutString = (str) => str.slice(1, -1);

console.log(cutString("React"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (n) {
    let arr = []

    for (let i = 0; i <= n; i++) {
        const randomNum = Math.floor(Math.random() * 10)
        arr.push(randomNum)
    }
    return arr
}

console.log(giveMeRandom(15))

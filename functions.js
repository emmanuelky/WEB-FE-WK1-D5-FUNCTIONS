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

const area = function (l1, l2) {
    return l1 * l2
}
area(2, 2) // output 4

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (a, b) {
    let sum = a + b
    if (a === b) {
        return sum * 3
    } else {
        return a + b
    }
}
crazySum(2, 2) // 12
crazySum(2, 3) // 5

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (numb) {
    let computNumMinus = numb - 19
    let ninethNumbMinu = 19 - numb
    if (numb > 19) {
        return computNumMinus * 3
    }
    else if (numb < 19) {
        return ninethNumbMinu
    }
    return
}
crazyDiff(20) //output 3
crazyDiff(10) // output 9

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
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
boundary(500) // false



/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (x) {
    let str = "Strive "
    let addWord = x
    let result = str + "" + addWord
    let newResult = result.replace("Strive", "");

    console.log(newResult)
    return
}

strivify("hard")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (num) {
    let mulThreSevn = num % 3 === 0 || num % 7 === 0 ? true : "Not a multiple of 3 or 7";
    console.log(mulThreSevn)
    return
}

check3and7(20) // "Not a multiple of 3 or 7"
check3and7(21) // true

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (s) {

    for (let i = 0; i < i.length / 2; i++) {
        let revStr = s[i]
        s[i] = s[s.length - i - 1]
        s[s.length - i - 1] = revStr
    }
    return
}

reverseString("come")



/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/



/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
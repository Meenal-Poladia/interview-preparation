/* Problem 1: Creating a simple form
const formElement = document.querySelector('form');
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");

const submitHandler = (e) => {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
}
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandler(e)
})
 */

/* Problem 2: Displaying squares of number 1 to 10
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");
const container = document.getElementById("container");

function calculate () {
    clear();
    for(let i = 1; i <= 10; i++) {
        const results = document.createElement("li");
        container.append(results);
        results.innerText = `${i} * ${i} = ${i * i}`
    }
}

function clear () {
    container.innerText = ""
}

calculateButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);
 */

/* Problem 3: Using an array in a sentence
const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < cats.length; i++) {
    if(i === cats.length - 1) myFavoriteCats += `and ${cats[i]}.`;
    else myFavoriteCats += `${cats[i]}, `
}

prints: My cats are called Pete, Biggles and Jasmine.
console.log(myFavoriteCats); //
 */

/* Problem 4: Search the name and find out the number from the array
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');


btn.addEventListener("click", () => {
    const searchTerm = input.value.toLowerCase();
    for (const contact of contacts) {
        const strings = contact.split(":");
        if(searchTerm === strings[0].toLowerCase()) {
            para.textContent = `${strings[0]}'s number is ${strings[1]}`;
            break;
        } else {
            para.textContent = "No contact Found"
        }
    }
})
 */

/* Problem 5: Search the name and display the number from array of objects
const name = 'Tina';
const para = document.createElement('p');
const section = document.querySelector('section');
section.appendChild(para);

const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

const result = phonebook.find(item => name.toLowerCase() === item.name.toLowerCase())
para.textContent = result ? `${result.name}'s number is ${result.number}.` : `Contact not found.`
 */

/* Problem 6: Printing all the prime numbers from 2 to 500 in a descending order
const para = document.createElement('p');
// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);

function isPrime(num) {
    for(let  i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

// Add your code here
for (let i = 500; i >= 2; i--) {
    const prime = isPrime(i);
    if (prime) {
        para.textContent += `${i}, `;
    }
}

const lastIndexOf = para.textContent.lastIndexOf(",");
const result = para.textContent.split("");
result[lastIndexOf] = ".";
para.textContent = result.join("");

Solution 2: in an empty array

const primeNumbers = [];

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0){
            return false
        }
    }
    return true
}

// Add your code here
for (let i = 2; i <= 500; i++) {
    const prime = isPrime(i);
    if (prime) {
        primeNumbers.push(i);
    }
}
console.log(primeNumbers);

//Prime numbers from 2-500
const primeNumbers = [];

const checkForPrimeNumbers = (number) => {
    for (let i = 2; i < number ; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= 500 ; i++) {
    const isPrime = checkForPrimeNumbers(i);
    if (isPrime) primeNumbers.push(i)
}

 */

/* Problem 7: Write a function to generate random name from an array
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');
const section = document.querySelector('section');
section.appendChild(para);

// Add your code here
const generateRandomNumber = Math.floor(Math.random() * names.length) + 1;
function chooseName() {
    para.textContent = names[generateRandomNumber];
}
chooseName()
*/

/* Problem 8: Print names which have less than 5 characters
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

para.textContent = names.filter(name => name.length < 5);

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
*/

/* Problem 9: Display the name below the search box when it matches the input
const htmlInputElement = document.getElementById("site-search");
const container = document.getElementById("list-container");
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada', "Julie"];

htmlInputElement.addEventListener("input", (e) => {
    container.innerHTML = '';
    if(!e.target.value) return;

    const filteredNames = names.filter(name => name.toLowerCase().includes(e.target.value.toLowerCase()));

    filteredNames.forEach(name => {
        const nameElement = document.createElement("li");
        nameElement.textContent = name;
        container.append(nameElement);
    });
})
 */

/* Problem 10: Solving an anagram
    Solution 1:
    const string1 = "test";
    const string2 = "tset";

    function checkIfAnagram(string1, string2) {
        const length1 = string1.length;
        const length2 = string2.length;
        let lengthCheck = length1 === length2;
        const sort1 = string1.split("").sort().join("").toLowerCase();
        const sort2 = string2.split("").sort().join("").toLowerCase();
        const sortedString = sort1 === sort2;
        const message = lengthCheck && sortedString ? "Is anagram" : "Not an anagram";
    }

    checkIfAnagram(string1, string2);

    Solution 2:
    const checkIfAnagram = (string1, string2) => {
        if (string1.length !== string2.length) {
            return 'Not An Anagram';
        }

        const string1Object = {};
        const string2Object = {};

        for (let item of string1) {
          string1Object[item] = string1Object[item] ? string1Object[item] + 1 : 1;
        }

        for (let letters of string2) {
            if (!string1Object[letters]) {
                return false;
            }
            string1Object[letters] -= 1
        }
        return true;
    }

    console.log(checkIfAnagram('dangere', 'gardeng'));
*/

/* Problem 11: Solving a palindrome
Solution 1:
const word = "madam";

let isPalindrome = true;
for (let i = 0, j = word.length - 1; i < j ; i++, j--) {
    if(word[i] !== word[j]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

Solution 2:
function isPalindrome(str) {
  return str === str.split(”).reverse().join(”);
}
*/

/* Problem 12: Black Jack Game || Pig Game

const showButton = document.getElementById("show");
const diceButton = document.getElementById("dice");
const playerScoresUI = document.getElementById("player-score");
const dealerScoresUI = document.getElementById("dealer-score");
const newGameButton = document.getElementById("new-game-button");
const status = document.getElementById("game-status");
const gameContainer = document.querySelector(".new-game-container");
const hideShowGameButton = document.querySelector(".hide-game-button");
const PLAYER_LOSES = "Player loses";
const PLAYER_WINS = "Player wins";
const TIE = "Its a tie"

let playerScore = 0;
let dealerScore = 0;

const generateRandomDiceNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
}

const disableButtons = () => {
    showButton.disabled = true;
    diceButton.disabled = true;
}

const enableButtons = () => {
    showButton.disabled = false;
    diceButton.disabled = false;
}

const startNewGame = () => {
    hideShowGameButton.style.display = "block";
}

const updateStatus = (text) => {
    status.textContent = text;
    disableButtons();
    startNewGame()
}

diceButton.addEventListener("click", () => {
    showButton.style.visibility = "visible";
    playerScore += generateRandomDiceNumber();
    dealerScore += generateRandomDiceNumber();
    playerScoresUI.innerText = playerScore;
    dealerScoresUI.innerText = dealerScore;
    if (playerScore > 21) {
        updateStatus(PLAYER_WINS);
        return;
    }
    if (playerScore === 21) {
        updateStatus(PLAYER_LOSES);
        return;
    }
})

showButton.addEventListener("click", () => {
    dealerScoresUI.style.visibility = "visible";
    if (dealerScore > 21) {
        updateStatus(PLAYER_WINS);
        return;
    }
    if (dealerScore === 21) {
        updateStatus(PLAYER_LOSES);
        return;
    }
    if (playerScore > dealerScore) updateStatus(PLAYER_WINS);
    else if (playerScore < dealerScore) updateStatus(PLAYER_LOSES);
    else if (playerScore === dealerScore) updateStatus(TIE);
})

newGameButton.addEventListener("click", () => {
    enableButtons();
    status.textContent = "";
    hideShowGameButton.style.display = "none";
})
*/

/* Problem 13: Snakes and ladder game for 2 player
const player1ScoresUI = document.getElementById("player1-scores");
const player2ScoresUI = document.getElementById("player2-scores");
const dice = document.getElementById("roll-dice");
const status = document.getElementById('ludo-status');

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

const snakesAndLadderObject = [
    {
        type: "ladder",
        currentScore: 20,
        endScore: 26
    },
    {
        type: "ladder",
        currentScore: 31,
        endScore: 40
    },
    {
        type: "ladder",
        currentScore: 45,
        endScore: 52
    },
    {
        type: "ladder",
        currentScore: 68,
        endScore: 82
    },
    {
        type: "ladder",
        currentScore: 92,
        endScore: 96
    },
    {
        type: "snake",
        currentScore: 13,
        endScore: 2
    },
    {
        type: "snake",
        currentScore: 28,
        endScore: 12
    },
    {
        type: "snake",
        currentScore: 42,
        endScore: 30
    },
    {
        type: "snake",
        currentScore: 62,
        endScore: 55
    },
    {
        type: "snake",
        currentScore: 74,
        endScore: 50
    },
    {
        type: "snake",
        currentScore: 86,
        endScore: 69
    },
    {
        type: "snake",
        currentScore: 94,
        endScore: 80
    },
]

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const checkForSnakeOrLadder = (score) => {
    const action = snakesAndLadderObject.find(item => item.currentScore === score);
    if (action) {
        return action.endScore;
    }
    else return score;
}

dice.addEventListener("click", () => {
    if (currentPlayer === 1) {
        player1Score += generateRandomNumber();
        player1Score = checkForSnakeOrLadder(player1Score);
        player1ScoresUI.textContent = player1Score;
        currentPlayer = 2;
        return;
    }
    if (currentPlayer === 2) {
        player2Score += generateRandomNumber();
        player2Score = checkForSnakeOrLadder(player2Score);
        player2ScoresUI.textContent = player2Score;
        currentPlayer = 1;
        return;
    }
})

 */

/* Problem 14: How do you count the number of vowels and consonants in a given string
const string = "palindrome";
const stringLength = string.length;
const splitString = string.split("");
const vowelArray = ["a", "e", "i", "o", "u"];

const vowels = splitString.filter(character => vowelArray.includes(character));
const consonants = stringLength - vowels.length;

console.log(`There are ${vowels.length} vowels and ${consonants} consonants`);

Output: There are 4 vowels and 6 consonants;
*/

/* Problem 14: Remove duplicate character from the string
const string = "palindrommmmme";
const set = new Set(string);

let array = [];
set.forEach(character => array.push(character));
const result = array.join("")
console.log(result);

Output: palindrome
 */

/* Problem 15: How do you remove a given character from String?
const string = "how are you oliver";
const strings = string.split("");
const character = "o";

const filter = strings.filter(string => string !== character);
const join = filter.join("");

console.log(join);
*/

/* Problem 16: Flatten a nested array without using the flat or flatMap method
const newVar = [1, 2, [3, 4, [1, 2, 3], [4, 5], 6], [7, 8, 9]];

Solution 1:
const split = [1, 2, [3, 4, [1, 2, 3], [4, 5], 6], [7, 8, 9]]
    .toString()
    .split(",")
    .map(str => +str);

Solution 2:
const toString = newVar.toString();
const split = toString.split(",");
let array = [];
split.forEach(i => array.push(Number(i)))

console.log(split);
console.log(array);

Output:[ 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Solution 3:
const newVar = [1, 2, [3, 4, [1, 2, 3], [4, 5], 6], [7, 8, 9]];
const flattenedArray = newVar.toString().split(",");

console.log(flattenedArray);

Solution 4:
 function flattenArray(nestedArray) {
    let flattenedArray = [];
    nestedArray.forEach((element) => {
        if (Array.isArray(element)) {
          flattenedArray = flattenedArray.concat(flattenArray(element));    //This is called recursion. Calling the
        } else {                                                            same function from within the function.
          flattenedArray.push(element);
        }
      });

      return flattenedArray;
  }

const nestedArray = [13, [14, 15, [16, [17, 18, [19]]]]];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // Output: [13, 14, 15, 16, 17, 18, 19]

*/

/* Problem 17: Find the numbers from an array that make sum of 10
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addNumbers = () => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === 10) {
                result.push([i, array[j]]);
            }
        }
    }
    console.log(result);
}
addNumbers();

Output: [[1, 9], [2, 8], [3, 7], [4, 6]];

 */

/* Problem 18: Find the duplicate numbers from an array and put them in an array
Solution 1: Best solution
const numbers = [1, 1, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9];
let n = 0;
const array = [];

while (n < numbers.length) {
    const number = numbers[n];
    const lastIndexOfNumber = numbers.lastIndexOf(number);
    if (n !== lastIndexOfNumber){
        array.push(numbers[n]);
        n = lastIndexOfNumber + 1;
    }
    else {
        n++
    }
}
console.log(array);

Solution 2:
const numbers = [1, 1, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9];

const map = new Map();
const array = [];

for (let number of numbers) {
    if (!map.has(number)) map.set(number, 1);
    else map.set(number, map.get(number) + 1);
}

map.forEach( (value, key) => {
    if (value > 1) array.push(key);
})

console.log('Repeated numbers', array);

*/

/* Problem 20: Use separator "_" while counting for thousands
const number = 28743400000090;
const numberAsString = String(number).split("");

let result = "";

//Using Reverse counting
const numberedArray = number.toString().split('');
let result = '';

for (let i = numberedArray.length - 1, count = 1; i >= 0; i--, count++) {
    if (count % 3 === 0 && i > 0) result = `_${numberedArray[i]}${result}`;
    else result = `${numberedArray[i]}` + result;
}

console.log(result);

Solution 2:
const number = 28743400000090;
const numberAsString = number.toString().split("");
const toArray = numberAsString.reverse();
let numbers = [];

for (let i = 0; i < toArray.length; i++){
    if(i > 0 && i % 3 === 0){
        numbers.push(`_`, toArray[i]);
    } else {
        numbers.push(toArray[i]);
    }
}

const backToString = numbers.reverse().join("");
console.log(backToString);

*/

/* Problem 21: Reverse a string
Write a function that takes a string as input and returns the string in reverse order.
Input: "hello"
Output: "olleh"

const input = "hello";
const intoArray = input.split("").reverse().join("");

 */

/* Problem 22: Find the maximum value in an array
Write a function that takes an array of numbers as input and returns the maximum value.
Input: [3, 6, 2, 8, 1]
Output: 8

const input = [3, 6, 2, 8, 1];
const result = Math.max(...input);

*/

/* Problem 23: Fibonacci sequence
Write a function that takes a number n as input and returns the first-ten numbers in the Fibonacci sequence.

const lastNumber = 10;
const fibonnaciSequence = [];

// Output: [0, 1, 1, 2, 3];
if(fibonnaciSequence.length < 0) fibonnaciSequence.push(0);
if(fibonnaciSequence.length === 1) fibonnaciSequence.push(1);

for (let i = 2; i < lastNumber; i++) {
    let nextNumber = fibonnaciSequence[i - 1] + fibonnaciSequence[i - 2]
    fibonnaciSequence.push(nextNumber);
}
console.log(fibonnaciSequence);
 */

/* Problem 24: Fibonacci Sequence: Get the Fibonacci of the number below the mentioned number
    const lastNumber = 10000;
    const sequence = [];

    for (let i = 0; i < lastNumber; i++) {
        if (i === 0) sequence.push(1);
        if (i === 1) sequence.push(sequence[0]);
        if (i > 1) {
            const sum = sequence[i - 1] + sequence[i - 2];
            if (sum > lastNumber) break;
            else sequence.push(sum);
    }
*/

/* Problem 25: Find the sum of all even numbers in an array
Input: [3, 6, 2, 8, 1]
Output: 16

const input = [3, 6, 2, 8, 1];
const evenNumberArray = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
        evenNumberArray.push(input[i])
    }
}

const result = evenNumberArray.reduce((previousValue, currentValue, acc) => {
    return acc = previousValue + currentValue
}, 0);

Solution 2:
const input = [3, 6, 2, 8, 1];
const evenNumberArray = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) evenNumberArray.push(input[i]);
}

for (let number of evenNumberArray) {
    sum = sum + number
}

console.log(sum);

*/

/* Problem 26: Find the second largest number in an array
Write a function that takes an array of numbers as input and returns the second largest number in the array.

Input: [3, 6, 2, 8, 1]
Output: 6

const input = [3, 6, 2, 8, 8, 6, 1];
const sortedNumbers = input.sort();
const highestNumber = Math.max(...sortedNumbers);
const firstIndexOfHighestNumber = sortedNumbers.indexOf(highestNumber);
let secondHighestNumber;

for (let i = 0; i < sortedNumbers.length; i++) {
    if (i === firstIndexOfHighestNumber) secondHighestNumber = sortedNumbers[i - 1];
}
console.log(secondHighestNumber);

Solution 2:
const input = [3, 6, 2, 8, 1];
const sortedArray = input.sort();
const secondMaximumNumberIndex = sortedArray.length - 2
const secondMaximumNumber = sortedArray[secondMaximumNumberIndex];
console.log(secondMaximumNumber);

 */

/* Problem 27: How to add a value in the input and show it below the input either one by one or anything you type
const onSubmitForm = document.getElementById("form");
const displayContent =  document.querySelector(".content");
const input = document.getElementById("searchForNames");

const createElement = (text) => {
  const para = document.createElement("p");
    displayContent.append(para);
    para.innerText += text;
    para.innerText = text;                                     //Uncomment for just one comment
}
const submitHandler = (e) => {
    e.preventDefault();
    // displayContent.innerText = "";                          //Uncomment for just one comment
    message = e.target[0].value
    createElement(message);
    input.value = "";
}
onSubmitForm.addEventListener("submit", submitHandler);

 */

/* Problem 27: Adding datalist element to autocomplete the search
The list attribute in the input and the id property in the datalist element binds the elements together.

View Html sheet for details
 */

/* Problem 28: Print the console.log

console.log('First');
// NOTE: 0 milliseconds.
setTimeout(function() {console.log('Inside setTimeout')}, 0);
console.log('Last');

First
Last
Inside setTimeout

 */

/* Problem 29: Print all even numbers from 0 – 10

const evenNumbers = [];
for (let i = 0; i <= 10; i++) {
    if(i % 2 === 0) evenNumbers.push(i);
}

Output: [ 0, 2, 4, 6, 8, 10 ];

 */

/* Problem 30: Print a table containing multiplication tables

for (let i = 1; i <= 10 ; i++) {
   for (let j = 1; j <= 10; j++) {
       console.log(`${i} * ${j} = ${i * j}`);
   }
}

*/

/* Problem 31: Calculate the sum of numbers within an array

const numbers = [-10 , 10, 10, 10, 10, 10, -10];

const result = numbers.reduce((accumulator, previousValue, initiator) => accumulator += previousValue, 0);
console.log(result);

*/

/* Problem 32: Create a function that filters out negative numbers

Solution 1:
const numbers = [-10 , 10, 10, 10, 10, 10, -10];

const numbers = [-10 , 10, 10, 10, 10, 10, -10];

const result = numbers.filter(number => number > 0)
console.log(result);

Solution 2:
const numbers = [-10 , 10, 10, 10, 10, 10, -10, -1, -9, -4];
const negativeNumbers = [];
const positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) negativeNumbers.push(numbers[i]);
    else positiveNumbers.push(numbers[i]);
}

console.log('Positive', positiveNumbers);
console.log('Negative', negativeNumbers);

 */

/* Problem 33: Find out the maximum number of crimes in the below area
const data = [
    {
        street: "forclay",
        intersection: 2,
        numberOfCrimes: 23
    },
    {
        street: "marvel",
        intersection: 1,
        numberOfCrimes: 3
    },
    {
        street: "forclay",
        intersection: 1,
        numberOfCrimes: 12
    },
    {
        street: "marvel",
        intersection: 1,
        numberOfCrimes: 50
    },
    {
        street: "forclay",
        intersection: 2,
        numberOfCrimes: 2
    }
]

const dataMap = new Map();

for (let i = 0; i < data.length; i++) {
    const key = data[i].street + data[i].intersection;
    if (dataMap.has(key)) {
        let crimeCount = dataMap.get(key) + data[i].numberOfCrimes;
        dataMap.set(key, crimeCount);
    }
    else {
        dataMap.set(key, data[i].numberOfCrimes)
    }
}

let maximumNumberOfCrimes = 0;
let conclusion ;

for (const [key, value] of dataMap.entries()) {
    if (maximumNumberOfCrimes < value) {
        maximumNumberOfCrimes = value;
        conclusion = `${key} has ${value} number of crimes`;
    }
}
console.log(conclusion);

Solution 2:
let map = new Map();
let maximumCrimeValues = 0;
let conclusion;

for (let i = 0; i < data.length; i++) {
    if (map.get(`${data[i].street}, ${data[i].intersection}`)) {
        const value = Number(map.get(`${data[i].street}, ${data[i].intersection}`));
        map.set(`${data[i].street}, ${data[i].intersection}`, `${value + Number(`${data[i].numberOfCrimes}`)}`);

    }
    else {
        map.set(`${data[i].street}, ${data[i].intersection}`, `${data[i].numberOfCrimes}`);
    }
}
console.log(map);

map.forEach( (value, key) => {
    if (maximumCrimeValues < value)  {
        maximumCrimeValues = value;
        conclusion = `Crime values are high in ${key} with ${value} crimes`;
    }
})

console.log(conclusion);

*/

/* Problem 34: Solve

let x = 10; x += 1;

console.log('x =', 11);

 */

/* Problem 35: Solve

let x = 5 + “String”;
let y = “String” + 20 + 5;

console.log('x =', 5String);
console.log('y =', String250);

 */

/* Problem 35: Sum of several arrays

const array = [[3, 2], [1], [4, 12]];

const flattenedArray = array.toString().split(',');

const result = flattenedArray.reduce((previousValue, currentValue, acc) => {
    return +previousValue + +currentValue
}, 0);

console.log(result);



 */

/* Problem 36: You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low
and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible
by 3, print the word "div3" directly after the number.

const numbersDivisibleBy3 = [];

const printNumbers = (number1, number2) => {
    for (let i = number1; i <= number2 ; i++) {
        if (i % 3 === 0) numbersDivisibleBy3.push(i);
    }
    console.log(numbersDivisibleBy3);
}

printNumbers(2, 10);

 */

/* Problem 37: Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd
elements. Try to solve with and without reduce function.

const numbersDivisibleBy3 = [];
const oddNumberArray = [];
let result = 0;

const oddballSum = (numbers) => {
    for (let number of numbers) {
        if (number % 2 !== 0) {
            result += number
        }
    }
    return result
}
const sum = oddballSum([1, 2, 3, 4, 5]);
console.log(sum);

 */

/* Problem 38: Bubble Sort: Bubble Sort is based on the idea of repeatedly comparing pairs of adjacent elements and
then swapping their positions if they are in the wrong order. Bubble sort is a stable, in-place sort algorithm.
How it works:
In an unsorted array of n elements, start with the first two elements and sort them in ascending order. (Compare the
element to check which one is greater).
Compare the second and third element to check which one is greater, and sort them in ascending order.
Compare the third and fourth element to check which one is greater, and sort them in ascending order.

Repeat steps 1–n until no more swaps are required.

Solution 1:
const input = [6, 5, 3, 3, 2, 1, 8, 28, 45, 100, 334, 7, 2, 4, 9, 11, 10, 15];
let inputLength = input.length;
let count = 0;

const runForLoop = () => {
    for (let i = 0; i < input.length - 2 - count; i++) {
        for (let j = i + 1; j < input.length - count; j++) {
            const firstNumber = input[i];
            const secondNumber = input[j];
            console.log(firstNumber, secondNumber);
            if (firstNumber > secondNumber) {
                input[i] = secondNumber;
                input[j] = firstNumber;
            }
        }
    }
    count++
    console.log(input);
}

runForLoop();

 */

/* Problem 39: String Rotation
Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD.

const input = 'ABCD';
const output = 'BCDA';

const identifyString = (string) => {
    const checkLength = string.length === input.length;
    if (!checkLength) return;
    const addInput = input + input;
    return addInput.indexOf(string) > -1;
}

const result = identifyString(output);
console.log(true); Output is the rotation of input;

 */

/* Problem 40: Given a string reverse each word in the sentence

const input = 'Welcome to this Javascript Guide!';
const output = [];

const createArray = input.split(" ");

for (const string of createArray) {
    output.push(string.toString().split('').reverse().join(''))
}

output.join(' ');
// emocleW ot siht tpircsavaJ !ediuG

 */

/* Problem 41: Write a JavaScript function to check if a given number is prime.

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

 */

/* Problem 42: Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
const inputString = "hello world, this is an example";

const toTitleCase = (string) => {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString, Hello World, this Is An Example);
 */

/* Problem 43: Implement a debounce function in JavaScript that limits the frequency of a function’s execution when
it’s called repeatedly within a specified time frame.

function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

*/

/* Problem 44: Implement a deep clone function in JavaScript that creates a copy of a nested object or array without
any reference to the original.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

*/

/* Problem 45: Implement a function that takes two sorted arrays and merges them into a single sorted array without
using any built-in sorting functions.

function mergeSortedArrays(arr1, arr2) {
  return […arr1, …arr2].sort((a, b) => a – b);
}

 */

/* Problem 46: Implement a function that flattens a nested array in JavaScript, converting it into a single-level
array.

const flattenArray = (nestedArray) => {
  return nestedArray.flat(Infinity);
};

*/

/* Problem 47: Implement a function to reverse a string without using the built-in reverse() method.

const input = 'olleh';
const reversedInputArray = [];
let reversed;

const inputArray = input.split('');
for (let i = inputArray.length - 1; i >=0 ; i--) {
    reversedInputArray.push(inputArray[i]);
}
reversed = reversedInputArray.join('');
console.log(reversed, 'hello');

 */

/* Problem 48: Given an array of numbers, write a function to find the largest and smallest numbers in the array.

const findMinMax = (arr) => {
  const min = Math.min(…arr);
  const max = Math.max(…arr);
  return [min, max];
}

 */

/* Problem 49: Write a function that takes an array of integers as input and returns a new array with only the unique
elements.

const getUniqueElements = (arr) => {
  return Array.from(new Set(arr));
}
 */

/* Problem 50: Implement a function to find the factorial of a given number.

function factorial(number) {
  if (number === 0 || number === 1) return 1;
  return number * factorial(number – 1);
}

 */

/* Problem 51: Given a string, write a function to count the occurrences of each character in the string.

function countCharacterOccurrences(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

 */

/* Problem 51: Implement a function to remove duplicates from an array.

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

 */

/* Problem 52: Write a function that sorts an array of numbers in ascending order.

function ascendingSort(numbers) {
  return numbers.sort((a, b) => a – b);
}

 */

/* Problem 53: Find Missing Number in Array starting from 0:
    const input = [3, 0, 1, 4, 5];
    const sortedArray = input.sort();
    let missingNumber;

    for (let i = 0, count = sortedArray[0]; i < sortedArray.length; i++, count++) {
        if (sortedArray[i] !== count) {
            missingNumber = count;
            break;
        }
    }

    console.log(missingNumber)
 */

/* Problem 54: Capitalise the first letter of the word
Solution 1:
const input = 'this is the title of the book';

const inputArray = input.split(' ');
const output = inputArray.map(item => item.replace(item[0], item[0].toUpperCase()));
const result = output.join(' ');

//Output: This Is The Title Of The Book

Solution 2:
function titleCase(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(titleCase('this is a title')); // Output: 'This Is A Title'

 */

/* Problem 55: Find the missing numbers in an array below the specified number
const a = [9];
const count = 9;
const missingNumbers = [];

for (let i = 1; i <= count; i++) {
    if (a.indexOf(i) == -1) {
        missingNumbers.push(i);
    }
}
console.log(missingNumbers);  // [1, 2, 3, 4, 5, 6, 7, 8];

 */

/* Problem 56: Finding an element in an array using linear search
This solution reduces time and space complexity as we are trying to find two elements at a time

    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const number = 10;

    for (let i = 0, j = input.length - 1 ; i < input.length; i++, j--) {
        if (input[i] === number || input[j] === number) break
    }

 */

/* Problem 57: Finding the character using binary search.
Rather than looping over the array we use the below method for reducing time and space complexity. In the below example
we first try to find the middle number in the array. Once we have found it we compare the value to the number and
depending on whether it is more or less we move to the right or left of the array.

With every new comparison we move the middle number found to be the new ending point.
It is important to do Math.floor as we can get integers as well.

If we do not get the value then we return -1;

    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const number = 5;

    const compareValue = (value) => {
        if (value === number) console.log('The number is', value);
        if (value > number) console.log('Go left');
        if (value < number) console.log('Go right');
    };

    const middleValue1 = (input[0] + input.length - 1) / 2;
    compareValue(input[middleValue1]);

    const middleValue2 = Math.floor((input[0] + input[middleValue1]) / 2);
    compareValue(input[middleValue2]);

    Solution 2:
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    // Example usage:
    let arr = [1, 3, 5, 7, 9, 11, 13, 15];
    let target = 7;
    console.log("Index of", target, ":", binarySearch(arr, target));

 */

/* Problem 58: Write a function that finds the first longest word in a sentence
const input = 'The quick brown fox jumps over the lazy dog';

const findLongestWord = (wordArray) => {
    const inputArray = wordArray.split(' ');
    let longestWordLength = 0;
    let word = '';

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestWordLength) {
            longestWordLength = inputArray[i].length;
            word = inputArray[i];
        }
    }

    console.log(word, longestWordLength);
}

findLongestWord(input); // quick
 */

/* Problem 59: Write a function that finds the last longest word in a sentence
const input = 'The quick brown fox jumps over the lazy dog';

const findLongestWord = (wordArray) => {
    const inputArray = wordArray.split(' ');
    let longestWord = '';

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length >= longestWord.length) {
            longestWord = inputArray[i];
        }
    }
    return longestWord;
}

const output = findLongestWord(input);
 */

/* Problem 60: Find Missing Number in Array starting from 0:
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 3, 5]));

 */

/* Problem 61: Group items on the basis of age of given array of object
 let people = [
     {
         name: 'Alice',
         age: 21
     },
     {
         name: 'John',
         age: 20
     },
     {
         name: 'Rogers',
         age: 21
     },
     {
         name: 'Pickles',
         age: 23
     }
 ];

 const groupBy = (list) => {
     let data = {};

    list.forEach((item) => {
        const age = item.age;
        const name = item.name;
        if (!data[age]) {
            console.log('lo')
            data[age] = [item]
        } else {
            console.log('Hwe');
            console.log(data['20']);
            data[age].push(item);
        }
    })
     return data
}

const result = groupBy(people);
Result:
{
  '20': [ { name: 'John', age: 20 } ],
  '21': [ { name: 'Alice', age: 21 }, { name: 'Rogers', age: 21 } ],
  '23': [ { name: 'Pickles', age: 23 } ]
}

 */

/* Problem 62: LeetCode: Given an integer n, return a counter function. This counter function initially returns n and then
returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    let num = n;
    return function() {
        return num++;
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

 */

/* Problem 63: LeetCode: Write a function expect that helps developers test their code. It should take in any value val and
    return an object with the following two functions.

    toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should
    throw an error "Not Equal".
    notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should
    throw an error "Equal".

    Example 1:

    Input: func = () => expect(5).toBe(5)
    Output: {"value": true}
    Explanation: 5 === 5 so this expression returns true.
    Example 2:

    Input: func = () => expect(5).toBe(null)
    Output: {"error": "Not Equal"}
    Explanation: 5 !== null so this expression throw the error "Not Equal".
    Example 3:

    Input: func = () => expect(5).notToBe(null)
    Output: {"value": true}
    Explanation: 5 !== null so this expression returns true.

    var expect = function(val) {
        function toBe(value) {
            if(value === val) {
                return  true
            }
            throw new Error("Not Equal")
        }

        function notToBe(value) {
            if(value !== val) {
                return  true
            }
            throw new Error("Equal");
        }

        return {
            toBe,
            notToBe
        }
    };

    expect(5).toBe(5); // true
    expect(5).notToBe(5); // throws "Equal"

 */

/* Problem 64: LeetCode: Write a function createCounter. It should accept an initial integer init. It should return an
object with three functions.

    The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.

    Example 1:
    Input: init = 5, calls = ["increment","reset","decrement"]
    Output: [6,5,4]
    Explanation:
    const counter = createCounter(5);
    counter.increment(); // 6
    counter.reset(); // 5
    counter.decrement(); // 4
    Example 2:

    Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
    Output: [1,2,1,0,0]
    Explanation:
    const counter = createCounter(0);
    counter.increment(); // 1
    counter.increment(); // 2
    counter.decrement(); // 1
    counter.reset(); // 0
    counter.reset(); // 0


    Constraints:

    -1000 <= init <= 1000
    0 <= calls.length <= 1000
    calls[i] is one of "increment", "decrement" and "reset"

    Solution:
    const createCounter = function(init) {
        let value = init;

        function increment() {
            return value = value + 1;
        }

        function decrement() {
            return value = value - 1;
        }

        function reset() {
            return value = init;
        }

        return {
            increment,
            decrement,
            reset
        }
    };

    const counter = createCounter(0);

    const result1 = counter.increment();
    console.log(result1);

    const result4 = counter.increment();
    console.log(result4);

    const result3 = counter.decrement();
    console.log(result3);

    const result2 = counter.reset();
    console.log(result2);

    const result5 = counter.reset();
    console.log(result5);

 */

/* Problem 65: Apply Transformation Over Each Element in Array: LeetCode
    Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each
    element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).
    Please solve it without the built-in Array.map method.

    Example 1:

    Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
    Output: [2,3,4]
    Explanation:
    const newArray = map(arr, plusone); // [2,3,4]
    The function increases each value in the array by one.
    Example 2:

    Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
    Output: [1,3,5]
    Explanation: The function increases each value by the index it resides in.
    Example 3:

    Input: arr = [10,20,30], fn = function constant() { return 42; }
    Output: [42,42,42]
    Explanation: The function always returns 42.


    Constraints:

    0 <= arr.length <= 1000
    -109 <= arr[i] <= 109
    fn returns a number

    Solution:
    var map = function(arr, fn) {
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i))
        }
        return result;
    };
 */

/* Problem 66: Filter Elements From an Array: LeetCode
    Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

    The fn function takes one or two arguments:
    - arr[i] - number from the arr
    - i - index of arr[i]
    filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a
    truthy value. A truthy value is a value where Boolean(value) returns true.

    Please solve it without the built-in Array.filter method.

    Example 1:
    Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
    Output: [20,30]
    Explanation:
    const newArray = filter(arr, fn); // [20, 30]
    The function filters out values that are not greater than 10

    Example 2:
    Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
    Output: [1]
    Explanation:
    fn can also accept the index of each element
    In this case, the function removes elements not at index 0

    Example 3:
    Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
    Output: [-2,0,1,2]
    Explanation:
    Falsey values such as 0 should be filtered out


    Constraints:

    0 <= arr.length <= 1000
    -109 <= arr[i] <= 109

    Solution:
    var filter = function(arr, fn) {
        const filteredArray = [];
        for(let i = 0; i < arr.length; i++) {
            const eachItemResult = fn(arr[i], i);
            if (eachItemResult) filteredArray.push(arr[i]);
        }
        return filteredArray;
    };

 */

/* Problem 67: Array Reduced Transformation: LeetCode
    Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by
    executing the fn function on each element of the array, sequentially, passing in the return value from the
    calculation on the preceding element.

    This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]),
    val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then
    returned.

    If the length of the array is 0, the function should return init.
    Please solve it without using the built-in Array.reduce method.

    Example 1:
    Input:
    nums = [1,2,3,4]
    fn = function sum(accum, curr) { return accum + curr; }
    init = 0
    Output: 10
    Explanation:
    initially, the value is init=0.
    (0) + nums[0] = 1
    (1) + nums[1] = 3
    (3) + nums[2] = 6
    (6) + nums[3] = 10
    The final answer is 10.

    Example 2:
    Input:
    nums = [1,2,3,4]
    fn = function sum(accum, curr) { return accum + curr * curr; }
    init = 100
    Output: 130
    Explanation:
    initially, the value is init=100.
    (100) + nums[0] * nums[0] = 101
    (101) + nums[1] * nums[1] = 105
    (105) + nums[2] * nums[2] = 114
    (114) + nums[3] * nums[3] = 130
    The final answer is 130.

    Example 3:
    Input:
    nums = []
    fn = function sum(accum, curr) { return 0; }
    init = 25
    Output: 25
    Explanation: For empty arrays, the answer is always init.

    Constraints:
    0 <= nums.length <= 1000
    0 <= nums[i] <= 1000
    0 <= init <= 1000

    Solution:
    var reduce = function(nums, fn, init) {
        let result = init;

        for (let i = 0; i < nums.length; i++) {
            result = fn(result, nums[i]);
        }
        return result;
    };


 */

/* Problem 68: Min-Max Sum: HackerRank
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of
    the five integers. Then print the respective minimum and maximum values as a single line of two space-separated
    long integers.

    Example
    The minimum sum is  and the maximum sum is . The function prints
    16 24

    Function Description
    Complete the miniMaxSum function in the editor below.
    miniMaxSum has the following parameter(s):
    arr: an array of  integers

    Print
    Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

    Input Format
    A single line of five space-separated integers.

    Output Format
    Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated
    by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

    Sample Input
    1 2 3 4 5

    Sample Output
    10 14

    Solution:
    let result;

    const maximumNumber = Math.max(...arr);
    const minimumNumber = Math.min(...arr);

    const total = arr[4] + arr[3] + arr[2] + arr[1] + arr[0];

    const maximumValuesResult= total - minimumNumber;
    const minimumValuesResult = total - maximumNumber;

    result = `${minimumValuesResult} ${maximumValuesResult}`;

 */

/* Problem 69: Function Composition: LeetCode
    Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the
    array of functions.

    The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
    The function composition of an empty list of functions is the identity function f(x) = x.
    You may assume each function in the array accepts one integer as input and returns one integer as output.

    Example 1:
    Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
    Output: 65
    Explanation:
    Evaluating from right to left ...
    Starting with x = 4.
    2 * (4) = 8
    (8) * (8) = 64
    (64) + 1 = 65

    Example 2:
    Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
    Output: 1000
    Explanation:
    Evaluating from right to left ...
    10 * (1) = 10
    10 * (10) = 100
    10 * (100) = 1000

    Example 3:
    Input: functions = [], x = 42
    Output: 42
    Explanation:
    The composition of zero functions is the identity function


    Constraints:
    -1000 <= x <= 1000
    0 <= functions.length <= 1000
    all functions accept and return a single integer

    Solution:
    const compose = function(functions) {
        let value;
        return function(x) {
            value = x;
            for (let i = functions.length - 1; i >= 0; i--) {
                value = functions[i](value);
            }
            return value;
        }
    };

    const fn = compose([x => x + 1, x => 2 * x])
    fn(4) // 9

 */

/* Problem 70: LeetCode: Allow One Function Call
    Given a function fn, return a new function that is identical to the original function except that it ensures fn is
    called at most once.
    The first time the returned function is called, it should return the same result as fn.
    Every subsequent time it is called, it should return undefined.

    Example 1:
    Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
    Output: [{"calls":1,"value":6}]
    Explanation:
    const onceFn = once(fn);
    onceFn(1, 2, 3); // 6
    onceFn(2, 3, 6); // undefined, fn was not called

    Example 2:
    Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
    Output: [{"calls":1,"value":140}]
    Explanation:
    const onceFn = once(fn);
    onceFn(5, 7, 4); // 140
    onceFn(2, 3, 6); // undefined, fn was not called
    onceFn(4, 6, 8); // undefined, fn was not called

    Constraints:
    calls is a valid JSON array
    1 <= calls.length <= 10
    1 <= calls[i].length <= 100
    2 <= JSON.stringify(calls).length <= 1000

    Solution:
    const once = function(fn) {
        let counter = 0;

        return function(...args){
            counter++;
            if (counter === 1) {
                const result = fn(...args);
                return {
                    "calls": "1",
                    "value": result
                }
            }
        }
    };

    let fn = (a,b,c) => (a + b + c)

    let onceFn = once(fn)
    onceFn(1,2,3); // 6
    onceFn(2,3,6); // returns undefined without calling fn

 */

/* Problem 71: HackerRank: Time Converion
    Given a time in -hour AM/PM format, convert it to military (24-hour) time.
    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

    Example
    Return '12:01:00'.
    Return '00:01:00'.

    Function Description
    Complete the timeConversion function in the editor below. It should return a new string representing the input time
    in 24 hour format.

    timeConversion has the following parameter(s):
    string s: a time in  hour format

    Returns
    string: the time in  hour format

    Input Format
    A single string  that represents a time in -hour clock format (i.e.:  or ).

    Constraints
    All input times are valid

    Sample Input
    07:05:45PM

    Sample Output
    19:05:45

    Solution:
    function timeConversion(s) {
        // Write your code here
        const isItAm = s.includes('AM');
        const timeArray = s.split(':');
        const removeHours = timeArray.splice(0, 1);
        const hours = removeHours[0];

        if(isItAm) {
            if (hours === '12') {
                timeArray.unshift('00');
            } else {
                timeArray.unshift(hours);
            }
        } else if (!isItAm) {
            const hours = removeHours[0];
            if (hours < 12) {
                let timeInPm = Number(hours) + 12;
                timeInPm < 10 ? timeInPm = `0${timeInPm}` : timeInPm;
                timeArray.unshift(`${timeInPm}`);
            } else {
                timeArray.unshift(...removeHours);
            }
        }
        return timeArray.join(":").substring(0, 8);
    }

    Solution 2:
    if(s.toLowerCase().endsWith('am') && s.startsWith('12')) {
        s = s.replace('12', '00');
    } else if(+s.substring(0,2) < 12) {
        s = (+s.substring(0,2) + 12).toString() + s.substring(2)
    }

    return s.substring(0,8);

 */

/* Problem 72: LeetCode: Memoize
    Given a function fn, return a memoized version of that function.

    A memoized function is a function that will never be called twice with the same inputs. Instead it will return a
    cached value.

    You can assume there are 3 possible input functions: sum, fib, and factorial.

    - sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the
    arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2)
    and (2, 3), two separate calls should be made.
    - fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
    - factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

    Example 1:
    Input:
    fnName = "sum"
    actions = ["call","call","getCallCount","call","getCallCount"]
    values = [[2,2],[2,2],[],[1,2],[]]
    Output: [4,4,1,3,2]
    Explanation:
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);
    memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
    memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
    // "getCallCount" - total call count: 1
    memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
    // "getCallCount" - total call count: 2

    Example 2:
    Input:
    fnName = "factorial"
    actions = ["call","call","call","getCallCount","call","getCallCount"]
    values = [[2],[3],[2],[],[3],[]]
    Output: [2,6,2,2,6,2]
    Explanation:
    const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
    const memoFactorial = memoize(factorial);
    memoFactorial(2); // "call" - returns 2.
    memoFactorial(3); // "call" - returns 6.
    memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
    // "getCallCount" - total call count: 2
    memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
    // "getCallCount" - total call count: 2

    Example 3:
    Input:
    fnName = "fib"
    actions = ["call","getCallCount"]
    values = [[5],[]]
    Output: [8,1]
    Explanation:
    fib(5) = 8 // "call"
    // "getCallCount" - total call count: 1

    Solution:
    function memoize(fn) {
        const storeValues = new Map();
        return function(...args) {
            if (storeValues.has(args.toString())) {
                return storeValues.get(args.toString());
            } else {
                const result = fn(...args);
                storeValues.set(args.toString(), result);
                return result;
            }
        }
    }

 */

/* Problem 73: LeetCode: Add Two Promises
    Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a
    number. The returned promise should resolve with the sum of the two numbers.

    Example 1:
    Input:
    promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
    promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
    Output: 7
    Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should
    resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

    Example 2:
    Input:
    promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
    promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
    Output: -2
    Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should
    resolve with a value of 10 + -12 = -2.

    Solution:
    const addTwoPromises = async function(promise1, promise2) {
        return await promise1 + await promise2;
    };

    addTwoPromises(Promise.resolve(2), Promise.resolve(2))
       .then(console.log); // 4

 */

/* Problem 74: LeetCode: Sleep
    Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can
    resolve any value.

    Example 1:
    Input: millis = 100
    Output: 100
    Explanation: It should return a promise that resolves after 100ms.
    let t = Date.now();
    sleep(100).then(() => {
      console.log(Date.now() - t); // 100
    });

    Example 2:
    Input: millis = 200
    Output: 200
    Explanation: It should return a promise that resolves after 200ms.

    Solution:
    async function sleep(millis) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, millis)
        })
    }

    let t = Date.now();
    sleep(100)
        .then(() => console.log(Date.now() - t))

 */

/* Problem 75: HackerRank: Sparse Array

    There is a collection of input strings and a collection of query strings. For each query string, determine how many
    times it occurs in the list of input strings. Return an array of the results.

    Example
    strings = ['ab', 'ab', 'abc'];
    queries = ['ab', 'abc', 'bc'];
    There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array,
    results = [2, 1, 0].

    Function Description
    Complete the function matchingStrings in the editor below. The function must return an array of integers
    representing the frequency of occurrence of each query string in strings.

    matchingStrings has the following parameters:
    string strings[n] - an array of strings to search
    string queries[q] - an array of query strings

    Returns
    int[q]: an array of results for each query

    Input Format
    The first line contains and integer n, the size of strings[n].
    Each of the next n lines contains a string strings[i].
    The next line contains q, the size of queries[n].
    Each of the next q lines contains a string queries[i].

    Solution 1:
    function matchingStrings(strings, queries) {
        // Write your code here
        const result = [];
        for (let i = 0; i < queries.length; i++) {
            let numberOfValues = 0;
            for (let j = 0; j < strings.length; j++) {
                if (queries[i] === strings[j]) {
                    numberOfValues += 1;
                }
            }
            result.push(numberOfValues);
        }
        return result;
    }
    //Output results = [2, 1, 0];

    Solution 2: Without n2
    function matchingStrings(strings, queries) {
        // Write your code here
        let stringsLength = strings.length - 1;
        let queriesLength = queries.length - 1;

        let s = 0;
        let q = 0;
        let count = 0;
        const result = [];

        while (s <= stringsLength && q <= queriesLength) {
            if (strings[s] === queries[q]) {
                count = count + 1;
            }

            if (s === stringsLength && q === queriesLength) {
                 result.push(count);
                 return result;
            } else {
                if (s === stringsLength) {
                    result.push(count);
                    count = 0;
                    q++;
                    s = 0;
                } else {
                    s++;
                }
            }
        }
    }

 */

/* Problem 76: LeetCode: Timeout Cancellation
    Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

    After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
    setTimeout(cancelFn, cancelTimeMs)
    Initially, the execution of the function fn should be delayed by t milliseconds.

    If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of
    fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided
    args as arguments.

    Example 1:
    Input: fn = (x) => x * 5, args = [2], t = 20
    Output: [{"time": 20, "returned": 10}]
    Explanation:
    const cancelTimeMs = 50;
    const cancelFn = cancellable((x) => x * 5, [2], 20);
    setTimeout(cancelFn, cancelTimeMs);

    The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of
    fn(2) at 20ms.

    Example 2:
    Input: fn = (x) => x**2, args = [2], t = 100
    Output: []
    Explanation:
    const cancelTimeMs = 50;
    const cancelFn = cancellable((x) => x**2, [2], 100);
    setTimeout(cancelFn, cancelTimeMs);

    The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution
    of fn(2) at 100ms, resulting in fn(2) never being called.

    Example 3:
    Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
    Output: [{"time": 30, "returned": 8}]
    Explanation:
    const cancelTimeMs = 100;
    const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
    setTimeout(cancelFn, cancelTimeMs);

    The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution
    of fn(2,4) at 30ms.

    Solution:
    const cancellable = function(fn, args, t) {
        const interval = setTimeout(() => {
            fn(...args);
        }, t)
        return () => {
            clearInterval(interval);
        }
    };

    //Test result from using below code
    const result = [];
    const fn = (x1, x2) => {
        console.log(x1, x2);
        return x1 * x2
    };
    const args = [2,4], t = 30, cancelTimeMs = 100;
    const start = performance.now();
    const log = (...argsArr) => {
         const diff = Math.floor(performance.now() - start);
         result.push({"time": diff, "returned": fn(...argsArr)});
    }

    const cancel = cancellable(log, args, t);
    const maxT = Math.max(t, cancelTimeMs);

    setTimeout(cancel, cancelTimeMs);

    setTimeout(() => {
         console.log('Hello', result); // [{"time":20,"returned":10}]
    }, maxT + 15)

 */

/* Problem 77: LeetCode: Interval Cancellation

 */

/* Problem 78: LeetCode: Promise Time Limit
    Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input
    function. fn takes arguments provided to the time limited function.

    The time limited function should follow these rules:

    If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the
    result.
    If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time
    Limit Exceeded".

    Example 1:
    Input:
    fn = async (n) => {
      await new Promise(res => setTimeout(res, 100));
      return n * n;
    }
    inputs = [5]
    t = 50
    Output: {"rejected":"Time Limit Exceeded","time":50}
    Explanation:
    const limited = timeLimit(fn, t)
    const start = performance.now()
    let result;
    try {
       const res = await limited(...inputs)
       result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
       result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    console.log(result) // Output

    The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms
    because the time limit was reached.

    Example 2:
    Input:
    fn = async (n) => {
      await new Promise(res => setTimeout(res, 100));
      return n * n;
    }
    inputs = [5]
    t = 150
    Output: {"resolved":25,"time":100}
    Explanation:
    The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.

    Example 3:
    Input:
    fn = async (a, b) => {
      await new Promise(res => setTimeout(res, 120));
      return a + b;
    }
    inputs = [5,10]
    t = 150
    Output: {"resolved":15,"time":120}
    Explanation:
    The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

    Example 4:
    Input:
    fn = async () => {
      throw "Error";
    }
    inputs = []
    t = 1000
    Output: {"rejected":"Error","time":0}
    Explanation:
    The function immediately throws an error.

    Solution:
    var timeLimit = function(fn, t) {
        return async function(...args) {
             const promise = [
                new Promise(resolve => resolve(fn(...args))), // Promise that resolves with the result of executing fn(...args)
                new Promise((resolve, reject) => setTimeout(() => reject('Time Limit Exceeded'), t)) //Promise that rejects with 'Time Limit Exceeded' after t milliseconds
             ]
            return Promise.race(promise);
        }
    };

    const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
    limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

 */

/* Problem 79: LeetCode: Debounce
    Given a function fn and a time in milliseconds t, return a debounced version of that function.

    A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled
    if it is called again within that window of time. The debounced function should also receive the passed parameters.

    For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

    The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

    If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be
    executed at 135ms.

    Example 1:
    Input:
    t = 50
    calls = [
      {"t": 50, inputs: [1]},
      {"t": 75, inputs: [2]}
    ]
    Output: [{"t": 125, inputs: [2]}]
    Explanation:
    let start = Date.now();
    function log(...inputs) {
      console.log([Date.now() - start, inputs ])
    }
    const dlog = debounce(log, 50);
    setTimeout(() => dlog(1), 50);
    setTimeout(() => dlog(2), 75);

    The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
    The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

    Example 2:
    Input:
    t = 20
    calls = [
      {"t": 50, inputs: [1]},
      {"t": 100, inputs: [2]}
    ]
    Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
    Explanation:
    The 1st call is delayed until 70ms. The inputs were (1).
    The 2nd call is delayed until 120ms. The inputs were (2).

    Example 3:
    Input:
    t = 150
    calls = [
      {"t": 50, inputs: [1, 2]},
      {"t": 300, inputs: [3, 4]},
      {"t": 300, inputs: [5, 6]}
    ]
    Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
    Explanation:
    The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
    The 2nd call is cancelled by the 3rd call
    The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).

    Constraints:
    0 <= t <= 1000
    1 <= calls.length <= 10
    0 <= calls[i].t <= 1000
    0 <= calls[i].inputs.length <= 10

    Solution:
    var debounce = function(fn, t) {
        let timeout;
        return function(...args) {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
               fn(...args);
            }, t)
        }
    };

    const debounce = function(fn, t) {
        let timeout;
        return function(...args) {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn(...args);
            }, t)
        }
    };

    const log = debounce(console.log, 100);
    log('Hello'); // cancelled
    log('Hello'); // cancelled
    log('Hello'); // Logged at t=100ms

 */

/* Problem 80: LeetCode: Execute Asynchronous Functions in Parallel
    Given an array of asynchronous functions functions, return a new promise promise. Each function in the array
    accepts no arguments and returns a promise. All the promises should be executed in parallel.

    promise resolves:
    When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise
    should be an array of all the resolved values of promises in the same order as they were in the functions.
    The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

    promise rejects:
    When any of the promises returned from functions were rejected. promise should also reject with the reason of the
    first rejection.

    Please solve it without using the built-in Promise.all function.

    Example 1:
    Input: functions = [
      () => new Promise(resolve => setTimeout(() => resolve(5), 200))
    ]
    Output: {"t": 200, "resolved": [5]}
    Explanation:
    promiseAll(functions).then(console.log); // [5]

    The single function was resolved at 200ms with a value of 5.

    Example 2:
    Input: functions = [
        () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
        () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
    ]
    Output: {"t": 100, "rejected": "Error"}
    Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same
    time.

    Example 3:
    Input: functions = [
        () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
        () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
        () => new Promise(resolve => setTimeout(() => resolve(16), 100))
    ]
    Output: {"t": 150, "resolved": [4, 10, 16]}
    Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.

    Constraints:
    functions is an array of functions that returns promises
    1 <= functions.length <= 10

    const promiseAll = function(functions) {
        let results = new Array(functions.length).fill(null);

        return new Promise((resolve, reject) => {
            functions.forEach((fn, index) => {
                fn()
                    .then((result) => {
                        results[index] = result;
                        if(!results.includes(null)) {
                            resolve(results);
                        }
                    })
                    .catch((error) => {
                        return reject(error);
                    });
            })
        })
    };

    const promise = promiseAll([() => new Promise(res => res(42))])
    promise.then(console.log); // [42]

 */

/* Problem 81: HackerRank: Flipping Bits
        You will be give a list of 32-bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as
    an unsigned integer.

    Example:
    n = 9(decimals)
    9(decimals) = 1001(binary)

    00000000000000000000000000001001 = 9(binary)
    11111111111111111111111111110110 = 4294967286(decimals)
    Return 4294967286

    Function Description:
    Complete the flippingBits function in the editor below.

    flippingBits has the following parameter(s):
    - int n: an integer

    Returns
    - int: the unsigned decimal integer result

    Input Format
    The first line of the input contains q. the number of queries.
    Each of the next q lines contain an integer, n to process.

    Constraints:
    1 <= q <= 100
    0 <= n < 2(decimals)

    Sample input
    3
    2147483647
    1
    0

    Sample Output:
    2147483648
    4294967294
    4294967295

    function flippingBits(n) {
        // Write your code here
        const originalBinaryNumber = n.toString(2).padStart(32 , '0');
        const originalBinaryNumberToString = originalBinaryNumber.toString();
        const swapNumber = originalBinaryNumberToString.split('').map(item => item === '1' ? '0' : '1').join('')
        return parseInt(swapNumber, 2);
    }

    const result = flippingBits(9);

*/

/* Problem 82: LeetCode: Is Object Empty
    Given an object or an array, return if it is empty.

    An empty object contains no key-value pairs.
    An empty array contains no elements.
    You may assume the object or array is the output of JSON.parse.

    Example 1:
    Input: obj = {"x": 5, "y": 42}
    Output: false
    Explanation: The object has 2 key-value pairs so it is not empty.

    Example 2:
    Input: obj = {}
    Output: true
    Explanation: The object doesn't have any key-value pairs so it is empty.

    Example 3:
    Input: obj = [null, false, 0]
    Output: false
    Explanation: The array has 3 elements so it is not empty.

    Constraints:
    obj is a valid JSON object or array
    2 <= JSON.stringify(obj).length <= 105

    Solution:
    const isEmpty = function(obj) {
        const keyLength = Object.keys(obj).length;
        return keyLength > 0 ? false : true
    };

 */

/* Problem 83: LeetCode: Chunk Array
    Given an array arr and a chunk size size, return a chunked array.

    A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of
    the last subarray may be less than size if arr.length is not evenly divisible by size.

    You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

    Please solve it without using lodash's _.chunk function.

    Example 1:
    Input: arr = [1,2,3,4,5], size = 1
    Output: [[1],[2],[3],[4],[5]]
    Explanation: The arr has been split into subarrays each with 1 element.

    Example 2:
    Input: arr = [1,9,6,3,2], size = 3
    Output: [[1,9,6],[3,2]]
    Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the
    2nd subarray.

    Example 3:
    Input: arr = [8,5,3,2,6], size = 6
    Output: [[8,5,3,2,6]]
    Explanation: Size is greater than arr.length thus all elements are in the first subarray.

    Example 4:
    Input: arr = [], size = 1
    Output: []
    Explanation: There are no elements to be chunked so an empty array is returned.


    Constraints:
    arr is a valid JSON array
    2 <= JSON.stringify(arr).length <= 105
    1 <= size <= arr.length + 1

    const chunk = function(arr, size) {
        const result = [];
        let newArray = [];

        for (let i = 0; i < arr.length; i++) {
           newArray.push(arr[i]);
           if (newArray.length === size || i === arr.length - 1) {
               result.push(newArray);
               newArray = [];
           }
        }
        return result;
    };

 */

/* Problem 84: HackerRank: Diagonal Difference
    Given a square matrix, calculate the absolute difference between the sums of its diagonals.

    For example:
    1   2   3
    4   5   6
    9   8   9

    The left to right diagonal = 1 + 5 + 9 = 15. The right to left diagonal is 3 + 5 + 9 = 17. Their absolute difference
    is 15 - 17 = 2

    Function Description:
    Complete the diagonalDifference function in the editor below.

    diagonalDifference takes the following parameters:
    - int arr[n][m]: an array of integers

    Return
    - int: the absolute diagonal difference

    Input Format
    The first line contains a single integer, n, the number of rows and columns in the square matrix arr.

    Each of the next n lines describe a row arr[i], and consists of n space-seperated integers arr[i][j].

    Constraints:
    - -100 <= arr[i][j] <= 100

    Output Format
    Return the absolute difference between the sums of the matrix two diagonals as a single integer

    Sample Input
    11  2   4
    4   5   6
    10  8   -12

    Sample Output
    15

    Explanation:
    The primary diagonal is
    11
        5
            -12
    Sum across the primary diagonal: 11 + 5 - 12 = 4

    The secondary diagonal is
            4
        5
    10
    Sum across the secondary diagonal: 4 + 5 + 10 = 19

    Difference 4 - 9 = 15

    Solution:
    function diagonalDifference(arr) {
        // Write your code here
        let leftToRightResult = 0;
        let rightToLeftResult = 0;

        for (let i = 0; i < arr.length; i++) {
            leftToRightResult += arr[i][i];
            rightToLeftResult += arr[i][arr.length - i - 1];
        }
        return Math.abs(leftToRightResult - rightToLeftResult);
    }

    diagonalDifference([[11,2,4], [4,5,6], [10,8, -12]]) //Expected 15

 */

/* Problem 85: LeetCode: Array Prototype Last
    Write code that enhances all arrays such that you can call the array.last() method on any array and it will return
    the last element. If there are no elements in the array, it should return -1.

    You may assume the array is the output of JSON.parse.

    Example 1:
    Input: nums = [null, {}, 3]
    Output: 3
    Explanation: Calling nums.last() should return the last element: 3.

    Example 2:
    Input: nums = []
    Output: -1
    Explanation: Because there are no elements, return -1.

    Constraints:
    arr is a valid JSON array
    0 <= arr.length <= 1000

    Solution:
    Array.prototype.last = function() {
        //Write code below
        if (this.length > 0) {
            return this.at(-1)
        }
        return -1
    };

    const arr = [1, 2, 3];
    arr.last(); //  Expected output: 3
 */

/* Problem 86: LeetCode: Group By
    Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will
    return a grouped version of the array.

    A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all
    items in the original array with that key.
    The provided callback fn will accept an item in the array and return a string key.
    The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

    Please solve it without lodash's _.groupBy function.

    Example 1:
    Input:
    array = [
      {"id":"1"},
      {"id":"1"},
      {"id":"2"}
    ],
    fn = function (item) {
      return item.id;
    }
    Output:
    {
      "1": [{"id": "1"}, {"id": "1"}],
      "2": [{"id": "2"}]
    }
    Explanation:
    Output is from array.groupBy(fn).
    The selector function gets the "id" out of each item in the array.
    There are two objects with an "id" of 1. Both of those objects are put in the first array.
    There is one object with an "id" of 2. That object is put in the second array.

    Example 2:
    Input:
    array = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9]
    ]
    fn = function (list) {
      return String(list[0]);
    }
    Output:
    {
      "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
    }
    Explanation:
    The array can be of any type. In this case, the selector function defines the key as being the first element in the
    array.
    All the arrays have 1 as their first element so they are grouped together.
    {
      "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
    }

    Example 3:
    Input:
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    fn = function (n) {
      return String(n > 5);
    }
    Output:
    {
      "true": [6, 7, 8, 9, 10],
      "false": [1, 2, 3, 4, 5]
    }
    Explanation:
    The selector function splits the array by whether each number is greater than 5.

    Constraints:
    0 <= array.length <= 105
    fn returns a string

    Solution 1 :

    Array.prototype.groupBy = function(fn) {
        const result = {};
        for(let i = 0; i < this.length; i++) {
            const res = this[i]
            let key = fn(res);

            if (result[key]) {
                result[key].push(res);
            } else {
                result[key] = [res];
            }
        }
        return result;
    };

 */

/* Problem 87: LeetCode: Join two Arrays by ID
    Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays
    will contain an id field that has an integer value.

    joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be
    the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

    If a given id exists in one array but not the other, the single object with that id should be included in the
    result array without modification.

    If two objects share an id, their properties should be merged into a single object:

    If a key only exists in one object, that single key-value pair should be included in the object.
    If a key is included in both objects, the value in the object from arr2 should override the value from arr1.


    Example 1:
    Input:
    arr1 = [
        {"id": 1, "x": 1},
        {"id": 2, "x": 9}
    ],
    arr2 = [
        {"id": 3, "x": 5}
    ]
    Output:
    [
        {"id": 1, "x": 1},
        {"id": 2, "x": 9},
        {"id": 3, "x": 5}
    ]
    Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

    Example 2:
    Input:
    arr1 = [
        {"id": 1, "x": 2, "y": 3},
        {"id": 2, "x": 3, "y": 6}
    ],
    arr2 = [
        {"id": 2, "x": 10, "y": 20},
        {"id": 3, "x": 0, "y": 0}
    ]
    Output:
    [
        {"id": 1, "x": 2, "y": 3},
        {"id": 2, "x": 10, "y": 20},
        {"id": 3, "x": 0, "y": 0}
    ]
    Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two
    objects with id=2 are merged together. The keys from arr2 override the values in arr1.

    Example 3:
    Input:
    arr1 = [
        {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
    ]
    arr2 = [
        {"id": 1, "b": {"c": 84}, "v": [1, 3]}
    ]
    Output: [
        {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
    ]
    Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.


    Constraints:

    arr1 and arr2 are valid JSON arrays
    Each object in arr1 and arr2 has a unique integer id key
    2 <= JSON.stringify(arr1).length <= 106
    2 <= JSON.stringify(arr2).length <= 106

    Solution:
    const join = function(arr1, arr2) {
        let res = {};
        let arr = [...arr1,...arr2];
        for(let obj of arr){
            let id = obj.id;
            if(res[id]){
                res[id] = {...res[id],...obj}
            }
            else{
                res[id] = obj;
            }
        }
        return Object.values(res)
    };

 */

/* Problem 88: LeetCode: Sort By
    Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and
    those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

    You may assume that fn will never duplicate numbers for a given array.

    Example 1:
    Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
    Output: [1, 2, 3, 4, 5]
    Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

    Example 2:
    Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
    Output: [{"x": -1}, {"x": 0}, {"x": 1}]
    Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

    Example 3:
    Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
    Output: [[10, 1], [5, 2], [3, 4]]
    Explanation: arr is sorted in ascending order by number at index=1.

    Constraints:
    arr is a valid JSON array
    fn is a function that returns a number
    1 <= arr.length <= 5 * 105

    Solution 1:
    const sortBy = function(arr, fn) {
        arr.sort((a, b) => {
            return fn(a) - fn(b);
        });
        return arr;
    };

    Solution 2:
    const sortBy = function(arr, fn) {
        for(let i = 0; i < arr.length - 1; i++) {
            let min = fn(arr[i]);
            let index = i;
            for(let j = 1; j < arr.length; j++) {
                if(fn(arr[j]) < min) {
                    min = fn(arr[j]);
                    index = j;
                }
            }
            const temp = arr[i];
            arr[i] = min
            arr[index] = temp;
        }
        return arr;
    };

    Solution 3:
    const sortBy = function(arr, fn) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let temp = arr[i];
                if (fn(arr[i]) - fn(arr[j]) > 0) {
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    };

    const array1 = [5, 4, 1, 2, 3];
    const fn1 = (x) => x;

    const array2 = [{"x": 1}, {"x": 0}, {"x": -1}]
    const fn2 = (d) => d.x

    console.log(sortBy(array1, fn1));

 */

/* Problem 89: LeetCode: Flatten Deeply Nested Array

    Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

    A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

    A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the
    actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is
    less than n. The depth of the elements in the first array are considered to be 0.

    Please solve it without the built-in Array.flat method.

    Example 1:
    Input
    arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    n = 0
    Output
    [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    Explanation
    Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a
    subarray (0) is not less than n=0. Thus, no subarray should be flattened.

    Example 2:
    Input
    arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    n = 1
    Output
    [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
    Explanation
    The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1.
    However [9, 10, 11] remains unflattened because its depth is 1.

    Example 3:
    Input
    arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    n = 2
    Output
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    Explanation
    The maximum depth of any subarray is 1. Thus, all of them are flattened.

    Constraints:
    0 <= count of numbers in arr <= 105
    0 <= count of subarrays in arr <= 105
    maxDepth <= 1000

    Solution:
    const flat = (arr, n) => {
        if (n === 0) return arr;

        let result = [];

        let currentDepth = 0;

        const flattenArray = (arr, n, currentDepth) => {
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'object' && currentDepth < n) {
                    flattenArray(arr[i], n, currentDepth + 1)
                } else {
                    result.push(arr[i])
                }
            }
        }

        flattenArray(arr, n, currentDepth);
        return result;
    }

    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 1;

    flat(arr, n);

 */

/* Problem 90: LeetCode: Compact Object
    Given an object or array obj, return a compact object.

    A compact object is the same as the original object, except with keys containing falsy values removed. This
    operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys.
    A value is considered falsy when Boolean(value) returns false.

    You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

    Example 1:
    Input: obj = [null, 0, false, 1]
    Output: [1]
    Explanation: All falsy values have been removed from the array.

    Example 2:
    Input: obj = {"a": null, "b": [false, 1]}
    Output: {"b": [1]}
    Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

    Example 3:
    Input: obj = [null, 0, 5, [0], [false, 16]]
    Output: [5, [], [16]]
    Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

    Constraints:
    obj is a valid JSON object
    2 <= JSON.stringify(obj).length <= 106

    Solution 1:
    const compactObject = function(obj) {
        // return compactThis(obj);

        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.filter(Boolean).map(compactObject)
        }

        const compactedObj = {};
        for (const key in obj) {
            const value = obj[key];
            if (value) {
                compactedObj[key] = typeof value === 'object' ? compactObject(value) : value;
            }
        }
        return compactedObj;
    }

    Solution 2:
    const compactThis = function (obj) {
        const isArray = Array.isArray(obj);
        let result = isArray ? [] : {};

        for (const [key, value] of Object.entries(obj)) {
            if (value) {
                if (typeof value === 'object') {
                    // call compact this again
                    const innerResult = compactThis(value);
                    if(isArray) {
                        if (Array.isArray(innerResult)) {
                            result.push(innerResult);
                        } else if (typeof innerResult === 'object') {
                            result.push(innerResult);
                        } else {
                            result[key] = innerResult;
                        }
                    } else {
                        result[key] = innerResult;
                    }
                } else {
                    if(isArray) result.push(value);
                    else result[key] = value;
                }
            }
        }
        return result;
    };

    const compactObject = (obj) => {
        return compactThis(obj);
    }

    const obj1 = [null, 0, 5, [0], [false, 16]]  ;
    const obj2 = {"a": null, "C": 10, "b": [false, 1]};
    const obj3 = [null, 0, false, 1];
    const obj4 = [[[0]], true, false, {}, [], "", 42, 232, 4242, 942];

    console.log(compactObject(obj1));

 */

/* Problem 91: Pangrams
    A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a
    pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

    Example
    The string contains all letters in the English alphabet, so return pangram.

    Function Description
    Complete the function pangrams in the editor below. It should return the string pangram if the input string is a
    pangram. Otherwise, it should return not pangram.

    pangrams has the following parameter(s):
    string s: a string to test

    Returns
    string: either pangram or not pangram

    Input Format
    A single line with string .

    Constraints
    Sample Input 0
    We promptly judged antique ivory buckles for the next prize

    Sample Output 0
    pangram

    Sample Explanation 0
    All of the letters of the alphabet are present in the string.

    Sample Input 1
    We promptly judged antique ivory buckles for the prize

    Sample Output 1
    not pangram

    Sample Explanation 0
    The string lacks an x.

    Solution 1:
    const pangram = (input) => {
        let result = '';
        const numberOfAlphabets = 26;

        const sizeOfInput = new Set(input.split('')).size;

        if (sizeOfInput === 26) {
            return result = 'pangram'
        } else {
            return result = 'not pangram';
        }
    }

    console.log(pangram(input));

 */

/* Problem 92: Permuting Two Arrays
    There are two n-element arrays of integers, A and B. Permute them into some A and B such that the relation
    A[i] + B[i] >= k holds for all i where 0 <= i < n.

    There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A, B satisfying
    the relation exists. Otherwise, return NO.

    Example:
    A = [0, 1]
    B = [0, 2]
    k = 1
    A valid A, B is A = [1, 0] and B = [0, 2]; 1 + 0 >= 1 and 0 + 2 >= 1. Returns YES

    Function Description
    Complete the twoArrays function in the editor below. It should return a string, either YES or NO.

    twoArrays has the following parameter(s):

    int k: an integer
    int A[n]: an array of integers
    int B[n]: an array of integers
    Returns
    - string: either YES or NO

    Input Format
    The first line contains an integer q, the number of queries.

    The next q sets of 3 lines are as follows:

    The first line contains two space-separated integers n and k, the size of both arrays A and B, and the relation
    variable.
    The second line contains  space-separated integers.
    The third line contains  space-separated integers.

    Solution 1: This is when at least 1 of the combination is true
    const sort = (A, B, k) => {
        const Aaux = A.sort((a,b)=> a-b)
        const Baux = B.sort((a,b)=> b-a)
        return Aaux.some((num,index)=>(num + Baux[index] < k )) ? "NO" : "YES"
    }

    Solution 2: This is when one of the combination is false
    const sort1 = (A, B, k) => {
        const sortA = A.sort((a,b)=> a - b);
        const sortB = B.sort((a,b)=> b - a);

        for (let i = 0; i < sortA.length - 1; i++) {
            if ((sortA[i] + sortB[i]) >= k) {
                return 'YES'
            }
        }
        return 'NO'
    }

 */

/* Problem 93: Subarray Division 1
    Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
    Lily decides to share a contiguous segment of the bar selected such that:
    The length of the segment matches Ron's birth month, and,
    The sum of the integers on the squares is equal to his birth day.
    Determine how many ways she can divide the chocolate.

    Example
    s = [2,2,1,3,2]
    d = 4
    m = 2

    Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2. In
    this case, there are two segments meeting her criteria: [2,2] and [1,3].

    Function Description
    Complete the birthday function in the editor below.

    birthday has the following parameter(s):

    int s[n]: the numbers on each of the squares of chocolate
    int d: Ron's birth day
    int m: Ron's birth month
    Returns

    int: the number of ways the bar can be divided

    Input Format
    The first line contains an integer n, the number of squares in the chocolate bar.
    The second line contains n space-separated integers s[i], the numbers on the chocolate squares where 0 <= i < n.
    The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

    Solution 1:
    function birthday (s, d, m) {
        const result = [];
        let counter = m;

        if (s.length < 1) return;

        if (s.length === 1) {
            if (s[0] === d) {
                return result.push(s[0]);
            }
        }

        if (s.length > 1) {
            for (let i = 0; i < s.length; i++) {
                const slicedArray = s.slice(i, counter);
                const sum = slicedArray.reduce((acc, cur) => acc + cur, 0)
                if (sum === d) result.push(sum);
                counter = counter + 1;
            }

            return result.length;
        }

        return result.length
    }

    Solution 2:
    function birthday (s, d, m) {
        return s.map((_, i) => s.slice(i, i + m))
        .filter(bar => bar.length === m)
        .filter(bar => bar.reduce((sum, num) => sum + num, 0) === d)
        .length;
    }

    console.log(birthday([1,2,1,3,2], 2, 2));
    console.log(birthday([4], 4, 1));

 */

/* Problem 94: First and last index in sorted array

Solution 1:
const findIndexOfTarget = (arr, target) => {
    let result = [];
    let firstIndex;
    let lastIndex;


    for (let i = 0, j = arr.length - 1; i < arr.length / 2, j > arr.length / 2; i++, j--) {
        if (arr[i] === target ) {
            result.push(i);
        }
        if (arr[j] === target) {
            result.push(j);
        }
    }

    if (result.length === 0) {
        firstIndex = -1;
        lastIndex = -1
    } else {
        firstIndex = result[0];
        lastIndex = result[result.length - 1];
    }

    console.log(firstIndex, lastIndex);
}

findIndexOfTarget([2,4,5,5,5,5,5,7,9,9], 5)
findIndexOfTarget([2,4,5,5,5,5,5,7,9,9], 8)

Solution 2: Efficient Solution
    function findFirstIndex(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let firstIndex = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                firstIndex = mid;
                right = mid - 1; // Continue searching on the left side
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return firstIndex;
    }

    function findLastIndex(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let lastIndex = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                lastIndex = mid;
                left = mid + 1; // Continue searching on the right side
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return lastIndex;
    }

    // Example usage:
    let arr = [1, 3, 5, 5, 5, 7, 9, 11, 13, 15];
    let target = 5;
    let firstIndex = findFirstIndex(arr, target);
    let lastIndex = findLastIndex(arr, target);

    console.log("First index of", target, ":", firstIndex);
    console.log("Last index of", target, ":", lastIndex);

 */
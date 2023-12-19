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

/* Problem 4:Search the name and find out the number from the array
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
    if (map.has(number)) map.set(number, 1);
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

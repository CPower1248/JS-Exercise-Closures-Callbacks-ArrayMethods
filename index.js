// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * - counter1 will store the updated data within the function and continue to count up. counter2 will return the processed data but will not store the updated 
 *   information so it will return 1 everytime.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * - counter1, because the updated data remains stored withing the closure.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * - counter1 is preferable when you want the number to increase with every function call. counter2 is preferable when you want the counter to always return the initial +1.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3)
}
// console.log(inning(home))
// console.log(inning(home))
// console.log(inning(home))
// console.log(inning(home))
// console.log(inning(home))

// function finalScore(callback, numOfInnings){
//     let score = {
//         home: 0,
//         away: 0
//     }
//     for (let i = 0; i < numOfInnings; i++){
//         let result = callback();
//         console.log(score.home += result)
//     }     
//     for (let i = 0; i < numOfInnings; i++){
//         let result = callback();
//         console.log(score.away += result)
//     }
//     return score
// }
// console.log(finalScore(inning, 9))

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
"Home": 11,
"Away": 5,
}

*/ 

function finalScore(callback, numOfInnings){
  let score = {
      home: 0,
      away: 0
  }
  for (let i = 0; i < numOfInnings; i++){
      let resultHome = callback();
      let resultAway = callback();
      score.home += resultHome;
      score.away += resultAway;
  }
  return score
}
console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings
// scoreboard(getInningScore, inning, 9)
and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(getInning, getTeam1, getTeam2) {
  return console.log(`${getInning} inning: ${getTeam2} - ${getTeam1}`)
}

function scoreboard(callback, callbackGet, numOfInnings){
  let score = {
      home: 0,
      away: 0
  }
  for (let i = 0; i < numOfInnings; i++){
      let resultHome = callback();
      let resultAway = callback();
      score.home += resultHome;
      score.away += resultAway;
      callbackGet(i + 1, score.home, score.away)
  }
  return score
}
console.log(scoreboard(inning, getInningScore, 9))

//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product


 function twoNumbers() {
  let number1 = parseInt(prompt(' Enter one number: '));
  let number2 = parseInt(prompt(' Enter a second number: '));
  let total = 0;

  for (let i = 0; i < number2; i++) {
    total += number1;

  }
  console.log("total is", total);

  return total;
}

 const answer1 = twoNumbers();


const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

/*
vowelOrConsonant = ('string') => {
  const characters = string.split('');
  const vowel= [];
  const consonants = [];

  const userInput = 'vowels';

  for (let i=0; i < characters.length; i++) {
if (characters[i] === 'a') {
vowels.push(characters[i])
} else if (characters[i] === 'e'){
  vowels.push(characters[i])
}
else if (characters[i] === 'i'){
vowels.push(characters[i])
  }
else if (characters[i] === 'o'){
vowels.push(characters[i])
}
else if (characters[i] === 'u') {
vowels.push(characters[i])
  }
  else {
    consonants.push(characters[i])
  }

  return results

  vowelOrConsonant = () => {
    let userInput = prompt("Please enter a string: ");
    let vowels = [];
    let consonants = [];
  
      for (i = 0; i < userInput.length; i++) {
    let characters;
  
    if (characters[i] === 'a'|| characters[i] === 'e' || characters[i] === 'i' || characters[i] === 'o'|| characters[i] === 'u') {
      vowels.push(characters[i])
    }
  
    else {
      consonants.push(characterToAssess);
    }
  
      }
    console.log("Our final vowel array is: ");
    console.log("Our final constanant array is: ");
  
    let userRequest = prompt(
      "Do you want your vowels or consonants first?  Type 'vowels' for vowels first, or 'consonants' for consonants first."
    );
  
    let reply;
  
    if (userRequest == "vowels") {
      reply = vowels.concat(consonants);
    } else {
      reply = consonants.concat(vowels);
    }
    console.log(reply);
  
  }
  
  vowelOrConsonant();

  console.log(vowels)
  console.log(consonants)
  console.log(vowels.concat(consonants))

  return vowels.concat(consonants)
}

/*const answer2 = vowelOrConsonant()


const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2

*/


//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).
//The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, 
//but if the player finds the number, then the program must show a congratulations message (alert) 
//with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities 
//each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used
//@return {string} win / gameOver => the string that says if the user wasted the 
//three oportunities showing the fails numbers or the name if the player wins
function getUser() {

  const playerName = prompt("What is your name?")
  console.log(playerName);

  /*function smallGame() {*/

    var player = {
    name: playerName, 
    lives: 3,
    fail:[]
  };  
while ( true ) {
  const dealer = Math.floor(Math.random() * 40) + 10;
  console.log(dealer);
  
for (i = 1; i < 4; i++) {
  var playerguess = parseInt(prompt("Please guess a number between 10 and 50"));

  if(playerguess == dealer) {
     alert("Congrats" + playerName.toUpperCase() + "You guessed correctly");
     return player;
    break; }
    else {
       player.fail.push(playerguess);
      player.lives--;
       console.log(player);
       alert("you guessed wrong");
    }
  }
  if (player.lives===0) {
alert("you lose");
    }
    let answer = prompt("do you wish to play again y or n");
     if ( answer != 'y'){
       break;
  }
  
 }
}
getUser();




//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

/*sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];


let sortBy = prompt( "We have a libry of books each book has title, author, and libray ID Information \n would you like this to be sorted by title author name or book id?")

let titleArray = [];

for (i =0; i < library.length; i++) {
if (sortBy == "title") {

let item = library[i].title;
titleArray.push(item);

} else if (sortBy == "author") {

  item = library[i].author;
  authorArray.push(item);


} else if (sortBy == "libraryid"){
  item = library[i].libraryID;
  idArray.push(item);
}
else{
  alert(" you have entered an invalid entry")
}

  /*console.log("before the loop:  ", titleArray)
  let item = library[i].title;
  console.log(item);
  titleArray.push(item);
  console.log("after for loop: ", titleArray)
}*/

/*
titleArray.sort(function(a,b) 
{
  return b.length - a.length

})

console.log



 console.log("after sorting", titleArray);


  return 
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
*/
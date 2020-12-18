
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
//hint

//@param {string}
//@return {character} => array of characters



vowelOrConsonant = (string) => {

  let input = prompt("enter a word");

  let vowels = [];   //create arrays
  let consonants = [];
  
  for ( i = 0; i < input.length; i ++) {

    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      vowels.push(input[i]);
      } else {
        consonants.push(input[i]);
      }
    }

  let userRequest = prompt("would you like the vowels first or consonants first?");

  let reply; // declare reply

    if (userRequest == "vowels") {
      reply = vowels.concat(consonants); 
    } else {
      reply = consonants.concat(vowels);
    }
    return reply;
}
vowelOrConsonant();


const answer2 = vowelOrConsonant()


const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




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
guessTheNumber  = () => {

  const playerName = prompt("What is your name?")
  console.log(playerName);

    var player = {
    name: playerName, 
    lives: 3,
    fail:[]
  };  
  const dealer = Math.floor(Math.random() * 40) + 10;
  console.log(dealer);
  
for (i = 1; i < 4; i++) {
  var playerguess = parseInt(prompt("Please guess a number between 10 and 50"));

  if(playerguess === dealer) {
     alert("Congrats" + playerName.toUpperCase() + "You guessed correctly");
     return ("Congrats" + playerName.toUpperCase() + "You guessed correctly");
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
  
  return (`${player.name} loses. Fail numbers were ${player.fail}`);
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {

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


let sortBy = prompt( "We have a libary of books each book has title, author, and libray ID Information \n would you like this to be sorted by title author name or book id?");


  if (sortBy == "title") {

    library.sort(function(a,b) 
{
  return b.title.length - a.title.length;  
  
  
  // alphorder (just soemthing random. disregard for the assignment)

  /*const bupper = b.title.toUpperCase();
  const aupper = a.title.toUpperCase();

  if (bupper > aupper) {
    return 1; 
  } else if (aupper > bupper) {
    return -1; 
  }else {
    return 0; 
  }*/
})

const titleArray = [];

for(i = 0; i < library.length; i++) {
  titleArray.push(library[i].title);      //pushing the titles in order into the title array
}

return titleArray.join(";"); //tells to join the titles with semi colons 

} else if (sortBy == "author") {
  library.sort(function(a,b) 
{
  return b.author.length - a.author.length;

})

const authorArray = [];

for(i = 0; i < library.length; i++) {
  authorArray.push(library[i].author);      //pushing the titles in order into the title array
}

return authorArray.join(";"); //tells to join the titles with semi colons 

  
} else if (sortBy == "libraryid"){

  library.sort(function(a,b) 
  {
    return b.libraryID - a.libraryID;
  })
  
  const libraryidArray = [];
  
  for(i = 0; i < library.length; i++) {
    libraryidArray.push(library[i].libraryID);      //pushing the titles in order into the title array
  }
  
  return libraryidArray.join(";"); //tells to join the titles with semi colons 

}
else{
  alert(" you have entered an invalid entry");
}
return ("you have entered an invalid entry");
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4

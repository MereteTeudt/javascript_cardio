// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'


function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let splitString = str.split("");
  var x = splitString[0];
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  let isPalindrome = false;
  if (joinArray === str)
  {
    isPalindrome = true;
  }
  return isPalindrome;
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let number = "" + int;
  let splitString = number.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;

}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

  let strLower = str.toLoweCase();

  //splits the string into each word
  let splitString = strLower.split(' ');

  for (let i = 0; i < splitString.length; i++)
  {
    //splits word[i] into letters
    let wordSplit = splitString[i].split('');

    //makes the first letter upper case
    wordSplit[0] = wordSplit[0].toUpperCase();

    //joins the letters back to a word
    wordJoin = wordSplit.join('');

    //changes word[i] in the array to the capitalized word
    splitString[i] = wordJoin;
  }
  //turns the array of words back into a string
  let joinArray = splitString.join(' ');

  return joinArray;
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  var splitString = str.split("");
  var arrayCount = [];
  var maxChar = 0;
  for (let i = 0; i < splitString.length; i++)
  {
    let amount = 0;

    for (let j = 0; j < splitString.length; j++)
    {
      if(splitString[i] === splitString[j])
      {
        amount ++;
      }
    }
    arrayCount.push(amount);
  }
  var maxCount = Math.max(...arrayCount);
  charIndex = arrayCount.indexOf(maxCount);
  maxChar = splitString[charIndex];
  return maxChar;

}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3,
//instead of the number, print "Fizz", for multiples of 5 print "Buzz". 
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}

for (var i = 1; i <= 100; i++)
{
  var log = '' + i;
  if(i % 3 == 0 && i % 5 == 0)
  {
    log = 'Fizz';
  }
  else if(i % 5 == 0)
  {
    log = 'Buzz';
  }
  else if(i % 3 == 0)
  {
    log ='FizzBuzz'
  }

  console.log(log);
}

//Call Function
const output = fizzBuzz();

console.log(output);

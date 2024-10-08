const inputField = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const output = document.getElementById("result");
let isPalindrome = false;

//button event listener for the check button
//will alert if the input field contains an empty string. Otherwise will move forward with serialization and then other checks.
checkBtn.addEventListener("click", () => {
  if(inputField.value == ""){
    alert("Please input a value");
  }else{
    checkInputValues();
  }
})

function checkInputValues(){ 
  //Takes each character of the input string and puts them into a list
  let inputWord = inputField.value;
  let chars = inputWord.split("");
  chars = cleanInput(chars);
  inputWord = chars.join("").toLowerCase();

  //if there is only one character it is a palindrome
  if(chars.length == 1){
    isPalindrome = true;
    outputToUser(isPalindrome, inputWord);
  }

  //reverses chars list and joins them back into a string
  chars = chars.reverse();
  const inputReverse = chars.join("").toLowerCase();


  //Does general checking for serialized inputs
  if(inputWord === inputReverse){
    isPalindrome = true;
    outputToUser(isPalindrome, inputField.value);
  }else{
    isPalindrome = false;
    outputToUser(isPalindrome, inputField.value);
  }
}

//pushes output to user stating whether their word is/is not a palindrome.
function outputToUser(isPalindrome, word){
  if(isPalindrome){
    output.innerHTML = `${word} is a palindrome`;
  }else{
    output.innerHTML = `${word} is not a palindrome`
  }
}

//cleans the user input to make checking if it is a palindrome easy
function cleanInput(wordArray){
  let regex = /[a-zA-Z0-9]/;
  let toRemove = [];

  //loops and adds every non-normal letter/number to a to remove function
  for (char of wordArray){
    if(regex.test(char) == false){
      toRemove.push(char);
    }
  }

  //removes every item added to the toRemove list
  for (item of toRemove){
    wordArray.splice(wordArray.indexOf(item), 1);
  }

  return wordArray;
}

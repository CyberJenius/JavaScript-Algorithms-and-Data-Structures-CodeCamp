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
  const inputWord = inputField.value;
  const chars = inputWord.split("");

  //if there is only one character it is a palindrome
  if(chars.length == 1){
    isPalindrome = true;
    outputToUser(isPalindrome, inputWord);
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

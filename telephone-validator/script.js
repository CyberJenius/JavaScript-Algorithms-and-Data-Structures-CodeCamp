const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

const checkInput = () => {
  if(userInput.value === ""){
    alert("Please provide a phone number");
    return;
  }else if(!userInput.value.charAt(0).match(/d/g)){
    return false;
  }else if(userInput.value.trim().match(/([1]?\s?\(\d{3}\)\s?\d{3}\s?\d{4})|([1]?\s?\(\d{3}\)\-?\d{3}\-?\d{4})|([1]?\s?\(\d{3}\)\s?\d{3}\-?\d{4})|([1]?\s?\d{3}\s?\d{3}\s?\d{4})|([1]?\s?\d{3}\-?\d{3}\-?\d{4})|([1]?\s?\d{3}\)\s?\d{3}\-?\d{4})/g)){
    let input = userInput.value.trim().replace(/[^\w]/g,"");
    if(input.length === 11 && input.charAt(0) === "1"){
      console.log(input);
      return true;
    } else if(input.length === 10){
      console.log(input);
      return true;
    } else {
      console.log(input);
      return false;
    }
  }else{
    console.log(userInput.value);
    return false;
  }
}

const clearResults = () => {
  results.textContent = "";
}

const checkResults = () => {
  if(checkInput()){
    results.innerHTML += (`<br>Valid US number: ${userInput.value}`);
    return;
  }else if(userInput.value === ""){
    return;
  }else{
    results.innerHTML += (`<br>Invalid US number: ${userInput.value}`);
    return;
  }
}

checkButton.addEventListener("click", checkResults);
clearButton.addEventListener("click", clearResults);
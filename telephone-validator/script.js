const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

const checkInput = () => {
  if(userInput.value === ""){
    alert("Please provide a phone number");
  } else {
    
  }
}

const clearResults = () => {
  results.textContent = "";
}

checkButton.addEventListener("click", checkInput);
checkButton.addEventListener("click", clearResults);
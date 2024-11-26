const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

checkNumsOnly = (input) => {
  if(input.includes(" ")){
    let array = input.split(" ");
    console.log(array);
  } else {
    if(input.length === 10){
      const part1 = input.slice(0, 2);
      const part2 = input.slice(3, 6);
      const part3 = input.slice(7);
    }else if(input.length === 11){
      const part1 = input.getCharAt(0);
      const part2 = input.slice(1, 3);
      const part3 = input.slice(4, 7);
      const part4 = input.slice(8)
    }
  }
}

const checkInput = () => {
  console.log(userInput.value.match(/([0-9]+\s[0-9]+\s[0-9]+\s[0-9]+)|([0-9]+\s[0-9]+\s[0-9]+)|(\d+)/));
  if(userInput.value === ""){
    alert("Please provide a phone number");
  } else if(userInput.value.match(/([0-9]+\s[0-9]+\s[0-9]+\s[0-9]+)|([0-9]+\s[0-9]+\s[0-9]+)|([0-9]+\s[0-9]+)|(d+)/)){
    console.log(userInput.value);
    checkNumsOnly(userInput.value);
  } else {
    const numCharRegex = /[0-9\(\)\-]/g

    console.log(userInput.value);
  }
}

const clearResults = () => {
  results.textContent = "";
}

checkButton.addEventListener("click", checkInput);
checkButton.addEventListener("click", clearResults);
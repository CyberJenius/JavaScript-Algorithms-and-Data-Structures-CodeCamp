const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

const checkInput = () => {
  if(userInput.value === ""){
    alert("Please provide a phone number");
    return;
  }else if(userInput.value.trim().match(/[1]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  } else if(userInput.value.trim().match(/[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  } else if(userInput.value.trim().match(/[1]\s[0-9][0-9][0-9]\-[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  } else if(userInput.value.trim().match(/[0-9][0-9][0-9]\-[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  } else if(userInput.value.trim().match(/[1]\s\([0-9][0-9][0-9]\)\s[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  } else if(userInput.value.trim().match(/[1]\s\([0-9][0-9][0-9]\)\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  }else if(userInput.value.trim().match(/[1]\([0-9][0-9][0-9]\)[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value)
    return true;
  } else if(userInput.value.trim().match(/\([0-9][0-9][0-9]\)[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value)
    return true;
  } else if(userInput.value.trim().match(/[1][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  } else if(userInput.value.trim().match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)){
    console.log(userInput.value);
    return true;
  }else {
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
  }else{
    results.innerHTML += (`<br>Invalid US number: ${userInput.value}`);
    return;
  }
}

checkButton.addEventListener("click", checkResults);
clearButton.addEventListener("click", clearResults);
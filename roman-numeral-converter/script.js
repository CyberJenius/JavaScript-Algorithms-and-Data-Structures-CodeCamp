const input = document.getElementById("number");
const outField = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const convert = () => {

  if(input.value === ""){
    outField.innerHTML = `Please enter a valid number`;
    return;
  } else if(parseInt(input.value) <= 0){
    outField.innerHTML = `Please enter a number greater than or equal to 1`;
    return;
  }else if(parseInt(input.value) >= 4000){
    outField.innerHTML = `Please enter a number less than or equal to 3999`;
    return;
  }
  let output = "";
  output = decimalToRoman(input.value, output);
  outField.innerHTML = output;
}

const decimalToRoman = (input) => {
  const inputArr = input.split("");
  let digitOne = "";
  let digitTwo = "";
  let digitThree = "";
  let digitFour = "";

  //deteremines which functions to call based on length of inputArr
  if(inputArr[3]){
    digitOne = digitOneToRoman(parseInt(inputArr[3]), "");
    digitTwo = digitTwoToRoman(parseInt(inputArr[2]), "");
    digitThree = digitThreeToRoman(parseInt(inputArr[1]), "");
    digitFour = digitFourToRoman(parseInt(inputArr[0]), "");
  } else if (inputArr[2]){
    digitOne = digitOneToRoman(parseInt(inputArr[2]), "");
    digitTwo = digitTwoToRoman(parseInt(inputArr[1]), "");
    digitThree = digitThreeToRoman(parseInt(inputArr[0]), "");
  } else if(inputArr[1]){
    digitOne = digitOneToRoman(parseInt(inputArr[1]), "");
    digitTwo = digitTwoToRoman(parseInt(inputArr[0]), "");
  } else if(inputArr[0]){
    digitOne = digitOneToRoman(parseInt(inputArr[0]), "");
  }

  return digitFour + digitThree + digitTwo + digitOne;

}

const digitOneToRoman = (digit, output) => {
  if(digit !== 0){
    output = output + "I";
    digit--;
  }

  //special cases for 3 to 4, 4 to 5, and 8 to 9
  if(output === "IIII"){
    output = "IV";
  } else if(output === "IVI"){
    output = "V";
  } else if(output === "VIIII"){
    output = "IX";
  }

  //If checker statement for continuting recursion/ending recursion
  if(digit !== 0){
    return digitOneToRoman(digit, output);
  } else {
    return output;
  }
}

const digitTwoToRoman = (digit, output) => {
  if(digit != 0){
    output = output + "X";
    digit--;
  }

  //special cases for 30 to 40, 40 to 50, and 80 to 90
  if(output === "XXXX"){
    output = "XL";
  } else if(output === "XLX"){
    output = "L";
  } else if(output === "LXXXX"){
    output = "XC";
  }

  //If checker statement for continuting recursion/ending recursion
  if(digit !== 0){
    return digitTwoToRoman(digit, output);
  } else {
    return output;
  }
}

const digitThreeToRoman = (digit, output) => {
  if(digit !== 0){
    output = output + "C";
    digit--;
  }

  //special cases for 300 to 400, 400 to 500, and 800 to 900
  if(output === "CCCC"){
    output = "CD";
  } else if(output === "CDC"){
    output = "D";
  } else if(output === "DCCCC"){
    output = "CM";
  }

    //If checker statement for continuting recursion/ending recursion
    if(digit !== 0){
      return digitThreeToRoman(digit, output);
    } else {
      return output;
    }
}

const digitFourToRoman = (digit, output) => {
  if(digit !== 0){
    output = output + "M";
    digit--;
  }

    //If checker statement for continuting recursion/ending recursion
    if(digit !== 0){
      return digitFourToRoman(digit, output);
    } else {
      return output;
    }
}

convertBtn.addEventListener("click", convert);

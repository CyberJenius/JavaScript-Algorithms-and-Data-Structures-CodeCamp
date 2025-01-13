let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
//above variables provided by FreeCodeCamp


const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const total = document.getElementById("total");
const changeInDrawer = document.getElementById("change");

total.innerHTML += `${price}`;
changeInDrawer.innerHTML += `<br> Penny: ${cid[0][1]}
 <br> Nickel: ${cid[1][1]}
 <br> Dime: ${cid[2][1]}
 <br> Quarter: ${cid[3][1]}
 <br> One: ${cid[4][1]}
 <br> Five: ${cid[5][1]} 
 <br> Ten: ${cid[6][1]}
 <br> Twenty: ${cid[7][1]}
 <br> One Hundred: ${cid[8][1]}`


 const calculateChange = (funds, newCID) => {
  let totalCID = newCID[0][1] + newCID[1][1] + newCID[2][1] + newCID[3][1] + newCID[4][1] + newCID[5][1] + newCID[6][1] + newCID[7][1] + newCID[8][1];

  const startDif = parseFloat(funds - price).toFixed(2);
  let difference = funds - price;
  const moneyVals = [100, 20, 10, 5, 1, .25, .10, .05, .01];
  let changeArr = [];
  let checkArr = [];
  let i = 8;
  console.log(parseFloat(totalCID).toFixed(2));
    if(parseFloat(totalCID).toFixed(2) >= parseFloat(startDif)){ 
        moneyVals.forEach((val)=> {
        if(difference / val > 1 && newCID[i][1] > 0){
          if((Math.floor(difference / val) * val) > newCID[i][1]){
            checkArr.push(newCID[i][1]);
            changeArr.push(newCID[i][0] + ": $" + newCID[i][1]);
            difference = difference - newCID[i][1];
            totalCID = parseFloat(parseFloat(totalCID - newCID[i][1]).toFixed(2));
            newCID[i][1] = 0;
          }else {
            newCID[i][1] = parseFloat(parseFloat(newCID[i][1] - Math.floor(difference / val) * val).toFixed(2));
            checkArr.push(Math.floor(difference / val) * val);
            changeArr.push(newCID[i][0] + ": $" + (Math.floor(difference / val) * val));
            totalCID -= difference / val * val;
            difference = parseFloat(difference - Math.floor(difference / val) * val).toFixed(2);
          }
        } 
        i--;
      })
    } else {
      return `Status: INSUFFICIENT_FUNDS`;
    }

    console.log(difference);

    console.log(changeArr);
    console.log(startDif);
    console.log(totalCID);
    console.log(parseFloat(checkArr.reduce((a, b) => a + b, 0).toFixed(2)));
    
    if(totalCID === 0 || parseFloat(totalCID).toFixed(2) === startDif){
      let returnString = "Status: CLOSED ";
      changeArr.forEach((val) => {
        returnString += val + " ";
      })
      return returnString;
    }else{
      let returnString = "Status: OPEN ";
      changeArr.forEach((val) => {
        returnString += val + " ";
      })
      return returnString;
    }
 }

 const updateDrawer = (newCID) => {
  changeInDrawer.innerHTML = `<br> Penny: ${parseFloat(newCID[0][1]).toFixed(2)}
  <br> Nickel: ${parseFloat(newCID[1][1]).toFixed(2)}
  <br> Dime: ${parseFloat(newCID[2][1]).toFixed(2)}
  <br> Quarter: ${parseFloat(newCID[3][1]).toFixed(2)}
  <br> One: ${parseFloat(newCID[4][1]).toFixed(2)}
  <br> Five: ${parseFloat(newCID[5][1]).toFixed(2)} 
  <br> Ten: ${parseFloat(newCID[6][1]).toFixed(2)}
  <br> Twenty: ${parseFloat(newCID[7][1]).toFixed(2)}
  <br> One Hundred: ${parseFloat(newCID[8][1]).toFixed(2)}`
 }

 purchaseBtn.addEventListener("click", () => {
  let newCID = [...cid];
  console.log(newCID);
  if(cashInput.value < price){
    alert("Customer does not have enough money to purchase the item")
    return;
  }else if(price === Number(cashInput.value)){
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    return;
  }else if(price < cashInput.value){
    changeDue.innerHTML = calculateChange(parseFloat(cashInput.value), newCID);
  }
  updateDrawer(newCID);
 });



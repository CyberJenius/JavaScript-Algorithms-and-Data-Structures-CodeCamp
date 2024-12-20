let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
//above variables provided by FreeCodeCamp

let totalCID = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];

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


 const calculateChange = (funds) => {
  const startDif = funds - price;
  let difference = funds - price;
  const moneyVals = [100, 20, 10, 5, 1, .25, .10, .05, .01];
  let changeArr = [];
  let checkArr = [];
  let i = 8;
    moneyVals.forEach((val)=> {
      if(difference / val > 1 && cid[i][1] > 0){
        totalCID += cid[i][1];
        if((Math.floor(difference / val) * val) > cid[i][1]){
          checkArr.push(cid[i][1]);
          changeArr.push(cid[i][0] + ": $" + cid[i][1]);
          difference = difference - cid[i][1];
          totalCID -= cid[i][1];
          cid[i][1] = 0;
        }else {
          cid[i][1] = cid[i][1] - Math.floor(difference / val) * val;
          checkArr.push(Math.floor(difference / val) * val);
          changeArr.push(cid[i][0] + ": $" + (Math.floor(difference / val) * val));
          difference = (difference - Math.floor(difference / val) * val).toFixed(2);
          totalCID -= Math.floor(difference / val) * val;
        }
      } 
      i--;
    })
    if(parseFloat(checkArr.reduce((a, b) => a + b, 0).toFixed(2)) != startDif || difference > 0 || totalCID < startDif){
      return `Status: INSUFFICIENT_FUNDS`;
    }else if(cid[0][1] === 0 && cid[1][1] === 0 && cid[2][1] === 0 && cid[3][1] === 0 && cid[4][1] === 0 && cid[5][1] === 0 && cid[6][1] === 0 && cid[7][1] === 0 && cid[8][1] === 0){
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

 const updateDrawer = () => {
  changeInDrawer.innerHTML = `<br> Penny: ${parseFloat(cid[0][1].toFixed(2))}
  <br> Nickel: ${parseFloat(cid[1][1].toFixed(2))}
  <br> Dime: ${parseFloat(cid[2][1].toFixed(2))}
  <br> Quarter: ${parseFloat(cid[3][1].toFixed(2))}
  <br> One: ${parseFloat(cid[4][1].toFixed(2))}
  <br> Five: ${parseFloat(cid[5][1].toFixed(2))} 
  <br> Ten: ${parseFloat(cid[6][1].toFixed(2))}
  <br> Twenty: ${parseFloat(cid[7][1].toFixed(2))}
  <br> One Hundred: ${parseFloat(cid[8][1].toFixed(2))}`
 }

 purchaseBtn.addEventListener("click", () => {
  if(cashInput.value < price){
    alert("Customer does not have enough money to purchase the item")
    return;
  }else if(Number(cashInput.value) === price){
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }else{
    changeDue.textContent = calculateChange(cashInput.value);
  }
  updateDrawer();
 });



let price = 37.62;
let cid = [ [ 'PENNY', 0.13 ],
[ 'NICKEL', 0.45 ],
[ 'DIME', 0.3 ],
[ 'QUARTER', 0.5 ],
[ 'ONE', 11 ],
[ 'FIVE', 0 ],
[ 'TEN', 0 ],
[ 'TWENTY', 0 ],
[ 'ONE HUNDRED', 0 ] ];

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
  let totalCID = (newCID[0][1] + newCID[1][1] + newCID[2][1] + newCID[3][1] + newCID[4][1] + newCID[5][1] + newCID[6][1] + newCID[7][1] + newCID[8][1]) * 100;

  const startDif = (funds - price).toFixed(2) * 100;
  let difference = (funds - price).toFixed(2) * 100;
  const moneyVals = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let changeArr = [];
  let checkArr = [];
  let i = 8;
    if(totalCID >= startDif){ 
        moneyVals.forEach((val)=> {
        val = Number(val);
        if(difference / val >= 1 && newCID[i][1] > 0){
          if((difference / val * val) > (newCID[i][1] * 100)){
            checkArr.push(newCID[i][1]);
            changeArr.push(newCID[i][0] + ": $" + newCID[i][1]);
            difference = difference - (newCID[i][1] * 100);
            totalCID = totalCID - (newCID[i][1] * 100);
            newCID[i][1] = 0;
          }else {
            newCID[i][1] = newCID[i][1] - (((Math.floor((difference)/(val).toFixed(2)) * val) / 100));
            checkArr.push((Math.floor((difference)/(val).toFixed(2)) * val)/100);
            changeArr.push(newCID[i][0] + ": $" + ((Math.floor((difference)/(val).toFixed(2)) * val)/100));
            totalCID -= (Math.floor((difference)/(val).toFixed(2)) * val);
            difference = difference - (Math.floor((difference)/(val).toFixed(2)) * val);
          }
        } 
        i--;
      })
      if (parseFloat(checkArr.reduce((a, b) => a + b, 0).toFixed(2)) < parseFloat(startDif/100)){
        return `Status: INSUFFICIENT_FUNDS`;
      }
    }else {
      return `Status: INSUFFICIENT_FUNDS`;
    }
    
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
  let total = 0
  newCID.forEach((val) => {
    total += Number(val[1]);
  })
  if(total < Number((cashInput.value - price).toFixed(2))){
    changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
    return;
  }
  else if(Number(cashInput.value) < price){
    alert("Customer does not have enough money to purchase the item")
    return;
  }else if(price === Number(cashInput.value)){
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    return;
  }else if(price < Number(cashInput.value)){
    let total = newCID.reduce((total, val) => {
      return total + parseFloat(val[1]);
    }, 0);
    if(total < Number((cashInput.value - price).toFixed(2))){
      changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
      return;
    }else{
      changeDue.innerHTML = calculateChange(parseFloat(cashInput.value), newCID);
    }
  }
  updateDrawer(newCID);
 });



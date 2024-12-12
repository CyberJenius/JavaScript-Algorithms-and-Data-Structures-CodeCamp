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

 const purchaseItem = () => {
  
 }



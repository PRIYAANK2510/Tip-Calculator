let billAmt = 0;
let tippercent = 15;
let numberOfPeople = 2;

let tipAmt = 0.0;
let totalAmt = 0.0;

//Enter Ther Amount of Tip
function selectTip(value) {
  //If We are Selecting Pre Define Tip
  if (value != "custom") {
    tippercent = parseInt(value);
    let allbtns = document.querySelectorAll(`[id*="per"]`);
    for (let i = 0; i < allbtns.length; i++) {
      allbtns[i].classList.remove("active");
    }
    document.getElementById("custom").value = "";
    let selectedbtn = document.getElementById(`per${tippercent}`);
    selectedbtn.classList.add("active");
  }

  //If We are Selecting Custom Tip
  else {
    tippercent = document.getElementById("custom").value;
    if (tippercent == "") {
      tippercent = parseInt(0);
    }
    tippercent = parseInt(tippercent);
    let allbtns = document.querySelectorAll(`[id*="per"]`);
    for (let i = 0; i < allbtns.length; i++) {
      allbtns[i].classList.remove("active");
    }
  }
  calcBill();
}

//Enter Bill Amount
function enterBillAmt() {
  if (document.getElementById("billamt").value == "") {
    billAmt = 0;
  } else {
    document.getElementById("reset").disabled = false;
    billAmt = document.getElementById("billamt").value;
  }
  calcBill();
}

//Enter Number of Persons
function enterPersons() {
  document.getElementById("reset").disabled = false;
  if (document.getElementById("persons").value == "") {
    numberOfPeople = 2;
  } else {
    numberOfPeople = parseInt(document.getElementById("persons").value);
  }
  if (numberOfPeople == 0) {
    document.getElementById("peoplefieldparent").classList.add("peoplefieldparent-error");
  } else {
    document.getElementById("peoplefieldparent").classList.remove("peoplefieldparent-error");
  }
  calcBill();
}

//Reset Button
function reset() {
  billAmt = 0;
  tippercent = 15;
  numberOfPeople = 2;

  tipAmt = 0.0;
  totalAmt = 0.0;
  document.getElementById("reset").disabled = true;
  document.getElementById("peoplefieldparent").classList.remove("peoplefieldparent-error");
  document.getElementById("persons").value = "";
  document.getElementById("billamt").value = "";
  selectTip(15);
  calcBill();
}

//Calculate Billing
function calcBill() {
  tipAmt = parseFloat((billAmt * tippercent) / 100 / numberOfPeople);
  totalAmt = parseFloat(billAmt / numberOfPeople + tipAmt);
  if (isFinite(tipAmt) && isFinite(totalAmt)) {
    document.getElementById("tipAmt").innerText = tipAmt.toFixed(2);
    document.getElementById("totalAmt").innerText = totalAmt.toFixed(2);
  } else {
    document.getElementById("tipAmt").innerText = "--:--";
    document.getElementById("totalAmt").innerText = "--:--";
  }
}

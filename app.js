// initializing variables, both buttons and output result display
alert("POS on browser!");


let breadBtn = document.getElementById("bread");
let soapBtn = document.getElementById("soap")
let perfumeBtn = document.getElementById("perfume");
let butterBtn = document.getElementById("butter");
let ginBtn = document.getElementById("gin");
let cakeBtn = document.getElementById("cake");
let spaceBtn = document.getElementById("space");
let clearBtn = document.getElementById("clear");
let addBtn = document.getElementById("plus");
let totalBtn = document.getElementById("addtotal");



//Groceries price list

let breadPrice = 300;
let soapPrice = 150;
let perfumePrice = 1500;
let butterPrice = 400;
let ginPrice = 1300;
let cakePrice = 3000;

//instantiating items result displays

var breadDisplayResult = document.getElementById("bread_display");
var soapDisplayResult = document.getElementById("soap_display");
var perfumeDisplayResult = document.getElementById("perfume_display");
var butterDisplayResult = document.getElementById("butter_display");
var cakeDisplayResult = document.getElementById("cake_display");
var ginDisplayResult = document.getElementById("gin_display");
var totalBillResult = document.getElementById("total_bill");
var clearScreen = document.getElementById("cleared");


//now add event listerner
breadBtn.addEventListener("click", breadOutput);
soapBtn.addEventListener("click", soapOutput);
perfumeBtn.addEventListener("click", perfumeOutput);
butterBtn.addEventListener("click", butterOutput);
ginBtn.addEventListener("click", ginOutput);
cakeBtn.addEventListener("click", cakeOutput);
spaceBtn.addEventListener("click", spaceOutput);
addBtn.addEventListener("click", addOutput);
totalBtn.addEventListener("click", totalBill);
clearBtn.addEventListener("click", clear)


//Displaying output to browers
breadDisplayResult.innerHTML = 0;

soapDisplayResult.innerHTML = 0;

perfumeDisplayResult.innerHTML = 0;

butterDisplayResult.innerHTML = 0;

ginDisplayResult.innerHTML = 0;

cakeDisplayResult.innerHTML = 0;





console.log("POS");


function breadOutput() {

    breadResult = breadDisplayResult.innerHTML = breadPrice;

    breadBtn.addEventListener("click", breadOutput);
    breadResult = parseFloat(breadPrice);
    alert("Bread Added");
    if (breadBtn.addEventListener("click", breadOutput) == true){
        breadResult += breadResult;
    }
    console.log(breadResult);
    breadResult = breadDisplayResult.innerHTML = breadResult;
    
}



function soapOutput() {
    soapResult = soapDisplayResult.innerHTML = soapPrice;

    soapBtn.addEventListener("click", soapOutput);
    soapResult = parseFloat(soapPrice);
    alert("Soap Added");
    if(soapBtn.addEventListener("click", soapOutput) == true){
        soapResult += soapResult;
    }
    console.log(soapResult);
    soapResult = soapDisplayResult.innerHTML = soapResult;
    
}


function perfumeOutput() {
    perfumeResult = perfumeDisplayResult.innerHTML = perfumePrice;

    perfumeBtn.addEventListener("click", perfumeOutput);
    perfumeResult = parseFloat(perfumePrice);
    alert("Perfume Added");
    if (perfumeBtn.addEventListener("click", perfumeOutput) == true){
        perfumeResult += perfumeResult;
    }
    console.log(perfumeResult); 
    perfumeResult = perfumeDisplayResult.innerHTML = perfumeResult;

}


function butterOutput() {
    butterResult = butterDisplayResult.innerHTML = butterPrice;

    butterBtn.addEventListener("click", butterOutput);
    butterResult = parseFloat(butterPrice);
    alert("Butter Added");
    if (butterBtn.addEventListener("click", butterOutput) == true){
        butterResult += butterResult;
    }
    console.log(butterResult);
    butterResult = butterDisplayResult.innerHTML = butterResult;
  
}

function ginOutput() {
    ginResult = ginDisplayResult.innerHTML = ginPrice;

    ginBtn.addEventListener("click", ginOutput);
    ginResult = parseFloat(ginPrice);
    alert("Gin Added");
    if (ginBtn.addEventListener("click", ginOutput) == true){
        ginResult += ginResult;
    }
    console.log(ginResult);
    ginResult = ginDisplayResult.innerHTML = ginResult;
}



function cakeOutput() {
    cakeResult = cakeDisplayResult.innerHTML = cakePrice;

    cakeBtn.addEventListener("click", cakeOutput);
    cakeResult = parseFloat(cakePrice);
    alert("Cake Added");
    if (cakeBtn.addEventListener("click", cakeOutput) == true){
        cakeResult += cakeResult;
    }
    console.log(cakeResult);
    cakeResult = cakeDisplayResult.innerHTML = cakeResult;
}

function spaceOutput() {
    spaceBtn.addEventListener("click", spaceOutput);
    let Ans = prompt("Would you like to add anything else? Ans: Yes or No: ");

    if (Ans == "Yes") {
        alert("By all means, go ahead...")
        //break;
    } else {
        alert("Let me bag these... for you then.");
        totalBill();
    }

}

function addOutput() {
    addBtn.addEventListener("click", addOutput);
    let addItem = prompt("What else would you like to add? (Bread, Soap, Perfume, Butter, Gin or Cake) ");
    if (addItem === "bread") 
        breadResult = breadResult + breadResult;

    if (addItem === "Soap") {
        soapResult = soapResult + soapResult ;
    }
    if (addItem === "Perfume") {
        perfumeResult = perfumeResult + perfumeResult
    }
    if (addItem === "Butter") {
        butterResult = butterResult + butterResult;
    }
    if (addItem === "Gin") {
        ginResult = ginResult + ginResult;
    }
    if (addItem === "Cake") {
        cakeResult = cakeResult + caakeResult;
    }
    else{
        alert("Select from these options: Bread, Soap, Perfume, Butter, Gin or Cake ");
    }
}

function clear(){
    clearBtn.addEventListener("click", clear);
    breadResult = breadDisplayResult.innerHTML = 0;
    soapResult = soapDisplayResult.innerHTML = 0;
    perfumeResult = perfumeDisplayResult.innerHTML = 0;
    butterResult = butterDisplayResult.innerHTML = 0;
    ginResult = ginDisplayResult.innerHTML = 0;
    cakeResult = cakeDisplayResult.innerHTML = 0;
    totalBillResult = document.getElementById("total_bill").innerText = 0;
    clearScreen =  clearScreen.innerText = "Ready";


}



function totalBill() {
    console.log(breadResult); console.log(soapResult); console.log(perfumeResult); console.log(butterResult); console.log(ginResult); console.log(cakeResult)
    let totalPurchased = breadResult + soapResult + perfumeResult + butterResult + ginResult + cakeResult;

    document.getElementById("total_bill").innerText = totalPurchased;
    /*var breadBill = document.getElementById("bread_display").value;
    console.log(breadBill)
    var soapBill = document.getElementById("soap_display").value;
    console.log(soapBill)
    var perfumeBill = document.getElementById("perfume_display").value;
    console.log(perfumeBill)
    var butterBill = document.getElementById("butter_display").value;
    console.log(butterBill)
    var ginBill = document.getElementById("gin_display").value;
    console.log(ginBill);
    var cakeBill = document.getElementById("cake_display").value;
    console.log(cakeBill) */

}
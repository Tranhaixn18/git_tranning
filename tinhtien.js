function tinh(){
    var price=document.getElementById("billamt").value;
    var discount=document.getElementById("serviceQual").value;
    var numberPeople=document.getElementById("peopleamt").value;
    if(price =="" || discount==0){
        alert("pleace enter values");
    }
    if(numberPeople=="" || numberPeople <=1){
        numberPeople=1;
        //nếu có 1 ngườ thì k hiển thị each
        document.getElementById("each").style.display="none";
    }else
    //nếu lớn hơn 1 người thì hiển thị mỗi
    document.getElementById("each").style.display="block";
    var total=price*discount/numberPeople;
    total=Math.round(total*100)/100;
    total=total.toFixed(2);
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;
};
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";
document.getElementById("calculate").onclick=function(){
    tinh();
}

// function calculateTip() {
//     var billAmt = document.getElementById("billamt").value;
//     var serviceQual = document.getElementById("serviceQual").value;
//     var numOfPeople = document.getElementById("peopleamt").value;
  
//     //validate input
//     if (billAmt === "" || serviceQual == 0) {
//       alert("Please enter values");
//       return;
//     }
//     //Check to see if this input is empty or less than or equal to 1
//     if (numOfPeople === "" || numOfPeople <= 1) {
//       numOfPeople = 1;
//       document.getElementById("each").style.display = "none";
//     } else {
//       document.getElementById("each").style.display = "block";
//     }
  
//     //Calculate tip
//     var total = (billAmt * serviceQual) / numOfPeople;
//     //round to two decimal places
//     total = Math.round(total * 100) / 100;
//     //next line allows us to always have two digits after decimal point
//     total = total.toFixed(2);
//     //Display the tip
//     document.getElementById("totalTip").style.display = "block";
//     document.getElementById("tip").innerHTML = total;
  
//   }
  
//   //Hide the tip amount on load
//   document.getElementById("totalTip").style.display = "none";
//   document.getElementById("each").style.display = "none";
  
//   //click to call function
//   document.getElementById("calculate").onclick = function() {
//     calculateTip();
  
//   };
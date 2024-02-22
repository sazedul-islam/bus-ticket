

let count = 1;
let countSeat = 40;
let buySeat = 0;
let seatLeft = countSeat - buySeat;
const seatClass = "Economoy";
let totalPrice = 0;
const seatPrice = 550;
let grandTotal = 0;
let discountPrice = 0;

const allSeat = document.querySelectorAll(".bus-seat");
for (i=0; i < allSeat.length; i++){
    const sitSelect = allSeat[i];
    // console.log(sitSelect.innerText)


    sitSelect.addEventListener("click", function () {
        if (!this.classList.contains("selected") && count <= 4) {
          const seatNumber = sitSelect.querySelector("h1").innerText;
            
          this.classList.add("selected");
          this.classList.toggle("active");

          const seatNo = document.getElementById("seat-no");
          const h5 = document.createElement("h5");
          h5.innerText =  seatNumber;
          seatNo.appendChild(h5);
         
          const seatClasses = document.getElementById("seat-class");
          const h4 = document.createElement("h4");
          h4.innerText = seatClass;
          seatClasses.appendChild(h4);
    
          const seatPrices = document.getElementById("seat-price");
          const h3 = document.createElement("h3");
          h3.innerText = seatPrice;
          seatPrices.appendChild(h3);
         
          totalPrice += seatPrice;
          const totalPrices = (document.getElementById("total-price").innerText = totalPrice);

         grandTotal = totalPrice - discountPrice;
         const grandTotals = (document.getElementById("grand-total").innerText = grandTotal);
         
          const counts = (document.getElementById("count").innerText = count);

          count ++;
          buySeat ++;
          seatLeft --;
           const seatLefts = (document.getElementById("total-bus-seat").innerText =
          seatLeft); 
     
           
        }else{
            alert("You can select maximum 4 seats at a time");
        }

    }) 

}


const bgChange = document.querySelectorAll(".bus-seat");
for (j = 0; j < bgChange.length; j++){
    const sitSelect = bgChange[j];
 
    sitSelect.addEventListener("click", function () {
   let  = document.getElementsByClassName('bus-seat')
    // console.log(sitSelect.innerText)
    if (this.classList.contains("selected") && count <= 5){
        sitSelect.classList.add('bg-[#1DD100]')
    }

})
}


const seated = document.querySelectorAll(".bus-seat");

for (let k = 0; k < seated.length; k++) {
  const seatSelector = seated[k];
  seatSelector.addEventListener("click", function () {
    if (count === 5) {
      const btnApply = document.querySelector("#btn-apply");
      btnApply.removeAttribute("disabled");
      btnApply.classList.add("active");

      btnApply.addEventListener("click", function () {
        // get the value from input field
        const inputValue = document.getElementById("input-code").value;
        const cuponCode = inputValue.split(" ").join("").toUpperCase();

        if (inputValue === "") {
          alert("Please enter your code!");
        } else if (cuponCode === "NEW15" ) {
          
          const discountElement = document.getElementById("discount-price");
          const discountPrice = totalPrice * 0.15;
          discountElement.innerText = discountPrice.toFixed(2);
          grandTotal = totalPrice - discountPrice;
          const grandTotals = (document.getElementById(
            "grand-total"
          ).innerText = grandTotal);

          function hideBtn() {
            const btnApply = document.querySelector("#btn-apply").parentNode;
            btnApply.setAttribute("hidden", "true");
            btnApply.classList.remove("active");
          }
          setTimeout(hideBtn, 100);

        } else if (cuponCode === "COUPLE20" ) {
         
          const discountElement = document.getElementById("discount-price");
          const discountPrice = totalPrice * 0.2;
          discountElement.innerText = discountPrice.toFixed(2);
          grandTotal = totalPrice - discountPrice;
          const grandTotals = (document.getElementById(
            "grand-total"
          ).innerText = grandTotal);

          function hideBtn() {
            const btnApply = document.querySelector("#btn-apply").parentNode;
            btnApply.setAttribute("hidden", "true");
            btnApply.classList.remove("active");
          }
          setTimeout (hideBtn, 100);

        } else {
          alert("Invalid Code, Please enter a valid code.");
        }
      });
    }
  });
}

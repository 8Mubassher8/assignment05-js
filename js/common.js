function selectElementById(id) {
    const element = document.getElementById(id);
    return element;
  }
  
  // show History
  function showHistory(cureentAreaAmount, title) {
    // show history
    const historyDiv = ` <div class="my-6 border-2 h-24 rounded-lg max-w-screen-xl mx-auto px-4 py-4 text-xl font-bold">
    ${cureentAreaAmount} TK  ${title.innerText}.
    <p class="font-normal">Date : ${new Date()}</p>
   
  </div>`;
    const div = document.createElement("div");
    div.innerHTML = historyDiv;
    selectElementById("history-container").appendChild(div);
    console.log(historyDiv);
  }
  
  
  // common fields selection
  function commonFields() {
    const totalDonationBalanceField = selectElementById("total-balance");
    let totalDonationBalance = parseFloat(totalDonationBalanceField.innerText);
    return totalDonationBalance;
  }
  
  // calculate donation;
  function commonCalculation(
    areaAmount,
    currentDonateAmount,
    areaAmountField,
    totalDonationBalance,
    AreaTitle
  ) {
  
    const cureentAreaAmount = areaAmount + currentDonateAmount;
    areaAmountField.innerText = cureentAreaAmount;
  
    const currentTotalBalance = totalDonationBalance - cureentAreaAmount;
    selectElementById("total-balance").innerText = currentTotalBalance;
  
    showHistory(cureentAreaAmount, AreaTitle);
  }
  
  
  // validation 
  function checkInputValidation(areaAmount, currentDonateAmount,areaAmountField,totalDonationBalance,AreaTitle){
    
    if(currentDonateAmount > totalDonationBalance || isNaN(currentDonateAmount) || currentDonateAmount <=0){
      document.getElementById("my_modal_5").showModal();
      return;
    }
    else if(currentDonateAmount < totalDonationBalance){
      commonCalculation(areaAmount, currentDonateAmount,areaAmountField,totalDonationBalance,AreaTitle) ;
      document.getElementById("my_modal_6").showModal();
      // document.getElementById("my_modal_5").style.display = "none";
    }
  }

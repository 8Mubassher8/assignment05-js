function calculateNoaKhaliAreaDonation() {
    totalDonationBalance = commonFields();
  
    // Get Area Amount
    const areaAmountField = selectElementById("area-amount-noakhali");
    const areaAmount = parseFloat(areaAmountField.innerText);
    console.log(areaAmount);
  
    // Area Title
    const AreaTitle = selectElementById("transaction-title1");
  
    // Get INput Field Amount
    const inputFieldNoakhali = selectElementById("input-field-noakhali");
    const currentDonateAmount = parseFloat(inputFieldNoakhali.value);
    inputFieldNoakhali.value = "";
  
    // Check Validation
    checkInputValidation(
      areaAmount,
      currentDonateAmount,
      areaAmountField,
      totalDonationBalance,
      AreaTitle
    );
  }
  
  function calculateFeniAreaDonation() {
    totalDonationBalance = commonFields();
  
    // Get Area Amount
    const areaAmountField = selectElementById("area-amount-feni");
    const areaAmount = parseFloat(areaAmountField.innerText);
    console.log(areaAmount);
  
    // Area Title
    const AreaTitle = selectElementById("transaction-title-feni");
  
    // Get INput Field Amount
    const inputFieldNoakhali = selectElementById("input-field-feni");
    const currentDonateAmount = parseFloat(inputFieldNoakhali.value);
    inputFieldNoakhali.value = "";
    // Check Validation
    checkInputValidation(
      areaAmount,
      currentDonateAmount,
      areaAmountField,
      totalDonationBalance,
      AreaTitle
    );
  }
  
  function calculateDonationForQuota() {
    totalDonationBalance = commonFields();
  
    // Get Area Amount
    const areaAmountField = selectElementById("amount-for-quota-movement");
    const areaAmount = parseFloat(areaAmountField.innerText);
    console.log(areaAmount);
  
    // Area Title
    const AreaTitle = selectElementById("transaction-title-quota");
  
    // Get INput Field Amount
    const inputFieldQuota = selectElementById("quota-movement-amount-filed");
    const currentDonateAmount = parseFloat(inputFieldQuota.value);
    inputFieldQuota.value = "";
    // Check Validation
    checkInputValidation(
      areaAmount,
      currentDonateAmount,
      areaAmountField,
      totalDonationBalance,
      AreaTitle
    );
  }
  
  selectElementById("donate-now-1").addEventListener("click", function () {
    calculateNoaKhaliAreaDonation();
  });
  selectElementById("donate-now-btn-2").addEventListener(
    "click",
    calculateFeniAreaDonation
  );
  selectElementById("donate-now-btn-3").addEventListener(
    "click",
    calculateDonationForQuota
  );
  
  
  selectElementById("blog-section").addEventListener("click",function(){
     window.location.href = "../blog.html";
  });
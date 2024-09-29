// Change the background color of button

const donateBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");


function activeButton() {
  historyBtn.addEventListener('click',function(){
      donateBtn.classList.remove('bg-[#B4F461]');
      historyBtn.classList.add('bg-[#B4F461]');
      selectElementById('card-container').classList.add('hidden');
      selectElementById('history-container').classList.remove('hidden');
  })
  donateBtn.addEventListener('click',function(){
      donateBtn.classList.add('bg-[#B4F461]');
      historyBtn.classList.remove('bg-[#B4F461]');
      selectElementById('card-container').classList.remove('hidden');
      selectElementById('history-container').classList.add('hidden');
  })
}

function selectElement(id) {
  const element = document.querySelector(id);
  return element;
}


activeButton();


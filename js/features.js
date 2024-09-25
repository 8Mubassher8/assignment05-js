

function selectButton(id) {
    const commonButton = document.getElementById(id);
    return commonButton;

}




function changeButtonsBg() {
    const historyButton = selectButton('history-btn');
    const donationButton = selectButton('donation-btn');

    historyButton.addEventListener('click', function () {
        historyButton.classList.add('bg-[#B4F461]');
        donationButton.classList.remove('bg-[#B4F461]')
    })


    donationButton.addEventListener('click', function () {
        historyButton.classList.remove('bg-[#B4F461]');
        donationButton.classList.add('bg-[#B4F461]');
    })

}

changeButtonsBg();

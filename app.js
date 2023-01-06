'use strict';
const bill = document.querySelector('.bill'),
	tipBtn = document.querySelectorAll('.buttons__container button'),
	tipAmount = document.querySelector('.tip__amount'),
	tipTotal = document.querySelector('.tip__total'),
	numberOfPeople = document.querySelector('.people'),
	number = document.querySelector('.tip__amount'),
	resetBtn = document.querySelector('.reset');

tipBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		let selectedTip = e.target.dataset.tip;
		if (selectedTip === 'custom') {
			let customTipValue = prompt('Enter tip value') / 100;
			let customTip = Math.floor(bill.value * customTipValue);
			let customTotal = Math.floor(customTip * numberOfPeople.value);
			tipAmount.textContent = `$${customTip}`;
			tipTotal.textContent = `$${customTotal}`;
		} else {
			let tip = Math.floor(bill.value * selectedTip);
			let total = Math.floor(tip * numberOfPeople.value);
			tipAmount.textContent = `$${tip}`;
			tipTotal.textContent = `$${total}`;
		}
	});
});
resetBtn.addEventListener('click', () => {
	tipAmount.textContent = `$0.00`;
	tipTotal.textContent = `$0.00`;
	bill.value = '';
	numberOfPeople.value = '';
});

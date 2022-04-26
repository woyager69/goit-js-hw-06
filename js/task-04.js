let counterValue = 0;
const countDownBtn = document.querySelector('button[data-action="decrement"]');
const countUpBtn = document.querySelector('button[data-action="increment"]');
const counterSpan = document.querySelector("#value");
countDownBtn.addEventListener('click', () => { counterValue -= 1;  counterSpan.textContent = counterValue;});
countUpBtn.addEventListener('click', () => { counterValue += 1; counterSpan.textContent = counterValue;});
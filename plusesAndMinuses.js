// When a user clicks the + element, the count should increase by 1 on screen.
const count = document.getElementById("count");
count.innerText = 0;

const plusElement = document.getElementById("plus");

plusElement.addEventListener("click", () => {
    count.innerText = parseInt(count.innerText) + 1;
})
// When a user clicks the – element, the count should decrease by 1 on screen.
const minusElement = document.getElementById("minus");

minusElement.addEventListener("click", () => {
    count.innerText = parseInt(count.innerText) - 1;
})
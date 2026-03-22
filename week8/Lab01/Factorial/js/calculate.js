const factorial = (field) => {
  if (field === 0 || field === 1) 
    return 1
  
 let total = 1
 for (i = field-1; i > 1; i--) {
	 field *= i
 }
   return field
}


const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = document.getElementById("num").value;
  const number = parseInt(inputValue);

  const result = factorial(number);

  document.getElementById("factorial").value = result;
});
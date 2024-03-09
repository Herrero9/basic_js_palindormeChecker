const palindromeForm = document.getElementById('palindromeForm');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');


const checkPalindrome = (e) => {
  e.preventDefault();
  let word = inputText.value;
  console.log(word);
    
}

palindromeForm.addEventListener("submit", checkPalindrome);
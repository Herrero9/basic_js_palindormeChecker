const palindromeForm = document.getElementById('palindromeForm');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');


const checkPalindrome = (e) => {
  e.preventDefault();
  let word = inputText.value;
  console.log(word);
  let reverseWord = word.split('').reverse().join('');
  console.log(reverseWord); 
  if (word == reverseWord){
    result.innerHTML = "This is a palindrome";
  }else{
    result.innerHTML = "This is not a palindrome";
  }
}

palindromeForm.addEventListener("submit", checkPalindrome);
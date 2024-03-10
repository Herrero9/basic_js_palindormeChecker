const palindromeForm = document.getElementById('palindromeForm');
const inputText = document.getElementById('text-input');
const submitButton = document.getElementById('check-btn');
const result = document.getElementById('result');


const checkPalindrome = (e) => {
  e.preventDefault();
  let word = inputText.value;
  let reverseWord = word.split('').reverse().join('');
  if(word !== null && word.length > 0){
    if (word == reverseWord){
      result.innerHTML = `${word} is a palindrome`;
    }else{
      result.innerHTML = `${word} is not a palindrome`;
    }
  }else{
    alert("Please input a value");
  }
}

palindromeForm.addEventListener("submit", checkPalindrome);
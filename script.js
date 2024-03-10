const palindromeForm = document.getElementById('palindromeForm');
const inputText = document.getElementById('text-input');
const submitButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const regex = /[(\W)\_*]/g;

const checkPalindrome = (e) => {
  e.preventDefault();
  let word = inputText.value;
  let cleanWord = word.toLowerCase().replace(regex, '');
  console.log(cleanWord);
  let reverseWord = cleanWord.split('').reverse().join('');
  if(word !== null && word.length > 0){
    if (cleanWord == reverseWord){
      result.innerHTML = `${word} is a palindrome`;
    }else{
      result.innerHTML = `${word} is not a palindrome`;
    }
  }else{
    alert("Please input a value");
  }
}

palindromeForm.addEventListener("submit", checkPalindrome);
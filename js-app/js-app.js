const loginInput = document.querySelector("#login-section input");
const loginButton = document.querySelector('#login-section button');

function onLoginButton(){
  console.dir(loginInput.value); // print the text value of the loginInput tag
}

loginButton.addEventListener('click',onLoginButton)
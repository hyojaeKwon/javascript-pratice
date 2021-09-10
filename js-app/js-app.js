const loginInput = document.querySelector("#login-section input");
const loginButton = document.querySelector('#login-section button');
const loginForm = document.querySelector("#login-section")

function onLoginSubmit(){
  const value = loginInput.value;
  console.log(value)
}
loginForm.addEventListener("submit",onLoginSubmit)
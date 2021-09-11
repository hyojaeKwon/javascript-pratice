const loginInput = document.querySelector("#login-section input");
const loginButton = document.querySelector('#login-section button');
const loginForm = document.querySelector("#login-section")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const name = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,name);
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit",onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  //show the gretings
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
}
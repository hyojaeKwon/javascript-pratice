const loginInput = document.querySelector("#login-section input");
const loginButton = document.querySelector('#login-section button');
const loginForm = document.querySelector("#login-section")
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
  event.preventDefault();
  const name = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // console.log(name);
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

function handleLinkClick(event) {
  event.preventDefault();
  alert("clicked");

}
loginForm.addEventListener("submit",onLoginSubmit)
link.addEventListener("click",handleLinkClick)
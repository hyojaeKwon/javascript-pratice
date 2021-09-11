const clickButton = document.querySelector(".end");
const liList = document.querySelectorAll(".item-container li");

//adding float funtion
function changeState(){
  //Not for loop, But using  forEach
  liList.forEach(element => {
    //float toggle class toggle 
    element.classList.toggle('float');    
  });
}

//button event listner
clickButton.addEventListener('click',changeState);
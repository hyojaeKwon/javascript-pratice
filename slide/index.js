//Make a quotr Array
let page = 1;
const quoteArr = [
  {
    id : 1,
    text : "First Quotation"
  },
  {
    id : 2,
    text : "Second Quotation"
  },
  {
    id : 3,
    text : "Third Quotation"
  },
  {
    id : 4,
    text : "Fourth Quotation"
  },
];

//text container
const textContainer = document.getElementById('text');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
prevBtn.addEventListener('click',minus);
nextBtn.addEventListener('click',plus)

function showTheQuote(i){
  // textContainer.innerText = quoteArr[i-1].text;
  quoteArr.forEach(element => {
    if(element.id == i){
      console.log(element.text)
      textContainer.innerText = element.text;
    }
  });
}

function plus(){
  page = page+1;
  if(page>4){
    page=page-4;
  }
  showTheQuote(page);
}
function minus(){
  page-=1;
  if(page<1){
    page=page+4;
  }
  showTheQuote(page);
}

showTheQuote(page);

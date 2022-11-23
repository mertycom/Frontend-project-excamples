let colorList = ['red','purple','orange','yellow','aqua','orangered','blue','gray','beige','green'];

const btnEl = document.querySelector('button');
btnEl.addEventListener('click',createBox);
let count =1;
let selectedIndex = null;

function getRandomColor(){
  let randomIndex = Math.floor (Math.random()*colorList.length);
  if(selectedIndex === randomIndex){
    return getRandomColor();
  }
  
  selectedIndex = randomIndex; 
  return colorList[randomIndex];
}

function createBox(){
    const mainEl = document.querySelector('main');
    const boxEl = document.createElement('div');
    boxEl.innerText = count;
    count++;
    boxEl.style.width='100px';
    boxEl.style.height='100px';
    boxEl.style.backgroundColor=getRandomColor();
    boxEl.className='box'

    mainEl.append(boxEl);
}






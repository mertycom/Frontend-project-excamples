const numbersEl = document.querySelectorAll('.number');
const displayCalcEl = document.querySelector('.calc-sc');
const displayInputEl = document.querySelector('.input-sc');
const displayTempEl = document.querySelector('div.temp-sc');
const operatorsEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equals');
const clearEl = document.querySelector('div.buttons .all-clear');
const lastEntClearEl = document.querySelector('div.buttons .last-entity-clear');

numbersEl.forEach(number => number.addEventListener('click',clickNumber))
operatorsEl.forEach(operator => operator.addEventListener('click', clickOperator))

equalEl.addEventListener('click', clickEquals);

clearEl.addEventListener('click',clearAll);

function clickEquals(){
    if(!dispCalc || !dispInput) return;
    haveDot=false;
    mathOperation();
    clearVals(lastOp);
    displayInputEl.innerText=result;
    displayTempEl.innerText='';
    dispInput=result;
    dispCalc='';
}

function clearAll(){
    displayCalcEl.innerText='0';
    displayInputEl.innerText='0';
    dispCalc='';
    dispInput='';
    result=null;
    lastOp='';
    displayTempEl.innerText='0';
}

lastEntClearEl.addEventListener('click', clearLastEl);

function clearLastEl(){
    displayInputEl.innerText='';
    dispInput='';
}

let selectedEntity = null;
let lastOp='';
let haveDot = false;
let result =null;
let dispCalc ='';
let dispInput ='';

function clickNumber(e){
    displayInputEl.innerText='';
    selectedEntity=e.target.innerText;

    if(selectedEntity === '.' && !haveDot){
        haveDot=true;
    }else if(selectedEntity === '.'){
        return;
    }
    dispInput += selectedEntity;
    displayInputEl.innerText=dispInput;
}

function clickOperator(e){
    if(!dispInput){return; }
       
    haveDot=false;

    const opChoice = e.target.innerText;
    if(dispCalc && dispInput && lastOp){
        mathOperation();
    }else{
        result= parseFloat(dispInput);
    }
    //console.log(opChoice);
    lastOp = opChoice;
    //console.log(result)
    showdispCalc(opChoice);    
}

function showdispCalc(opChoice){
    
    if(displayCalcEl.innerText ==0){
        displayCalcEl.innerText = null;
    }else if(dispInput==0){
        return;
    }
    
    clearVals(opChoice);
    lastOp = opChoice;
}

function clearVals(opChoice) {
    
    dispCalc += dispInput + ' ' + opChoice + ' ';
    displayCalcEl.innerText = dispCalc;
    dispInput = '';
    displayInputEl.innerText = 0;
    displayTempEl.innerText = result;

}

function mathOperation(){
    if(lastOp === '+'){
        result = calcSum(result,dispInput);
    }else if(lastOp === '-'){
        result = calcSub(result,dispInput);;
    }else if(lastOp === 'X'){
        result = calcMult(result,dispInput);;
    }else if(lastOp === '/'){
        result = calcDiv(result,dispInput);;
    }else if(lastOp === '%'){
        result = calcRem(result,dispInput);;
    }
}

function calcSum(a,b){
    return parseFloat(a)+parseFloat(b);
}

function calcDiv(a,b){
    return parseFloat(a)/parseFloat(b);
}

function calcSub(a,b){
    if(a==b){
        return 0;
    }
    return parseFloat(a)-parseFloat(b);
}

function calcMult(a,b){
    return parseFloat(a)*parseFloat(b);
}

function calcRem(a,b){
    return parseFloat(a)%parseFloat(b);
}


window.addEventListener('keydown', function(e){
    if(
        e.key==='0' || e.key==='1' || e.key==='2' || e.key==='3' || e.key==='4' || e.key==='5' ||
        e.key==='6' || e.key==='7' || e.key==='8' || e.key==='9' || e.key==='.' 
    ){
        console.log(e.key);
        clickButtonEl(e.key)
    }else if(
        e.key ==='+' || e.key ==='-' || e.key ==='/' || e.key ==='%' 
    ){
        clickOperation(e.key);
    }else if(e.key==='*'){
        clickOperation('X');
    }else if (e.key==='Enter' || e.key ==='='){
        clickEqual();
    }
})

function clickEqual(){
    equalEl.click();
}

function clickOperation(key){
    operatorsEl.forEach(btn => {
        if(btn.innerText
             === key){
                btn.click();
             }
    })
}

function clickButtonEl(key){
    numbersEl.forEach(btn => {
        if(btn.innerText
             === key){
                btn.click();
             }
    })
}
const add = (n1, n2) => {
      return n1 + n2;
}
const subtract = (n1, n2) => {
      return n1 - n2;
}
const multiply = (n1, n2) => {
      return n1 * n2;
}
const divide = (n1, n2) => {
      return n1/n2;
}

let num1;
let num2;
let operator;

const operate = (n1, n2, operator) => {
      switch(operator) {
            case '+':
                  return add(n1, n2);
            case '-':
                  return subtract(n1, n2);
            case '*':
                  return multiply(n1, n2);
            case '/':
                  return divide(n1, n2);
      }
}

let display = [];

const view = document.querySelector(".calc-result h1");
const btns = Array.from(document.querySelectorAll("button"));

btns.forEach((btn) => {
      btn.addEventListener('click', function(event) {
            let btnText = event.target.textContent;
            if(btnText === 'Back'){
                  display.pop();
            }else if(btnText === 'Clear'){
                  display = [];
            }else if(btnText === '='){
                  display.pop();
                  setValues(display);
            }else{
                  display.push(btnText);
            }
            view.textContent = display.join('');
      });
})

const setValues = (array) => {
      let oprs = ['+', '-', '*', '/'];
      let opr = array.filter((element) => {
            if(oprs.includes(element)){
                  return element;
            }
      }).join();
      if(array.includes(opr)){
            num1 = Number(array.slice(0, array.indexOf(opr)).join(''));
            num2 = Number(array.slice(array.indexOf(opr)+1, array.length).join(''));
            operator = opr;
            let total = Math.round(operate(num1, num2, operator)*10000)/10000;
            if(!isFinite(total)){
                  view.textContent = 'Error';
                  display = [];
            }else{
                  display = [total];  
                  view.textContent = total;
            }     
      }
}

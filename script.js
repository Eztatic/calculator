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

const view = document.querySelector(".calc-result input");
const btns = Array.from(document.querySelectorAll("button"));

btns.forEach((btn) => {
      btn.addEventListener('click', function(event) {
            let btnText = event.target.textContent;
            if(btnText === 'Back'){
                  display.pop();
            }else if(btnText === 'Clear'){
                  display = [];
            }else if(btnText === '='){
                  setValues(display);
            }else{
                  if(display[0] === 'Error'){
                        display = [];
                  }
                  console.log(typeof btnText)
                  display.push(btnText);
            }
            view.value = display.join(''); 
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
            num1 = Number(array.slice(0, array.indexOf(opr))
                               .join(''));
            num2 = Number(array.slice(array.indexOf(opr)+1, array.length).join(''));
            operator = opr;
            let total = Math.round(operate(num1, num2, operator)*100)/100;
            if(!isFinite(total)){
                  display = ['Error'];
            }else{
                  display = [total];
            } 
      }
}

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
            display.push(btnText);
            if(btnText === 'C'){
                  display = [];
            }else if(btnText === '='){
                  display.pop();
                  if(display.includes('+')){
                        num1 = Number(display.slice(0, display.indexOf('+')).join(''));
                        num2 = Number(display.slice(display.indexOf('+')+1, display.length).join(''));
                        operator = '+';
                        let total = operate(num1, num2, operator);
                        view.textContent = total;
                        
                  }
            }else{
                  view.textContent = display.join('');
            }
      });
})
const add = (n1, n2) => {
      return num1 + num2;
}
const subtract = (n1, n2) => {
      return num1 - num2;
}
const multiply = (n1, n2) => {
      return num1 * num2;
}
const divide = (n1, n2) => {
      return num1/num2;
}

let num1;
let num2;
let operator;

const operate = (n1, n2, operator) => {
      switch(operator) {
            case '+':
                  add(n1, n2);
                  break;
            case '-':
                  subtract()
      }
}

const btns = Array.from(document.querySelectorAll("button"));

btns.forEach((btn) => {
      btn.addEventListener('click', function(event) {
            let btnText = event.target.textContent;
            console.log(btnText);
      });
})
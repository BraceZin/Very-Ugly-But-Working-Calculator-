let expression = '';
var numDisplay = document.getElementById('display');

function calc() {
  try {
    let res = eval(expression.replace(/\^/g, "**"));
    console.log(res)
    if (res === undefined || isNaN(res) || !isFinite(res))
      throw new SyntaxError();
    setExpr(res);
  } catch (e) {
    expression = '';
    numDisplay.innerText = 'Error ⚠️ ';
  }
}

function appendExpr(e) {
  setExpr(expression + e);
}

function setExpr(e) {
  expression = e;
  numDisplay.innerText = e;
}

function clr() {
  expression = '';
  numDisplay.innerHTML = '&nbsp;';
}
function del(){
console.log(expression)
expression = expression.slice(0,-1);
numDisplay.innerHTML = expression;
}
document.addEventListener('keydown', function(event) {
  if('1234567890+-*/^%()'.includes(event.key)) {
    event.preventDefault();
    appendExpr(event.key);
  } else if (event.key == "Enter" || event.key == "=") {
    event.preventDefault();
    calc();
  } else if (event.key == "Backspace" || event.key == "Delete" || event.key == "c") {
    event.preventDefault();
    del();
  }
});
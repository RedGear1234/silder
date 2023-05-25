const Nums = ' '.repeat(10).split('');
const Btn = document.getElementById('Btn');
const numpad = document.querySelector('#numpad');
const Inputs = document.getElementById('inputs');
let result = ""

function cerateBoard() {
  for (let i = 0; i < 10; i++) {
    const emptytiles = Nums.map((t) => `<div class="nums">${i++}</div>`).join(
      ''
    );
    numpad.innerHTML = emptytiles;
  }
  const Dails = document.querySelectorAll('.nums');
  Dails.forEach((ele) => {
    ele.addEventListener('click', () => {
      Inputs.value += ele.innerHTML;
    });
  }); 
}

cerateBoard();


Btn.addEventListener("click", ()=>{
  const valueTOEval = Inputs.value
  result = eval(valueTOEval)
  return Inputs.value = Number.parseFloat(result).toFixed(2)
})
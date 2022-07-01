// del 1 item from iput field 
document.getElementById('btn-del').addEventListener('click', function () {

  const screen = document.getElementById('display').value;
  document.getElementById('display').value = screen.substring(0, screen.length - 1);
  
})

// del all item from input field
document.getElementById('btn-c').addEventListener('click', function () {

   document.getElementById('display').value = '';
  
})

// evaluate input field items
document.getElementById('btn-total').addEventListener('click', function () {

  const screen = document.getElementById('display').value;
  document.getElementById('display').value = eval(screen);
 
})

//insert item in input field
function inputNum(id) {
  document.getElementById(id).addEventListener('click', function () {

      let btn = document.getElementById(id).innerText;  
      result = document.getElementById('display').value += btn;   
   
  })
}

// call function for button
inputNum('btn-plus-minus');
inputNum('btn-percent');
inputNum('btn-divider');
inputNum('btn-7');
inputNum('btn-8');
inputNum('btn-9');
inputNum('btn-x');
inputNum('btn-4');
inputNum('btn-5');
inputNum('btn-6');
inputNum('btn-minus');
inputNum('btn-1');
inputNum('btn-2');
inputNum('btn-3');
inputNum('btn-plus');
inputNum('btn-0');
inputNum('btn-dot');

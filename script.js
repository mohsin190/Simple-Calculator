document.getElementById('key-pad').addEventListener('click', function (event) {
  const number = event.target.innerText;
  const screen = document.getElementById('display');
  
    if (number == "AC") {
      screen.value = '';
    }
    else if (number == "DEL") {
      const item = screen.value;
      screen.value = item.substring(0, item.length - 1)
    }
    else if (number == "=") {
      const item = screen.value;
      screen.value = eval(item);
    }
    else{
      const oldNum = screen.value;
      const newNum = oldNum + number;
      screen.value = newNum;
    }
  
})
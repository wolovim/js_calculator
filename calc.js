var keys = document.querySelectorAll('span')

for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input    = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal   = this.innerHTML;

    if (btnVal == "C") {
      input.innerHTML = "";
    }
    else if (btnVal == '=') {
      var equation = inputVal;
      if(equation) {
        input.innerHTML = eval(equation);
      }
    }
    else {
      input.innerHTML += btnVal;
    }
  }
}

let calculationPrint = "";

function calculationBox(x) {
  switch (x) {
    case 0:
      calculationPrint += 0;
      break;
    case 1:
      calculationPrint += 1;
      break;
    case 2:
      calculationPrint += 2;
      break;
    case 3:
      calculationPrint += 3;
      break;
    case 4:
      calculationPrint += 4;
      break;
    case 5:
      calculationPrint += 5;
      break;
    case 6:
      calculationPrint += 6;
      break;
    case 7:
      calculationPrint += 7;
      break;
    case 8:
      calculationPrint += 8;
      break;
    case 9:
      calculationPrint += 9;
      break;
    case '.':
      calculationPrint += '.';
      break;
    case '÷':
      calculationPrint += '/';
      break;
    case '×':
      calculationPrint += '*';
      break;
    case '-':
      calculationPrint += '-';
      break;
    case '+':
      calculationPrint += '+';
      break;
    case '%':
      calculationPrint += '%';
      break;
    case '^':
      calculationPrint += '^';
      break;
    case '(':
      calculationPrint += '(';
      break;
    case ')':
      calculationPrint += ')';
      break;
    default:
      break;

  };

  printToBox();
}

function printToBox() {
  document.getElementById('calculation_output').innerHTML = calculationPrint
}

function printSolution()  {
  let solution = eval(calculationPrint);
  document.getElementById('calculation_output').innerHTML = `${calculationPrint} = ${solution}`
}

function deleteLine() {
  calculationPrint = '';
  solution = 0;
  printToBox();
}

function reverseAction()  {
  calculationPrint = calculationPrint.substring(0, calculationPrint.length - 1);
  printToBox();
}

function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';

  if (currentCase === 'Camel Case') {

    for (let i = 0; i < input.length; i++) {

      if (input[i] === ' ') {
        result += (input[i + 1].toUpperCase());
        i++;
      } else {
        result += input[i].toLowerCase();
      }
      console.log();
    }

  } else if (currentCase === 'Pascal Case') {
    result += (input[0].toUpperCase());

    for (let i = 1; i < input.length; i++) {

      if (input[i] !== ' ') {
        result += (input[i].toLowerCase());
      } else {
        result += (input[i + 1].toUpperCase());
        i++;
      }
    }

  } else {
    result += 'Error!';
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;

}
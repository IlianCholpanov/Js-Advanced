function solve() {
  let inputElement = document.getElementById('input');
  let textArtt = inputElement.value.split('.').filter(s => s !== '');
  let result = document.getElementById('output');

  while (textArtt.length > 0) {
    let text = textArtt.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    result.appendChild(p);
  }
}

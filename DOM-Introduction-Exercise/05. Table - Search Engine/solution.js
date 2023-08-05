function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let inputWord = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (const row of rows) {
         if (inputWord.value !== '' && row.innerHTML.includes(inputWord.value)) {
            row.className = 'select';
         } else {
            row.className = '';
         }
      }
   }
}
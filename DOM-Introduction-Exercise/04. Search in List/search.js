function search() {
   let userWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let count = 0;

   for (const town of townsElement) {
      if (town.textContent.includes(userWord)) {
         count++;

         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'none';
         town.style.textDecoration = 'none';
      }

   }

   match.textContent = `${count} matches found`;
   match.style.textAlign = 'center';

   return match.textContent;

}
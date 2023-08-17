function create(words) {
   let contentDivElement = document.getElementById('content');


   words.forEach(w => {
      let newDivElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = w;
      newDivElement.addEventListener('click', addHandler);

      function addHandler() {
         pElement.style.display = 'block';
         newDivElement.appendChild(pElement);
      }

      contentDivElement.appendChild(newDivElement);

   });


}
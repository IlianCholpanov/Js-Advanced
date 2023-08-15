function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let addButtonArr = Array.from(addButtons);
   let textArea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   let totalSum = 0;
   let product = {};

   addButtonArr.forEach(x => x.addEventListener('click', addHandler));
   checkoutButton.addEventListener('click', checkoutHandler);

   function checkoutHandler() {
      addButtonArr.forEach(x => x.disabled = 'disabled');
      let produtsList = Object.keys(product).join(', ');

      textArea.textContent += `You bought ${produtsList} for ${totalSum.toFixed(2)}.`
   }

   function addHandler(e) {
      let element = e.target;
      let productDiv = element.parentElement.parentElement;

      let title = productDiv.querySelector('.product-title');
      let priceDiv = productDiv.querySelector('.product-line-price');

      let productName = title.textContent;
      let price = Number(priceDiv.textContent);

      totalSum += price;
      product[productName] = true;

      textArea.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
   }
}
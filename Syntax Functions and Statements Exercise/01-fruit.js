function fruitShop(fruit, weight, priceKG) {
    let weightKg = weight / 1000;
    let totalPrice = weightKg * priceKG;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}
fruitShop('orange', 2500, 1.80);
class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = Number(spaceAvailable);
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < Number(spaceRequired)) {
      throw new Error("Not enough space in the garden.");
    }

    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    this.spaceAvailable -= Number(spaceRequired);

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((p) => p.plantName === plantName);
    if (plant === undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe) {
      throw new Error(`The ${plant.plantName} is already ripe.`);
    }

    if (plant.quantity < 0 && plant.quantity === 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    plant.ripe = true;
    plant.quantity += Number(quantity);

    if (quantity == 1) {
      return `${quantity} ${plant.plantName} has successfully ripened.`;
    } else if (quantity > 1) {
      return `${quantity} ${plant.plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let plant = this.plants.find((p) => p.plantName === plantName);
    if (plant === undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (!plant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.plants = this.plants.filter((p) => p.plantName !== plantName);
    this.storage.push({ plantName, quantity: plant.quantity });
    this.spaceAvailable += plant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let result = [];
    result.push(`The garden has ${this.spaceAvailable} free space left.`);
    this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
    let plantsArraySorted = this.plants.map((x) => x.plantName).join(", ");
    let plantsString = `Plants in the garden: ${plantsArraySorted}`;
    result.push(plantsString);

    let storageArrString = this.storage
      .map((x) => `${x.plantName} (${x.quantity})`)
      .join(", ");

    let storageString =
      this.storage.length === 0
        ? "Plants in storage: The storage is empty."
        : `Plants in storage: ${storageArrString}`;

    result.push(storageString);
    return result.join("\n");
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)

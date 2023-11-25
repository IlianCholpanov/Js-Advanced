class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    let isInTheArray = false;

    if (!this.possibleArticles[articleModel]) {
      throw new Error("This article model is not included in this gallery!");
    }

    for (const el of this.listOfArticles) {
      if (
        el.articleName === this.articleName &&
        el.articleModel === this.articleModel
      ) {
        el.quantity += Number(quantity);
        isInTheArray = true;
      }
    }

    if (isInTheArray) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    for (const guest of this.guests) {
      if (guest.guestName == guestName) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }

    let obj = { guestName, points: 0, purchaseArticle: 0 };

    switch (personality) {
      case "Vip":
        obj.points = 500;
        break;
      case "Middle":
        obj.points = 250;
        break;
      case "Normal":
        obj.points = 50;
        break;
    }

    this.guests.push(obj);

    return `You have successfully invited ${guestName}!`;
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.inviteGuest("John", "Vip"));
console.log(artGallery.inviteGuest("Peter", "Middle"));
console.log(artGallery.inviteGuest("John", "Middle"));

// You have successfully invited John!
// You have successfully invited Peter!
// John has already been invited.

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

  buyArticle(articleModel, articleName, guestName) {
    let article;
    let guest;
    let isArticleInTheArray = false;

    for (const el of this.listOfArticles) {
      if (el.articleName !== articleName || el.articleModel !== articleModel) {
        isArticleInTheArray = false;
      } else {
        article = el;
        isArticleInTheArray = true;
        break;
      }
    }

    if (!isArticleInTheArray) {
      throw new Error(`This article is not found.`);
    }

    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    let isGuestInTheArray = false;
    for (const el of this.guests) {
      if (el.guestName !== guestName) {
        isGuestInTheArray = false;
      } else {
        isGuestInTheArray = true;
        guest = el;
        break;
      }
    }
    if (!isGuestInTheArray) {
      return `This guest is not invited.`;
    }

    if (guest.points < this.possibleArticles[articleModel]) {
      return `You need to more points to purchase the article.`;
    } else {
      article.quantity--;
      guest.points -= this.possibleArticles[articleModel];
      guest.purchaseArticle++;
    }

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
console.log(artGallery.buyArticle("item", "Mona Liza", "John"));

// John successfully purchased the article worth 200 points.
// Peter successfully purchased the article worth 250 points.
// This article is not found.

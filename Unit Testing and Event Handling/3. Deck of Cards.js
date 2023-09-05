function printDeckOfCards(array) {
    let result = [];

    array.forEach(cardInfo => {
        const cardFace = cardInfo.slice(0, -1);
        const cardSuit = cardInfo.slice(-1);
        let card = '';

        try {
            card = cardFactory(cardFace, cardSuit);
            result.push(card);
        } catch {
            result = [`Invalid card: ${cardInfo}`];
        }

    });

    console.log(result.join(' '));

    function cardFactory(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }

        if (!faces.includes(face)) {
            throw new Error('Invalid Face');
        }


        let card = {
            face,
            suit,
            toString() {
                return this.face + suits[suit];
            }
        }

        return card.toString();
    }
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])
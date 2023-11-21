class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.listOfParticipants = [];
    this.priceForTheCamp = {
      child: 150,
      student: 300,
      collegian: 50,
    };
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    if (this.priceForTheCamp[condition] > money) {
      return "The money is not enough to pay the stay at the camp.";
    }

    if (this.listOfParticipants.some((x) => x.name == name)) {
      return `The ${name} is already registered at the camp.`;
    }

    let participants = { name, condition, power: 100, wins: 0 };

    this.listOfParticipants.push(participants);

    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    if (!this.listOfParticipants.some((x) => x.name == name)) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants = this.listOfParticipants.filter(
      (x) => x.name != name
    );

    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    let player1 = this.listOfParticipants.find((x) => x.name == participant1);
    let player2 = null;

    if (typeOfGame == "Battleship") {
      if (!player1) {
        throw new Error(`Invalid entered name/s.`);
      }

      player1.power += 20;
      return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
    } else if (typeOfGame == "WaterBalloonFights") {
      player2 = this.listOfParticipants.find((x) => x.name == participant2);

      if (participant1.condition !== participant2.condition) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (participant1.power > participant2.power) {
        player1.wins += 1;
        return `The ${player1.name} is winner in the game ${typeOfGame}.`;
      } else if (participant2.power > participant1.power) {
        player2.wins += 1;
        return `The ${player2.name} is winner in the game ${typeOfGame}.`;
      } else if (participant1.power == participant2.power) {
        return "There is no winner.";
      }
    }
  }

  toString() {
    console.log(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );

    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .forEach((x) => {
        console.log(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
      });
  }
}

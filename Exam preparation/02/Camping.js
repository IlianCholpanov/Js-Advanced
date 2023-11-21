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

    return `The ${name} was succesfully registered.`;
  }

  unregisterParticipant(name) {
    if (!this.listOfParticipants.some((x) => x.name == name)) {
      throw new Error(`The ${name} is not registered in the camp.`);
      //   console.log(`The ${name} is not registered in the camp`);
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
    } else if (typeOfGame == "WaterBalloonFight") {
      player2 = this.listOfParticipants.find((x) => x.name == participant2);

      if (player1.condition !== player2.condition) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (player1.power > player2.power) {
        player1.wins += 1;
        return `The ${player1.name} is winner in the game ${typeOfGame}.`;
      } else if (player2.power > player1.power) {
        player2.wins += 1;
        return `The ${player2.name} is winner in the game ${typeOfGame}.`;
      } else {
        return "There is no winner.";
      }
    }
  }

  toString() {
    console.log(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );
  }
}

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(
  summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "SaraDickinson")
);
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "DimiturKostov")
);

// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "SaraDickinson")
// );
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Dimitur Kostov"
//   )
// );
// console.log(summerCamp.toString());

// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0

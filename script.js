// Values and Variables

const country = "Brazil";
const continent = "South America";
let population = 214.3;

console.log(country);
console.log(continent);
console.log(population);

// Data Types

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

// let, const and var

language = "mandarin";

// country = 'Argentina'

//Basic Operators

const halfPopulation = population / 2;
console.log(halfPopulation);

// population++; acrescenta um
console.log(population);

const moreThan = population > 6;
console.log(moreThan);

const lessThan = population < 33;
console.log(lessThan);

//Strings and Template Literals
const description1 =
  "Brazil is in South America, its 214,3 million people and speak portuguese.";
const description2 = `${country} is in ${continent}, its ${population} million people and speak ${language}.`;
console.log(description1);
console.log(description2);

//Taking Decisions

if (population > 33) {
  console.log("Brazil's population is above average");
} else {
  console.log(`Brazil's population is ${population - 33} below average`);
}

//Type converseion and coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//Equality Operators
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours == 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('Mora than 1 border');
// } else {
//   console.log('No borders');
// }

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('Mora than 1 border');
// } else {
//   console.log('No borders');
// }

//Logical Operators
if (language == "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

//The switch statement

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
}

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

//Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const Brazil = describeCountry("Brazil", 214, "Brasilia");
const Portugal = describeCountry("Portugal", 10, "Lisbon");
const Germany = describeCountry("Germany", 83, "Berlin");
console.log(Brazil, Portugal, Germany);

//Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percBrazil1 = percentageOfWorld1(214, 3);
const percChina1 = percentageOfWorld1(1441);
const percPortugal1 = percentageOfWorld1(10);

console.log(percBrazil1, percChina1, percPortugal1);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percBrazil3 = percentageOfWorld3(214, 3);
const percChina3 = percentageOfWorld3(1441);
const percPortugal3 = percentageOfWorld3(10);

console.log(percBrazil3, percChina3, percPortugal3);

//Functions Calling other functions

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

const popBrazil = describePopulation("Brazil", 214, 4);
const popPortugal = describePopulation("Portugal", 10);
const popChina = describePopulation("China", 1441);

console.log(popBrazil, popPortugal, popChina);

const populations = [214, 10, 80, 1441];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);

//Basic Array Operations
const neighbours = ["Argentina", "Uruguay", "Paraguay"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country");
}

neighbours[neighbours.indexOf("Uruguay")] = "Republic of Uruguay";
console.log(neighbours);

//Objects
const myCountry = {
  country: "Brazil",
  capital: "Brasilia",
  language: "Portuguese",
  population: 214,
  neighbours: ["Argentina", "Uruguay", "Paraguay"],

  describe: function () {
    return `${this.country} has ${this.population}
${this.language}-speaking people, ${this.neighbours.length} 
neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

//Dot vs Bracket Notation

// console.log(`${myCountry.country} has ${myCountry.population}
// ${myCountry.language}-speaking people, ${myCountry.neighbours.length}
// neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

//Object Methods

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry);

//for looping

for (let rep = 1; rep <= 50; rep++) {
  console.log(`Voter number ${rep} is currently voting`);
}

//looping arrays, breaking and continuing

const populations1 = [214, 10, 80, 1441];
const percentages2 = [];

for (let i = 0; i < populations1.length; i++) {
  percentages2.push(percentageOfWorld1(populations1[i]));
}

console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//while loop
const percentage3 = [];

let i = 0;
while (i < populations1.length) {
  const perc = percentageOfWorld1(populations1[i]);
  percentage3.push(perc);
  i++;
}

console.log(percentage3);

//Developer Skills & Editor Setup

//Coding Challenge

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log(str);
};

printForecast(data1);
printForecast(data2);

//Data Structure and Modern Operators
//Coding challange #1

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Horetzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hunneks"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;

console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmmich");
printGoals(...game.scored);

//7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

//Coding challange #2
console.log("-------- coding challange #2 --------");

//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//Coding challange #3
console.log("-------- coding challange #3 --------");

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//Coding challange #4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"X".repeat(i + 1)}`);
  }
});

//  underscore_case
//   first_name
// Some_Variable
//    calculate_AGE
//  delayed_departure

// Closer look at functions
// Coding challange #1

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python ', '2: Rust', '3: C++'],

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     console.log(this.answers);

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//       if(type === 'array') {
//           console.log(this.answers);
//       } else if (type === 'string') {
//           console.log(`Poll results are ${this.answers.join(', ')}`)
//       };
//   },
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers: [5, 2, 3]}, 'string');

//coding challange #2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// Working with arrays
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log(`----------------------------------------`);
// Coding challange #2

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};
const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg2 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
console.log(avg2);

console.log("----------------------------------------------------------");

//TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${dogSarah.curFood ? "much" : "little"}`
);

// 3

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
// .flat();

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
// .flat();

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4

console.log(`${ownersEatTooMuch.join(" and ")}'s dog eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dog eat too Little`);
console.log(dogs);

// 5
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7
console.log(dogs.filter(checkEatingOkay));

// 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

// Object Oriented Programming (OOP)

// 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(this.speed);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
car1.accelerate();
console.log(car1);
car1.brake();

// 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car3 = new CarCl("Ford", 120);
car3.speedUS;
car3.speedUS = 50;
car3.accelerate();
car3.brake();

// 3

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

car4 = new EV("Tesla", 120, 23);
car4.accelerate();
car4.brake();
car4.chargeBattery(90);
console.log(car4.charge);

// Values and Variables

const country = 'Brazil';
const continent = 'South America';
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
console.log(typeof language)

// let, const and var

language = 'mandarin';

// country = 'Argentina'

//Basic Operators 

const halfPopulation = population / 2;
console.log(halfPopulation);

// population++; acrescenta um 
console.log(population);

const moreThan = population > 6;
console.log(moreThan);

const lessThan = population < 33;
console.log(lessThan)

//Strings and Template Literals 
const description1 = 'Brazil is in South America, its 214,3 million people and speak portuguese.'
const description2 = `${country} is in ${continent}, its ${population} million people and speak ${language}.`
console.log(description1)
console.log(description2)

//Taking Decisions 

if (population > 33) {
  console.log("Brazil's population is above average");
} else {
  console.log(`Brazil's population is ${population - 33} below average`)
}

//Type converseion and coercion 
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

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
if (language == 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`)
}

//The switch statement 

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers');
    break
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break
  case 'english':
    console.log('3rd place');
    break
  case 'hindi':
    console.log('Number 4');
    break
  case 'arabic':
    console.log('5th most spoken language');
    break
  default:
    console.log('Great language too');
}

population > 33 ? console.log(`${country}'s population is above average`) :
  console.log(`${country}'s population is below average`);

//Functions 
function describeCountry(country, population, capitalCity) {
  return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const Brazil = describeCountry('Brazil', 214, 'Brasilia');
const Portugal = describeCountry('Portugal', 10, 'Lisbon');
const Germany = describeCountry('Germany', 83, 'Berlin');
console.log(Brazil, Portugal, Germany);

//Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const percBrazil1 = percentageOfWorld1(214, 3);
const percChina1 = percentageOfWorld1(1441);
const percPortugal1 = percentageOfWorld1(10);

console.log(percBrazil1, percChina1, percPortugal1);


const percentageOfWorld3 = population => (population / 7900) * 100;


const percBrazil3 = percentageOfWorld3(214, 3);
const percChina3 = percentageOfWorld3(1441);
const percPortugal3 = percentageOfWorld3(10);

console.log(percBrazil3, percChina3, percPortugal3);

//Functions Calling other functions 

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

const popBrazil = describePopulation('Brazil', 214, 4);
const popPortugal = describePopulation('Portugal', 10);
const popChina = describePopulation('China', 1441);

console.log(popBrazil, popPortugal, popChina);

const populations = [214, 10, 80, 1441];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1])
];
console.log(percentages);

//Basic Array Operations
const neighbours = ['Argentina', 'Uruguay', 'Paraguay'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop()
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country');
}

neighbours[neighbours.indexOf('Uruguay')] = 'Republic of Uruguay';
console.log(neighbours);

//Objects 
const myCountry = {
  country: 'Brazil',
  capital: 'Brasilia',
  language: 'Portuguese',
  population: 214,
  neighbours: ['Argentina', 'Uruguay', 'Paraguay'],

  describe: function () {
    return `${this.country} has ${this.population}
${this.language}-speaking people, ${this.neighbours.length} 
neighbouring countries and a capital called ${this.capital}.`
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  }
}

//Dot vs Bracket Notation 

// console.log(`${myCountry.country} has ${myCountry.population}
// ${myCountry.language}-speaking people, ${myCountry.neighbours.length} 
// neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

//Object Methods

console.log(myCountry.describe());
myCountry.checkIsland()
console.log(myCountry);

//for looping 

for (let rep = 1; rep <= 50; rep++) {
  console.log(`Voter number ${rep} is currently voting`)
}

//looping arrays, breaking and continuing

const populations1 = [214, 10, 80, 1441];
const percentages2 = []

for (let i = 0; i < populations1.length; i++) {
  percentages2.push(percentageOfWorld1(populations1[i]));
}

console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
]

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`)

//while loop 
const percentage3 = []

let i = 0
while (i < populations1.length) {
  const perc = percentageOfWorld1(populations1[i]);
  percentage3.push(perc);
  i++;
}

console.log(percentage3);

//Developer Skills & Editor Setup 

//Coding Challenge 

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4]

const printForecast = function (arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days... `
  }
  console.log(str)
}

printForecast(data1);
printForecast(data2);

//Data Structure and Modern Operators 
//Coding challange #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimich',
      'Horetzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hunneks'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

//1
const [players1, players2] = game.players;

console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers= [...players1, ...players2]
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6

const printGoals = function(...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', "Lewandowski", 'Kimmmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//Coding challange #2
console.log('-------- coding challange #2 --------');

//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
};

//2
let average = 0 
const odds = Object.values(game.odds);

for (const odd of odds) {
  average += odd;
};
average /= odds.length;
console.log(average)

//3 
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//Coding challange #3
console.log('-------- coding challange #3 --------');

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
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
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`)
};

//Coding challange #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase() 
    )}`;
    console.log(`${output.padEnd(20)}${'X'.repeat(i + 1)}`);
  }
});

//  underscore_case
//   first_name
// Some_Variable
//    calculate_AGE
//  delayed_departure
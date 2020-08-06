// Load the full build.
var _ = require('./lodash');

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEvenNumbers() {
	return _.filter(numberArray, n => n % 2 === 0);
}

console.log(getEvenNumbers());

function getOddNumbers() {
	return _.reject(numberArray, n => n % 2 === 0);
}

console.log(getOddNumbers());

let basketBallPlayers = [
	{
		name: 'Kobe',
		surname: 'Bryant',
		position: 'SG',
		active: false
	},
	{
		name: 'LeBron',
		surname: 'James',
		position: 'SF',
		active: true
	},
	{
		name: 'Michael',
		surname: 'Jordan',
		position: 'SG',
		active: false
	},
	{
		name: 'Dwayne',
		surname: 'Wade',
		position: 'SG',
		active: false
	},
	{
		name: 'Kevin',
		surname: 'Garnett',
		position: 'PF',
		active: false
	}
];

function addPlayer() {
	const newPlayer = {
		name: 'Artemas',
		surname: 'Prime',
		position: 'PG',
		active: true
	};

	return _.concat(basketBallPlayers, newPlayer);
}

console.log(addPlayer());

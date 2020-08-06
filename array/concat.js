var _ = require('../lodash');

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
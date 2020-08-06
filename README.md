# Lodash Examples

## Pre-requisites

* NodeJS

## How to run example

You need to execute node to run any example
you wish to run e.g:

`node concat.js`

## Filter

```javascript
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
return _.filter(numberArray, n => n % 2 == 0);

// output
[ 2, 4, 6, 8 ]
```

## Reject

```javascript
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
return _.reject(numberArray, n => n % 2 == 0);

// output
[ 1, 3, 5, 7, 9 ]
```

## Concat
- Joining an object to other objects

```javascript
let basketBallPlayers = [
	{ name: 'Kobe',	surname: 'Bryant', position: 'SG', active: false},
	{ name: 'LeBron', surname: 'James', position: 'SF', active: true},
	{ name: 'Michael', surname: 'Jordan', position: 'SG', active: false},
	{ name: 'Dwayne', surname: 'Wade', position: 'SG', active: false},
	{ name: 'Kevin', surname: 'Garnett', position: 'PF', active: false}
];

const newPlayer = { name: 'Artemas', surname: 'Prime', position: 'PG', active: true};
return _.concat(basketBallPlayers, newPlayer);

// output
[
	{name: 'Kobe', surname: 'Bryant', position: 'SG', active: false},
	{name: 'LeBron', surname: 'James', position: 'SF', active: true},
	{name: 'Michael', surname: 'Jordan', position: 'SG', active: false},
	{name: 'Dwayne', surname: 'Wade', position: 'SG', active: false},
	{name: 'Kevin', surname: 'Garnett', position: 'PF', active: false},
	{name: 'Artemas', position: 'PG', active: true}
];
```
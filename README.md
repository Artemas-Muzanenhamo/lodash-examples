# Lodash Examples

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
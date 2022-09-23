// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// REDUCE Method example (Array Methods)
const array = [1, 2, 4, 77, 443, 5478, 45332];

const reducedValues = array.reduce((accumulator, currentValue, idx, array) => {
  // console.log('Accum ==>',
  //  accumulator, '\n CurrentValue', currentValue);
  // we can get one by one values from the above array.
  console.log('x', idx, array);

  return 5 + currentValue;
}, 0);

// console.log('reducedValues', reducedValues);

appDiv.innerHTML = `<h1>JS Starter</h1>`;

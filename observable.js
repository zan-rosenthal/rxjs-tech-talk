// import Rx from 'rxjs'
const Rx = require('rxjs')

const source = Rx.Observable.interval(400).take(9)
  .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

// TODO: Create an Observable `result` that emits the
// sum of all numbers in source. Use pure functions
// such as map, filter, reduce, scan, merge, delay,
// concat, take, etc.

const result = source
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .scan((accumulator, value) => accumulator * value)

// result.subscribe(x => console.log(x));

const scanX = result
  .scan((accumulator, value) => accumulator * value)

scanX.subscribe((final) => console.log('Result of scanning source: ', final))

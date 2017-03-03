# Reactive Programming

#### Reactive programming is programming with asynchronous data streams.

1) If an array is a sequence in space or memory. A stream is a sequence in time 

​	In the context of RxJS, streams are known as observables.

2) Alternatively, if an array is a list of values already present.

​	And a Promise is a value that will evntually be present.

​	An observable is a list of values that will eventually be there. 

3) You can chain methods on an observable in the same way you could an array



**Observable** 

Emits values

**Observer**

Reacts to them



Ex.1 `babel-node array.js`

​	just prints the final number

​	`babel-node observable.js`

​	prints them in time



**Observables are immuatable**

Ex. 2 

The `scan(g)` function aggregates all previous values on the stream, producing value `x = g(accumulated, current)`

**Operator** `f(Observable) => Observable`

Each of these methods is called an operator.

Operators operate on an observable and return an observable

**User Events**

Observable is 

Ex. 1 Click Stream

`buffer` periodically gathers values emitted by source into a buffer

`merge` merges streams into a single stream



Ex. 2 Input

`pluck` takes a path to a nested property of each value and plucks it

`pairwise` passes the last two values 

`distrinct` dedupes the stream



**Subjects**

A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
const button = document.querySelector('#ex1')

const clickStream = Rx.Observable.fromEvent(button, 'click')

//Listen to only single clicks
const singleClickStream = clickStream
    .buffer(() => clickStream.throttle(250))
    .map((list) => list.length)
    .filter((x) => x === 1)
    // .scan((x) => x + 1, 0)

//Listen to only multiple clicks
const multiClickStream = clickStream
    .buffer(() => clickStream.throttle(250))
    .map((list) => list.length)
    .filter((x) => x >= 2)

//Listen to separate click streams
multiClickStream.subscribe((numclicks) => {
    document.querySelector('#multi').textContent = `${numclicks} x click`;
    document.querySelector('#single').textContent = '';
});

singleClickStream.subscribe((event) => {
    document.querySelector('#single').textContent = '1x click';
    document.querySelector('#multi').textContent = ``;
});


// Rx.Observable.merge(singleClickStream, multiClickStream)
//     .subscribe((suggestion) => {
//         document.querySelector('#combined').textContent = `Merge stream:${suggestion}`;
//     });

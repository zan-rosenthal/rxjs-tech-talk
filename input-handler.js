const input = Rx.Observable.fromEvent(document.querySelector('#ex2'), 'input');

//Takes a path and plucks it
const inputStream = input
  .map(R.pipe(
    R.path(['target', 'value']),
    R.uniq(),
    R.join('')
  ))
  .distinct()
  .pairwise()
  .subscribe((value) => {
    console.log(value)
  })

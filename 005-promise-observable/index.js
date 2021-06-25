const Rx = require('rxjs');
const myPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise Item 1");
        resolve("Promise Item 2");
    }, 1000)
})

myPromise.then(result => {
    console.log(result)
})

const myObservable = new Rx.Observable(observer => {
    setTimeout(() => {
        observer.next("Observable Item 1");
        observer.next("Observable Item 2");
        observer.next("Observable Item 3");
        observer.next("Observable Item 4");
    }, 1000)
})



const subscription = myObservable.subscribe(result => {
    console.log(result);
})

//subscription.unsubscribe();
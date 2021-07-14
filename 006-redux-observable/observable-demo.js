// import {Observable} from 'rxjs';

const rxjs = require('rxjs')

// Create an observable
const observable = new rxjs.Observable(subsriber => {
    subsriber.next('First Emit');
    subsriber.next('Second Emit');
    subsriber.next('Third Emit');
    subsriber.error('Fourth Emit - error');
    subsriber.next('Fifth Emit');
    subsriber.complete('Sixth Emit - complete');
    subsriber.next('Seventh Emit');
});

// Subscribe to the Observable
observable.subscribe({
    next: (x) => console.log('NEXT - ', x),
    error: (x) => console.log('ERROR - ', x),
    complete: () => console.log('COMPLETE - ', 'Completed'),
    //complete: (x) => console.log('COMPLETE - ', 'Completed', x),

})
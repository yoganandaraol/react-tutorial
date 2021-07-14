# RxJs

### Building blocks of RxJs:
* Observables
* Observers
* Operators
* Subject

## Observers:

`Observers` are javascript objects that can subscribe to `Observables` and `Subjects`. 

Once the observers subscribed, they can receive notifications of following types.
* next
* error
* complete

#### Observer Object:


    interface Observer<T> {
        closed?: boolean;
        next: (value: T) => void;
        error: (error: any) => void;
        complete: () => void;
    }

When an observable pushes any of the notifications (next, error or complete) associated Observer's `.next`, `.error` and `.complete` methods will be invoked.

## Observables:

Observables are javascript objects that can emit data over a period of time.

* complete and error are the final states of observable. So an observable can't emit any data after completed successfully or encountered an error.

#### Create an Observable

* Observable can be instantiated using `Observable()` constructor which takes a `subscribe` function as parameter.

```
import { Observable } from 'rxjs'

const observable = new Observable(subscriber => {
    // subscribe function logic
});
```

#### Subscribing to an Observable

* Observables can be subscribed using `.subscribe` method and passing an Observer.

```
observable.subscribe({
    next: (x) => console.log(x),
    error: (x) => console.log(x),
    complete: () => console.log('Completed')
});
```

* `Observable` is unicast where as `Subject` is multicast

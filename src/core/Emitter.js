export default class Emitter {
  constructor() {
    this.listeners = {};
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);

    return () => {
      this.listeners[event] = this.listeners[event]
          .filter((curFn) => curFn !== fn);
    }
  }

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((fn) => {
      fn(...args);
    })
    return true;
  }
}


// const emitter = new Emitter();

// const unsub = emitter.subscribe('umar', (data) => console.log(data));

// setTimeout(() => {
//   emitter.emit('umar', 'After 1 second')
// }, 1000);

// setTimeout(() => {
//   unsub();
//   console.log('Unsubscribed');
// }, 2000);


// setTimeout(() => {
//   emitter.emit('umar', 'After 3 second')
// }, 3000);


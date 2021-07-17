import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor(el, options = {}) {
    super(el, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.prepare();
    this.subscribers = [];
  }

  // Setting up the component
  prepare() {}

  // This method returns the template of the component
  toHtml() {
    return '';
  }

  // Initializing the component and settin up DOM listeners
  init() {
    this.initDomListeners();
  }

  // Subscribing an event to an emitter
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.subscribers.push(unsub);
  }

  // firing an event from an emitter
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Destroying DOM listeners
  remove() {
    this.removeDomListeners();
    this.subscribers.forEach((unsub) => unsub());
  }
}

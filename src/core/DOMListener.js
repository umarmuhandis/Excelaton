import {
  capitalize
} from './utils';

export default class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('$root is not defined');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = this.getMethodName(listener);

      if (!this[method]) {
        throw new Error(
            `${method} does not exist in ${this.name} component!`
        )
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    })
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = this.getMethodName(listener);
      this.$root.off(listener, this[method]);
    })
  }

  getMethodName(listener) {
    return 'on' + capitalize(listener);
  }
}

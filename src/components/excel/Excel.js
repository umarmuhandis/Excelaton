import DOMListener from "../../core/DOMListener";

export default class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components
  }
}
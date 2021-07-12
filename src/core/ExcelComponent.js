import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor(el, options = {}) {
    super(el, options.listeners);
    this.name = options.name || '';
  }

  // This method returns the template of the component
  toHtml() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  remove() {
    this.removeDomListeners();
  }
}

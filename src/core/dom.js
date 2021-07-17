class Dom {
  constructor(selector) {
    typeof selector === 'string' ?
      this.$el = document.querySelector(selector) :
      this.$el = selector;
  }

  html(element = '') {
    if (element) {
      this.$el.innerHTML = element;
      return this;
    }
    return this.$el;
  }

  get text() {
    return this.$el.textContent;
  }

  set text(text) {
    this.$el.textContent = text.trim('');
  }

  clear() {
    this.$el = '';
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
  }

  on(event, callbackFn) {
    this.$el.addEventListener(event, callbackFn);
  }

  off(event, callbackFn) {
    this.$el.removeEventListener(event, callbackFn);
  }

  closest(element) {
    return $(this.$el.closest(element));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }


  get dataset() {
    return this.$el.dataset;
  }

  get style() {
    return this.$el.style;
  }

  css(styles = {}) {
    return Object.assign(this.$el.style, styles)
  }
  querySelector(selector) {
    return $(this.$el.querySelector(selector));
  }

  querySelectorAll(selector) {
    return $(this.$el.querySelectorAll(selector));
  }

  forEach(callbackFn) {
    this.$el.forEach(callbackFn);
  }

  addClass(className) {
    this.$el.classList.add(className);
  }

  removeClass(className) {
    this.$el.classList.remove(className);
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        col: +parsed[0],
        row: +parsed[1]
      }
    }
    return this.$el.dataset.id;
  }

  get uncleElement() {
    return $(this.$el.parentElement.previousElementSibling);
  }

  focus() {
    this.$el.focus();
  }
}

export const $ = (selector) => {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);

  if (!classes) return;

  el.classList.add(classes);
  return $(el);
}

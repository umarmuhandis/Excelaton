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

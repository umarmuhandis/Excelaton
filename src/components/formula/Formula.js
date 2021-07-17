/* eslint-disable no-invalid-this */

import {$} from '../../core/dom';
import ExcelComponent from '../../core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static className = 'formula';

  constructor(el, options) {
    super(el, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      emitter: options.emitter
    });
  }

  init() {
    super.init();
    this.$formula = this.$root.querySelector('#formula');

    this.$on('table:input', (text) => {
      this.$formula.text = text;
    })

    this.$on('table:select', (text) => {
      this.setCaret();
      this.$formula.text = text;
    })
  }

  toHtml() {
    return `
      <div class="formula__icon">fx</div>
      <div 
        class="formula__input" 
        id="formula" 
        contenteditable spellcheck="false"
      >
      </div>
    `
  }

  onInput = (e) => {
    // eslint-disable-next-line
    this.$emit('formula:input', $(e.target).text);
  }

  onKeydown = (event) => {
    const keys = ['Enter', 'Tab']
    const {key} = event;

    if (keys.includes(key)) {
      event.preventDefault();
      this.$emit('formula:enter');
      this.setCaret();
    }
  }

  setCaret = () => {
    const el = document.querySelector('.cell.selected');
    const range = document.createRange();
    const sel = window.getSelection();

    range.setStart(el.childNodes[0], el.textContent.length);
    range.collapse(true);

    sel.removeAllRanges()
    sel.addRange(range);
  }
}

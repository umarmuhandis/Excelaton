import ExcelComponent from '../../core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static className = 'formula';

  constructor(el) {
    super(el, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  toHtml() {
    return `
      <div class="formula__icon">fx</div>
      <div class="formula__input" contenteditable spellcheck="false"></div>
    `
  }

  onInput = (event) => {
    console.log('Formula input value: ', event.target.textContent.trim());
  }

  onClick = (event) => {
    console.log('Click event!');
  }
}

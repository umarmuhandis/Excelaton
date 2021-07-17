import ExcelComponent from '../../core/ExcelComponent';

export default class Toolbar extends ExcelComponent {
  static className = 'toolbar';

  constructor(el, options) {
    super(el, {
      name: 'Toolbar',
      listeners: ['click'],
      emitter: options.emitter
    })
  }

  toHtml() {
    return `
    <div class="button">
      <span class="material-icons material-icons-outlined">
        format_align_left
      </span>
    </div>
    <div class="button">
      <span class="material-icons material-icons-outlined">
        format_align_center
      </span>
    </div>
    <div class="button">
      <span class="material-icons material-icons-outlined">
        format_align_right
      </span>
    </div>
    <div class="button">
      <span class="material-icons material-icons-outlined">
        format_bold
      </span>
    </div>
    <div class="button">
      <span class="material-icons material-icons-outlined">
        format_italic
      </span>
    </div>
    <div class="button">
      <span class="material-icons material-icons-outlined">
        format_underlined
      </span>
    </div>
    `
  }

  onClick() {
    console.log('Click event!!!');
  }
}

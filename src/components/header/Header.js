import ExcelComponent from '../../core/ExcelComponent';

export default class Header extends ExcelComponent {
  static className = 'header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      emitter: options.emitter
    })
  }
  toHtml() {
    return `
      <input value="Untitled spreadsheet" type="text" class="input" />

      <div>
        <div class="button">
          <span class="material-icons material-icons-outlined">
            delete
          </span>
        </div>
        <div class="button">
          <span class="material-icons material-icons-outlined">
            logout
          </span>
        </div>
      </div>
    `
  }
}

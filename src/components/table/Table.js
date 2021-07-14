import ExcelComponent from '../../core/ExcelComponent';
import resize from './table.resize';
import {createTable} from './table.template'
import {shouldResize} from './table.utils';

export default class Table extends ExcelComponent {
  static className = 'table'

  constructor(el) {
    super(el, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  toHtml() {
    return `${createTable(40)}`;
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      resize(e, this.$root);
    }
  }
}

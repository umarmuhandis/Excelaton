import ExcelComponent from '../../core/ExcelComponent';
import resize from './table.resize';
import {createTable} from './table.template'

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
    resize(e, this);
  }
}


// 129 ms  Scripting
// 679 ms  Rendering

// 41 ms  Scripting
// 378 ms  Rendering

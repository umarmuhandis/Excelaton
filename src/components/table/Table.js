import ExcelComponent from '../../core/ExcelComponent';
import {createTable} from './table.template'

export default class Table extends ExcelComponent {
  static className = 'table'
  toHtml() {
    return `${createTable(40)}`;
  }
}

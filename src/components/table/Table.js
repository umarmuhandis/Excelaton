import {$} from '../../core/dom';
import ExcelComponent from '../../core/ExcelComponent';
import resize from './table.resize';
import {createTable} from './table.template';
import {nextSelector, shouldResize, shouldSelectCell} from './table.utils';
import TableSelection from './TableSelection';

export default class Table extends ExcelComponent {
  static className = 'table'

  constructor(el, options) {
    super(el, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      emitter: options.emitter
    })

    this.maxRow = 40;
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.querySelector('div[data-id="0:0"]')
    this.selection.select($cell, this.$root);

    this.$on('formula:input', (text) => {
      this.selection.$firstSelected.text = text;
    })

    this.$on('formula:enter', () => {
      this.selection.$firstSelected.focus();
    })

    this.$emit('table:select', this.selection.$firstSelected.text)
  }

  toHtml() {
    return `${createTable(this.maxRow)}`;
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      resize(e, this.$root);
    }
    if (shouldSelectCell(e)) {
      const $selectedCell = $(e.target);
      this.$emit('table:select', $selectedCell.text)

      if (!e.shiftKey) {
        this.selection.select($selectedCell, this.$root);
      } else {
        this.selection.selectGroup($selectedCell, this.$root);
      }
    }
  }

  onKeydown(e) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowDown',
      'ArrowUp',
      'ArrowRight',
      'ArrowLeft'
    ]
    const {key} = e;


    if (keys.includes(key) && !e.shiftKey) {
      e.preventDefault();
      const id = this.selection.$firstSelected.id(true);
      const $nextSelected = this.$root
          .querySelector(`${nextSelector(key, id)}`);
      this.selection.select($nextSelected, this.$root);
      this.$emit('table:select', $nextSelected.text)
    }
  }

  onInput(e) {
    this.$emit('table:input', e.target.textContent);
  }
}

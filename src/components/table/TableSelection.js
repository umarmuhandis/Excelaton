import {colorify, matrix} from './table.utils';

class TableSelection {
  constructor() {
    this.group = [];
    this.$firstSelected = null;
  }

  select($el, $root) {
    this.clear($root);
    this.group.push($el);
    $el.addClass('selected');
    $el.focus();
    this.$firstSelected = $el;

    colorify($root, $el);
  }

  selectGroup($lastSelected, $root) {
    this.clear($root);
    const cells = matrix(this.$firstSelected, $lastSelected)
        .map((id) => $root.querySelector(`[data-id='${id}']`));
    cells
        .forEach(($cell) => {
          $cell
              .css({backgroundColor: 'rgb(14, 101, 235, .1)'});
          colorify($root, $cell);
        })
    this.$firstSelected.addClass('selected')
    this.group = [...cells]
  }

  clear($root) {
    this.group.forEach(($el) => {
      $el.removeClass('selected')
      $el.css({backgroundColor: 'transparent'});
      colorify($root, $el, false);
    });
    this.group = [];
  }
}

export default TableSelection;



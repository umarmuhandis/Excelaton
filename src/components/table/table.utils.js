/* eslint-disable  no-invalid-this*/

import {range} from '@core/utils'

export function shouldResize(e) {
  return e.target.dataset.resize;
}
export function shouldSelectCell(e) {
  return e.target.dataset.type === 'cell';
}


export function matrix($firstSelected, $lastSelected) {
  const {col: colMin, row: rowMin} = $firstSelected.id(true);
  const {col: colMax, row: rowMax} = $lastSelected.id(true);

  const cols = range(colMin, colMax);
  const rows = range(rowMin, rowMax);

  return cols.reduce((arr, colIndex) => {
    rows.forEach((rowIndex) => arr.push(`${colIndex}:${rowIndex}`));
    return arr;
  }, [])
}

export function colorify($root, $cell, addColor = true) {
  const colTitle = $root
      .querySelector(`[data-col-index="${$cell.dataset.col}"]`)
  const rowTitle = $cell.uncleElement;

  if (addColor) {
    return [colTitle, rowTitle]
        .forEach(($title) => $title.addClass('selected'));
  }

  [colTitle, rowTitle]
      .forEach(($title) => $title.removeClass('selected'))
}

export function nextSelector(key, {col, row}) {
  const MIN_VALUE = 0;
  switch (key) {
    case 'ArrowRight':
    case 'Tab':
      col++;
      return `[data-id="${col}:${row}"]`;
    case 'ArrowDown':
    case 'Enter':
      row++;
      return `[data-id="${col}:${row}"]`;
    case 'ArrowUp':
      row === MIN_VALUE ? row : row--;
      return `[data-id="${col}:${row}"]`;
    case 'ArrowLeft':
      col === MIN_VALUE ? col : col--;
      return `[data-id="${col}:${row}"]`;
  }
}


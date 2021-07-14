const CODES = {
  A: 65,
  Z: 90
}

const createCell = (cellData = '', index) => {
  return `
    <div class="cell" contenteditable="" data-cell-index='${index}'>
      ${cellData}
    </div>
  `
}

const createCol = (colData, index) => {
  return `
    <div class="column" data-resizable="column" data-col-index="${index}">
      ${colData}
      <div class="resize resize--column" data-resize="col">
        <div class="resize__line resize__line--column"></div>
      </div>
    </div>`
}

const createRow = (rowInfo, rowData = '') => {
  return `
    <div class = "row" data-resizable="row">
      <div class = "row-info">
        ${rowInfo}
        ${rowInfo ?
          `<div class="resize resize--row" data-resize="row">
             <div class="resize__line resize__line--row"></div>
           </div>` :
          ''}
      </div>
      <div class = "row-data">${rowData}</div>
    </div>
  `
}

const toChar = (index) => {
  return String.fromCharCode(CODES.A + index);
}

const arrayGenerator = (length) => {
  return new Array(length)
      .fill('')
}


export const createTable = (rowsCount = 15) => {
  const rows = [];
  const colsCount = CODES.Z - CODES.A + 1;

  const cols = arrayGenerator(colsCount)
      .map((_, index) => createCol(toChar(index), index))
      .join('');
  rows.push(createRow('', cols));

  for (let lineIndex = 0; lineIndex < rowsCount; lineIndex++) {
    const cells = arrayGenerator(colsCount)
        .map((_, i) => createCell('', i))
        .join('')
    rows.push(createRow(lineIndex + 1, cells));
  }

  return rows.join('');
}

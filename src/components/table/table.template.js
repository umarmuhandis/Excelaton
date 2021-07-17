const CODES = {
  A: 65,
  Z: 90
}

const createCell = (rowIndex) => {
  return (_, colIndex) => {
    return `
      <div class="cell" 
           contenteditable="" 
           data-type="cell"
           data-id='${colIndex}:${rowIndex}' 
           data-col='${colIndex}'>
      </div>
    `
  }
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

  const cols =
        arrayGenerator(colsCount)
            .map((_, index) => createCol(toChar(index), index))
            .join('');
  rows.push(createRow('', cols));

  for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
    const cells = arrayGenerator(colsCount)
        // .map((_, colIndex) => createCell(rowIndex, colIndex))
        .map(createCell(rowIndex))
        .join('')
    rows.push(createRow(rowIndex + 1, cells));
  }

  return rows.join('');
}

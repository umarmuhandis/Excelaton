const CODES = {
  A: 65,
  Z: 90
}

const createCell = (cellData = '') => {
  return `
    <div class="cell" contenteditable="">${cellData}</div>
  `
}

const createCol = (colData) => {
  return `
    <div class="column">
      ${colData}
    </div>`
}

const createRow = (rowInfo, rowData = '') => {
  return `
    <div class = "row">
      <div class = "row-info">${rowInfo}</div>
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
      .map((_, index) => createCol(toChar(index)))
      .join('');


  rows.push(createRow('', cols));

  for (let lineIndex = 0; lineIndex < rowsCount; lineIndex++) {
    const cells = arrayGenerator(colsCount)
        .map((_) => createCell())
        .join('')
    rows.push(createRow(lineIndex + 1, cells));
  }

  return rows.join('');
}

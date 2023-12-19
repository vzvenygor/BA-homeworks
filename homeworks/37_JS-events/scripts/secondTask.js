function sortTable(colNum, type) {
  const table = document.getElementById('table');
  const tbody = document.getElementById('js-tbody');
  const rowsArray = Array.from(tbody.rows);
  let compare;

  if ((type = 'number')) {
    compare = function (rowA, rowB) {
      return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
    };
  }

  if ((type = 'string')) {
    compare = function (rowA, rowB) {
      return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
        ? 1
        : -1;
    };
  }

  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}

export default sortTable;

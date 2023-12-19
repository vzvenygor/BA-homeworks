import changeTextarea from './scripts/firstTask.js';
import sortTable from './scripts/secondTask.js';
import makeResizableDiv from './scripts/thirtTask.js';

// First task
changeTextarea();

// Second task
table.addEventListener('click', function (e) {
  if (e.target.tagName != 'TH') return;
  const th = e.target;
  sortTable(th.cellIndex, th.dataset.type);
});

// Third task
makeResizableDiv('resizable-content');

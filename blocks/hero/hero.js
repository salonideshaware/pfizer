import {
    createElement,
} from '../../scripts/scripts.js';

const tableRows = document.querySelectorAll("table tr");
tableRows.forEach((tableRow) => {
    console.log(tableRows);
    const rowDivs = tableRow.querySelectorAll("div.button-container");
    tableRow.innerHTML = "";
    rowDivs.forEach((rowDiv) => {
        const tableData = document.createElement("td");
        tableData.classList = rowDiv.classList;
        tableData.innerHTML = rowDiv.innerHTML;
        tableRow.append(tableData);
    });
});

export default function decorate(block) {
    const table = document.createElement('table');
    [...block.children].forEach((row) => {
      const tr = document.createElement('tr');
      tr.innerHTML = row.innerHTML;
      // const td = document.createElement('td');
      [...tr.children].forEach(() => {
        const tableRows = document.querySelectorAll('table tr');
        tableRows.forEach((tableRow) => {
          console.log(tableRows);
          const rowDivs = tableRow.querySelectorAll('div.button-container');
          tableRow.innerHTML = '';
          rowDivs.forEach((rowDiv) => {
            const tableData = document.createElement('td');
            tableData.classList = rowDiv.classList;
            tableData.innerHTML = rowDiv.innerHTML;
            tableRow.append(tableData);
          });
        });
      });
      table.append(tr);
    });
    block.textContent = '';
    block.append(table);
  }
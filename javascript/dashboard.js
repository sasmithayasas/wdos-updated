let _localStorageData = localStorage.getItem('newsletterData');
    const userData = JSON.parse(_localStorageData);

    const table = document.getElementById('user-data-table');

    function renderTable(data) {
      // Clear existing table content
      table.innerHTML = '';

      // Create table header row
      const headerRow = table.insertRow();
      const headerCells = ["Email", "Created Date"]; // Define table headers

      for (const headerCellText of headerCells) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = headerCellText;
      }

      // Create data rows
      for (const rowData of data) {
        const dataRow = table.insertRow();
        for (const key in rowData) {
          const dataCell = dataRow.insertCell();
          dataCell.textContent = rowData[key];
        }
      }
    }

    renderTable(userData);


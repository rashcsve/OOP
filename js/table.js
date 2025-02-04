class Table {
  constructor(data) {
    this.cryptocoins = data || [];
    this.tableContainer = document.getElementById("my-table");
  }

  init() {
    if (!this.tableContainer) {
      console.error("Table container not found.");
      return;
    }
    this.paintTable();

    const search = document.getElementById("search");
    search.addEventListener("click", (event) => {
      event.preventDefault();
      this.search();
    });

    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.search();
      }
    });
  }

  paintTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const headers = ["No.", "Name", "Symbol", "Price USD"];
    headers.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    this.cryptocoins.forEach((coin) => {
      const tr = document.createElement("tr");
      const values = [coin.rank, coin.name, coin.symbol, parseFloat(coin.price_usd || 0).toFixed(2)];
      values.forEach((text) => {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    this.tableContainer.appendChild(table);
  }

  search() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const rows = Array.from(this.tableContainer.querySelectorAll("tbody tr"));
    const error = document.getElementById("error-table");
    let found = false;

    rows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();
      const match = rowText.includes(searchInput);
      row.style.display = match ? "table-row" : "none";
      if (match) found = true;
    });

    this.tableContainer.style.display = found ? "block" : "none";
    error.textContent = found ? "" : "There is no such cryptocurrency...";
  }
}

class Table {
  _table = null;
  constructor(data) {
    this._cryptocoins = data;
  }
  init() {
    this._table = document.getElementById("my-table");
    this._paintTable();

    const search = document.getElementById("search");
    search.addEventListener("click", (event) => {
      event.preventDefault();
      this._search();
    });
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this._search();
      }
    });
  }

  _paintTable() {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    // Creating and adding data to first row of the table
    let row_1 = document.createElement("tr");
    let heading_1 = document.createElement("th");
    heading_1.innerHTML = "No.";
    let heading_2 = document.createElement("th");
    heading_2.innerHTML = "Name";
    let heading_3 = document.createElement("th");
    heading_3.innerHTML = "Symbol";
    let heading_4 = document.createElement("th");
    heading_4.innerHTML = "Price USD";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    const span = document.getElementById("span1");
    CRYPTOCOINS.forEach((coin) => {
      let tr = document.createElement("tr");
      let td_1 = document.createElement("td");
      td_1.innerHTML = coin.rank;
      let td_2 = document.createElement("td");
      td_2.innerHTML = coin.name;
      let td_3 = document.createElement("td");
      td_3.innerHTML = coin.symbol;
      let td_4 = document.createElement("td");
      td_4.innerHTML = coin.price_usd;

      // // obarvim cifry, pokud se kurz zmenil
      // if (coin.percent_change_1h > 0) {
      //   change1h.addClass("positive");
      // } else {
      //   change1h.addClass("negative");
      // }
      // if (coin.percent_change_24h > 0) {
      //   change24h.addClass("positive");
      // } else {
      //   change24h.addClass("negative");
      // }
      // if (coin.percent_change_7d > 0) {
      //   change7d.addClass("positive");
      // } else {
      //   change7d.addClass("negative");
      // }
      tr.appendChild(td_1);
      tr.appendChild(td_2);
      tr.appendChild(td_3);
      tr.appendChild(td_4);
      tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);

    this._table.appendChild(table);
  }

  _search() {
    const searchInput = document.getElementById("search-input");
    const value = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll("tr");
    // Convert rows NodeList to an array
    let rowsArray = Array.from(rows);
    rowsArray.shift();
    const filteredRows = rowsArray.filter((row, index) => {
      const rowValue = row.innerText.toLowerCase();
      if (rowValue.includes(value)) {
        rows[index + 1].style.display = "table-row";
      } else {
        rows[index + 1].style.display = "none";
      }
      return rowValue.includes(value);
    });
    const error = document.getElementById("error-table");
    if (!filteredRows.length) {
      this._table.style.display = "none";
      error.innerHTML = "There is no such cryptocurrency...";
    } else {
      this._table.style.display = "block";
      error.innerHTML = "";
    }
  }
}

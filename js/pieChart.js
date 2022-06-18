class PieChart {
  constructor(data) {
    this._cryptocoins = data;
    this._total = 0;
  }

  init() {
    this._createSvgElement();
    this._setTotal();

    const buttons = document.querySelector(".buttons");
    this._setButtons(buttons);

    buttons.addEventListener("click", (e) => {
      if (e.target != e.currentTarget) {
        const el = e.target;
        const price = el.getAttribute("data-price");
        this._setChartPart(price);

        let name = el.getAttribute("data-name");
        this._setLabel(name, price);
      }
      e.stopPropagation();
    });
  }

  _createSvgElement() {
    const xmlns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "width", 100);
    svg.setAttributeNS(null, "height", 100);
    svg.setAttribute("class", "chart");

    let circle = document.createElementNS(xmlns, "circle");
    circle.setAttributeNS(null, "cx", 50);
    circle.setAttributeNS(null, "cy", 50);
    circle.setAttributeNS(null, "r", 25);
    circle.setAttribute("class", "pie");
    svg.appendChild(circle);

    const figure = document.querySelector("figure");
    figure.appendChild(svg);
  }

  _setTotal() {
    this._cryptocoins.forEach((coin) => {
      this._total += Number(parseFloat(coin.price_usd).toFixed(2));
    });
    this._total = this._total.toFixed(2);
  }

  _setButtons(buttons) {
    this._cryptocoins.forEach((coin) => {
      let button = document.createElement("button");
      button.innerHTML = coin.name;
      button.setAttribute("data-name", coin.name);
      button.setAttribute("data-price", parseFloat(coin.price_usd).toFixed(2));

      buttons.appendChild(button);
    });
  }

  _calculateChartSpace(num) {
    return (num * 160) / this._total;
  }

  _setChartPart(price) {
    const fixedNumber = this._calculateChartSpace(price);
    const result = fixedNumber + " " + 160;
    const pie = document.querySelector(".pie");
    pie.style.strokeDasharray = result;
  }

  _setLabel(name, price) {
    const p = (price * 100) / this._total;
    const pie = document.querySelector(".chart-currency-name");
    pie.innerHTML = "";
    const stringSpan = document.createElement("span");
    const value =
      name +
      ": " +
      p.toFixed(2) +
      "%" +
      " - " +
      parseFloat(price).toFixed(2) +
      "$";
    stringSpan.innerHTML = value;
    pie.appendChild(stringSpan);
  }
}

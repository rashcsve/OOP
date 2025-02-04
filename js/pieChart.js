class PieChart {
  constructor(data) {
    this.cryptocoins = data || [];
    this.total = 0;
    this.buttonsContainer = document.querySelector(".buttons");
    this.figureContainer = document.querySelector("figure");
    this.chartLabel = document.querySelector(".chart-currency-name");
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  init() {
    if (!this.cryptocoins.length) {
      console.error("No cryptocurrency data available for PieChart.");
      return;
    }

    this.createSvgElement();
    this.calculateTotal();
    this.renderButtons();
    this.attachEventListeners();
  }

  createSvgElement() {
    const xmlns = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);
    svg.classList.add("chart");

    const circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 25);
    circle.classList.add("pie");
    
    svg.appendChild(circle);
    this.figureContainer.appendChild(svg);
  }

  calculateTotal() {
    this.total = this.cryptocoins.reduce((sum, coin) => sum + parseFloat(coin.price_usd || 0), 0);
  }

  renderButtons() {
    this.cryptocoins.forEach((coin) => {
      const button = document.createElement("button");
      button.textContent = coin.name;
      button.dataset.name = coin.name;
      button.dataset.price = parseFloat(coin.price_usd || 0).toFixed(2);
      
      this.buttonsContainer.appendChild(button);
    });
  }

  attachEventListeners() {
    this.buttonsContainer.addEventListener("click", this.handleButtonClick);
  }

  removeEventListeners() {
    this.buttonsContainer.removeEventListener("click", this.handleButtonClick);
  }

  handleButtonClick(event) {
    if (event.target !== event.currentTarget) {
      const { name, price } = event.target.dataset;
      this.updateChart(price);
      this.updateLabel(name, price);
    }
  }

  calculateChartSpace(price) {
    return (parseFloat(price) * 160) / this.total;
  }

  updateChart(price) {
    const pie = document.querySelector(".pie");
    if (pie) {
      pie.style.strokeDasharray = `${this.calculateChartSpace(price)} 160`;
    }
  }

  updateLabel(name, price) {
    const percentage = ((parseFloat(price) * 100) / this.total).toFixed(2);
    this.chartLabel.innerHTML = `<span>${name}: ${percentage}% - ${parseFloat(price).toFixed(2)}$</span>`;
  }
}

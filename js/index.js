class App {
  constructor() {
    this._cryptocoins = [];
    this._pages = document.querySelectorAll("section");
    this.init();
  }

  setCryptocoins(coins) {
    this._cryptocoins = coins;
  }

  init() {
    this.setCryptocoins(CRYPTOCOINS);
    this._handleRouting();
    this._startComponents();
  }

  _handleRouting() {
    const currentRoute = window.location.hash;
    this._changePage(currentRoute === "#table-main" ? currentRoute : "#other-main");
  }

  _changePage(targetPage) {
    this._pages.forEach(page => {
      page.classList.toggle("is-visible", page.getAttribute("data-route") === targetPage);
    });
  }

  _startComponents() {
    // Listen for route changes
    window.addEventListener("popstate", () => this._handleRouting());

    // Initialize components
    [Marquee, PieChart, Converter, Table].forEach(Component => {
      new Component(this._cryptocoins).init();
    });
  }
}

new App();

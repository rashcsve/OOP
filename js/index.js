class App {
  _cryptocoins;
  constructor() {
    this._pages = document.querySelectorAll("section");
    this.init();
  }

  setCryptocoins(coins) {
    this._cryptocoins = coins;
  }

  init() {
    this.setCryptocoins(CRYPTOCOINS);
    this._route();
    this._start();
  }

  _route() {
    const hash = window.location.hash;
    console.log(hash);
    switch (hash) {
      case "#table-main":
        this._changePage(hash);
        break;
      case "#other-main":
      default:
        this._changePage("#other-main");
        break;
    }
  }

  _changePage(section) {
    this._pages.forEach((page) => {
      console.log(page);
      if (page.getAttribute("data-route") === section) {
        page.classList.add("is-visible");
      } else {
        page.classList.remove("is-visible");
      }
    });
  }

  _start() {
    // Route Changes
    window.addEventListener("popstate", (event) => {
      console.log(event);
      this._route();
    });

    const m = new Marquee(this._cryptocoins);
    m.init();

    const svg = new PieChart(this._cryptocoins);
    svg.init();

    const c = new Converter(this._cryptocoins);
    c.init();

    const t = new Table(this._cryptocoins);
    t.init();
  }
}

new App();

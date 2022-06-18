class App {
  _cryptocoins;
  constructor() {
    this._pages = document.querySelectorAll("section");
    this._checkConnection();
    this.init();
  }

  setCryptocoins(coins) {
    this._cryptocoins = coins;
  }

  async init() {
    const isOnline = await this._checkConnection();
    if (isOnline) {
      // TODO: Fix getting data from API
      const apiCryptocoins = await this.getAPICryptocoins();
      this.setCryptocoins(apiCryptocoins);
    } else {
      this.setCryptocoins(CRYPTOCOINS);
    }
    console.log(this._cryptocoins);
    this._route();
    this._start();
  }

  async _checkConnection() {
    // const isOnline = navigator.onLine;
    console.log("check");
    // return isOnline;
    return false;
  }

  async getAPICryptocoins() {
    try {
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  _route() {
    const hash = window.location.hash;
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

//metoda pro pristup k datum z API pro kryptomeny
// Page.prototype._init = function () {
//   var api_url = "https://api.coinmarketcap.com/v1/ticker/";
//   var self = this;
//   $.get(api_url, function (data, status) {
//     // console.log(status)
//     //pokud data jsou, startuju aplikaci
//     if (status === "success") {
//       self._route();
//       self._cryptocoins = data;
//       self._start(true);
//     } else {
//       return;
//       console.error("Data loading failed");
//     }
//   });
// };

new App();

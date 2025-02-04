class Marquee {
  constructor(data) {
    this.cryptocoins = data || [];
    this.marqueeContainer = document.querySelector(".marquee");
  }

  init() {
    if (!this.cryptocoins.length) {
      console.error("No cryptocurrency data available for Marquee.");
      return;
    }
    if (!this.marqueeContainer) {
      console.error("Marquee container not found.");
      return;
    }

    const runningString = this.cryptocoins.map(this.buildStringPart).join(" ");
    const stringSpan = document.createElement("span");
    stringSpan.innerHTML = runningString;

    this.marqueeContainer.appendChild(stringSpan);
  }

  buildStringPart(coin) {
    return `${coin.name} (${coin.symbol}): ${parseFloat(coin.price_usd || 0).toFixed(2)}$;`;
  }
}

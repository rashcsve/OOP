class Marquee {
  constructor(data) {
    this._cryptocoins = data;
  }

  init() {
    let runningString = "";
    this._cryptocoins.forEach((coin) => {
      runningString += this.buildStringPart(coin);
    });

    const stringSpan = document.createElement("span");
    stringSpan.innerHTML = runningString;

    const marquee = document.querySelector(".marquee");
    marquee.appendChild(stringSpan);
  }

  buildStringPart(coin) {
    return (
      coin.name +
      "(" +
      coin.symbol +
      ")" +
      ":" +
      " " +
      parseFloat(coin.price_usd).toFixed(2) +
      "$" +
      "; "
    );
  }
}

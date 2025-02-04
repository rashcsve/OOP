class Converter {
  constructor(data) {
    this.cryptocoins = data || [];
    this.selectedOption = null;
    this.selectedValue = "";
    this.valueToConvert = null;
  }

  init() {
    const convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", () => {
      this.setValues();
      const coinFrom = this.cryptocoins.find(
        (coin) => this.selectedOption.id === coin.id
      );
      const result = document.getElementById("result");
      if (!isNaN(this.valueToConvert) && this.valueToConvert > 0) {
        const resultValue = this.valueToConvert * parseFloat(coinFrom.price_usd || 0);
        result.innerHTML = resultValue.toFixed(2) + " $";
      } else {
        result.innerHTML = "Please enter a number only!";
      }
    });

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
      document.getElementById("amount").reset();
      document.getElementById("result").innerHTML = "";
    });
  }

  setValues() {
    this.valueToConvert = parseFloat(document.getElementById("amount_input").value) || 0;
    const selectFrom = document.getElementById("currency");
    this.selectedOption = selectFrom.options[selectFrom.selectedIndex];
    this.selectedValue = this.selectedOption.text;
  }
}

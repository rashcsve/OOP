class Converter {
  _selectedOption = null;
  _selectedValue = "";
  _valueToConvert = null;

  constructor(data) {
    this._cryptocoins = data;
  }

  init() {
    const convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", () => {
      this._setValues();

      const coinFrom = CRYPTOCOINS.find(
        (coin) => this._selectedOption.id === coin.id
      );
      const result = document.getElementById("result");
      if (!isNaN(this._valueToConvert) && this._valueToConvert > 0) {
        const resultValue = this._valueToConvert * +coinFrom.price_usd;
        result.innerHTML = resultValue + " $";
      } else {
        result.innerHTML = "Please enter a number only!";
      }
    });

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
      document.getElementById("amount").reset();
      const result = document.getElementById("result");
      result.innerHTML = "";
    });
  }

  _setValues() {
    this._valueToConvert = document.getElementById("amount_input").value;

    const selectFrom = document.getElementById("currency");
    this._selectedOption = selectFrom.options[selectFrom.selectedIndex];
    this._selectedValue = this._selectedOption.text;
  }
}


//trida pro marquee element
function Marquee(data) {
  this._cryptocoins = data;
}

Marquee.prototype.addMarquee = function(){
  //vypisu prvni 5 kryptomeny s nazvem a cenou
  var runningString = $("<span/>").html(this._cryptocoins[0].name + "(" + this._cryptocoins[0].symbol + ")" + ":" + " " + parseFloat(this._cryptocoins[0].price_usd).toFixed(2) + "$" + "; " 
                                          + this._cryptocoins[1].name + "(" + this._cryptocoins[1].symbol + ")" + ":" + " " + parseFloat(this._cryptocoins[1].price_usd).toFixed(2) + "$" + "; " 
                                          + this._cryptocoins[2].name + "(" + this._cryptocoins[2].symbol + ")" + ":" + " " + parseFloat(this._cryptocoins[2].price_usd).toFixed(2) + "$" + "; " 
                                          + this._cryptocoins[3].name + "(" + this._cryptocoins[3].symbol + ")" + ":" + " " + parseFloat(this._cryptocoins[3].price_usd).toFixed(2) + "$" + "; " 
                                          + this._cryptocoins[4].name + "(" + this._cryptocoins[4].symbol + ")" + ":" + " " + parseFloat(this._cryptocoins[4].price_usd).toFixed(2) + "$" + "; ")
  //a pridam do stranky
  $(".marquee").append(runningString);
};
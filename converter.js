
//trida pro konverter
function Converter(data) {
  this._cryptocoins = data;
}

Converter.prototype._start = function(cryptocoins){	
  //pracuje na stisknuti tlacitka "convert"
	$("#convert").click(function() {
       var convertAm = $("#amount_input").val();
       var select1 = $("#currency option:selected").text();
       var select2 = $("#currency1 option:selected").text();
       //convert Bitcoin
       var check = convertAm * 15;
       if (convertAm != "" && isNaN(check)==false) {
        if(select1 === "Bitcoin(BTC)" && select2 === "Ethereum(ETH)") {
          $("#result").html((convertAm * cryptocoins[0].price_usd / cryptocoins[1].price_usd).toFixed(2) + " (ETH)")
         } else if(select1 === "Bitcoin(BTC)" && select2 === "Ripple(XRP)") {
           $("#result").html(convertAm * cryptocoins[0].price_usd / cryptocoins[2].price_usd + " (XRP)")
         } else if(select1 === "Bitcoin(BTC)" && select2 === "Bitcoin(BTC)") {
           $("#result").html(convertAm + " (BTC)")
         } else if(select1 === "Bitcoin(BTC)" && select2 === "Dollar($)") {
           $("#result").html(convertAm * cryptocoins[0].price_usd + " ($)")
         } 
       //convert ethereum
       if(select1 === "Ethereum(ETH)" && select2 === "Bitcoin(BTC)") {
          $("#result").html(convertAm * cryptocoins[1].price_usd / cryptocoins[0].price_usd + " (BTC)")
          } else if(select1 === "Ethereum(ETH)" && select2 === "Ripple(XRP)") {
            $("#result").html(convertAm * cryptocoins[1].price_usd / cryptocoins[2].price_usd + " (XRP)")
          } else if(select1 === "Ethereum(ETH)" && select2 === "Ethereum(ETH)") {
            $("#result").html(convertAm + " (ETH)");
          } else if(select1 === "Ethereum(ETH)" && select2 === "Dollar($)") {
            $("#result").html(convertAm * cryptocoins[1].price_usd + " ($)")
          }
       //convert Ripple
       if(select1 === "Ripple(XRP)" && select2 === "Bitcoin(BTC)") {
          $("#result").html(convertAm * cryptocoins[2].price_usd / cryptocoins[0].price_usd + " (BTC)")
          } else if(select1 === "Ripple(XRP)" && select2 === "Ripple(XRP)") {
            $("#result").html(convertAm + " (XRP)")
          } else if(select1 === "Ripple(XRP)" && select2 === "Ethereum(ETH)") {
            $("#result").html(convertAm * cryptocoins[2].price_usd / cryptocoins[1].price_usd + " (ETH)");
          } else if(select1 === "Ripple(XRP)" && select2 === "Dollar($)") {
            $("#result").html(convertAm * cryptocoins[2].price_usd + " ($)")
          }
       //convert dollars 
        if(select1 === "Dollar($)" && select2 === "Bitcoin(BTC)") {
          $("#result").html(convertAm / cryptocoins[0].price_usd + " (BTC)")
        } else if(select1 === "Dollar($)" && select2 === "Ripple(XRP)") {
            $("#result").html(convertAm / cryptocoins[2].price_usd + " (XRP)")
          } else if(select1 === "Dollar($)" && select2 === "Ethereum(ETH)") {
            $("#result").html(convertAm / cryptocoins[1].price_usd + " (ETH)");
          } else if(select1 === "Dollar($)" && select2 === "Dollar($)") {
            $("#result").html(convertAm + " ($)")
          }
        }

     });
    //resetovani dat
    $("#reset").click(function() {
      $("#amount").trigger("reset");
      $("#result").empty();
    });

};

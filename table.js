
//třída pro vytváření tabulky s kryptoměnami pomocí JS
function Table(data) {
  this._cryptocoins = data;
}

//Metoda pro kresleni tabulky
Table.prototype._paint = function(){
	var table = $("<table/>") // najdu v dokumentu
    table.append($("<thead/>").append($("<tr/>").append($("<th>№</th>")).append($("<th>Name</th>")).append($("<th>Symbol</th>")).append($("<th>Price USD</th>")).append($("<th>1 hour change</th>")).append($("<th>24 hours change</th>")).append($("<th>7 days change</th>")))); //vytvarim tabulku
    var span = $("#span1")
    //vlozim prvni deset meny do tabulky
    for (var i = 0; i < 10; i++) { 
      var tr = $("<tr/>") 
      var name = $("<td/>").html(this._cryptocoins[i].name); //pridavam slouped pro jmeno
      var symbol =$("<td/>").html(this._cryptocoins[i].symbol); // ...symbol
      var change1h = $("<td/>").html(this._cryptocoins[i].percent_change_1h); //...zmenu kurzu za posledni hodinu v %
      var change24h = $("<td/>").html(this._cryptocoins[i].percent_change_24h); //...zmenu kurzu za posledni 24h v %
      var change7d = $("<td/>").html(this._cryptocoins[i].percent_change_7d); //...zmenu kurzu za posledni tyden v %
      var price = $("<td/>").html(parseFloat(this._cryptocoins[i].price_usd).toFixed(2)); //...aktualni cena v dolarech
      var number = $("<td/>").html(this._cryptocoins[i].rank) //...poradi
  
    // obarvim cifry, pokud se kurz zmenil 
     if (this._cryptocoins[i].percent_change_1h > 0) { 
      change1h.addClass("positive"); 
     } 
     else { 
      change1h.addClass("negative");  
     } 
     
     if (this._cryptocoins[i].percent_change_24h > 0) { 
      change24h.addClass("positive"); 
     } else { 
      change24h.addClass("negative"); 
     } 
     
       if (this._cryptocoins[i].percent_change_7d > 0) { 
      change7d.addClass("positive"); 
     } else { 
      change7d.addClass("negative"); 
     } 
 
     tr.append(number).append(name).append(symbol).append(price).append(change1h).append(change24h).append(change7d); 
     table.append(tr); //pridavam data do tabulky
	} 

	$("#my-table").append(table); // pridavam tabulku

	//Sort metoda podle stisknuti nejakeho nazvu
    $("#my-table").on("click", "table thead th", function() {
        var table = $(this).parents("table").eq(0);
        var rows = table.find("tr:gt(0)").toArray().sort(Table.prototype.comparator($(this).index()));
        this.asc = !this.asc;
        //obracene poradi
        if (!this.asc) {
            rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i]);
        }
    });

    //vyhledavani na stisknuti tlacitka
    $("#search").click(function() { 
      Table.prototype.search();
  	});

    //vyhledavani na stisknuti klavesy enter
    $("#search-input").keypress(function() { 
      Table.prototype.search();
    });
};

//vyhledavani
Table.prototype.search = function(){
  //beru data z inputu 
  var value = $("#search-input").val().toLowerCase();
        $("table > tr").filter(function() {
          //nechavam jen ta data, ktera maji hodnotu promenne value
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); 
        });
        if($("table > tr").text().toLowerCase().indexOf(value) < 0) {
          $("table").hide();
          $("#error-table").html("There is no such cryptocurrency...");
        } else {
          $("table").show();
          $("#error-table").empty();
        }
};

//porovnani
Table.prototype.comparator = function(index){
	return function(a, b) {
    var valueA = Table.prototype.getCellValue(a, index);
    var valueB = Table.prototype.getCellValue(b, index);

    return $.isNumeric(valueA) && $.isNumeric(valueB) ? valueA - valueB : valueA.localeCompare(valueB);
    }
};

//hodnota bunky
Table.prototype.getCellValue = function(row, index){
	return $(row).children("td").eq(index).text();
};
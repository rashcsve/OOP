//trida pro JS praci s SVG
function SVG(data) {
  this._cryptocoins = data;
  this._total = 0;
}

//nakreslit svg
SVG.prototype._paint = function(){
	//pridat kruh vytvoreny pomoci svg na stranku
	let svgEl = $('<svg width="100" height="100" class="chart"><circle r="25" cx="50" cy="50" class="pie"/></svg>');
  	$('figure').append(svgEl);
  	//vypocet celkove ceny 5 nejpopularnejsich men a zapisu ji do promenne total
	for(var j=0; j<5;j++) {
		this._total = Number(this._total) + Number(parseFloat(this._cryptocoins[j].price_usd).toFixed(2));
	}

	//pridat 5 tlacitek, ktere odpovidaji 5 prvnim nejpopul. menam
	for(let j=0; j<5;j++) {
	    let b = $("<button>").html(this._cryptocoins[j].name);
	    //nastavit atributy
	    b.attr('data-name', this._cryptocoins[j].name); 
	    b.attr('data-price', parseFloat(this._cryptocoins[j].price_usd).toFixed(2));

	    $('.buttons').append(b);
  	}

  	//zpracovani udalosti na kliknuti tlacitka
  	var self = this;
  	$(".buttons").on("click",  function(e) {
	    if(e.target != e.currentTarget) {
	      let el = $(e.target);
	      let price = el.attr('data-price');
	      //nakreslit uvnitr kruha odpovidajici cast
	      self._setPieChart(price);
	      let name = el.attr('data-name');
	      //pridat nazvy
	      self._setActiveName(name, price);
	    }
	    e.stopPropagation();  
	});
};

//vypocet odpovidajici plochy uvnitr kruha
SVG.prototype._numberFixer = function(num){
	var result = ((num * 160) / this._total);
    return result; 
};

//kresleni odpovidajici casti
SVG.prototype._setPieChart = function(price){
	var fixedNumber = this._numberFixer(price),
        result = fixedNumber + ' ' + 160;
    $(".pie").css({'stroke-dasharray': result});
};

//pridani nazvu nad kruhem
SVG.prototype._setActiveName = function(name, price){
	var p = (price*100)/this._total;
  	$(".chart-currency-name").html(name + ": " + p.toFixed(2) + "%" + " - " + parseFloat(price).toFixed(2) + "$");
};

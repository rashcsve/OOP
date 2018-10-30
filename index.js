
//hlavni js 
function Page() {
  this._cryptocoins;
  this._pages = $("section");
  this._check();
}

//zjisteni stavu
Page.prototype._check = function(){
  //využití JS API pro zjišťování stavu
  var condition = navigator.onLine;
  console.log(condition)
  //pokud jsme online, beru data z API
  if(condition === true) {
    console.log('online connection')
    this._init();
  } else {
    //pokud neni pripojeni, beru staticka data
    console.log('offline connection')
    this._cryptocoins = [
      {
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "8379.38", 
        "price_btc": "1.0", 
        "24h_volume_usd": "4667050000.0", 
        "market_cap_usd": "142822551894", 
        "available_supply": "17044525.0", 
        "total_supply": "17044525.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.23", 
        "percent_change_24h": "0.75", 
        "percent_change_7d": "-3.11", 
        "last_updated": "1526831972"
    }, 
    {
        "id": "ethereum", 
        "name": "Ethereum", 
        "symbol": "ETH", 
        "rank": "2", 
        "price_usd": "713.503", 
        "price_btc": "0.0852398", 
        "24h_volume_usd": "1990900000.0", 
        "market_cap_usd": "71033544646.0", 
        "available_supply": "99556056.0", 
        "total_supply": "99556056.0", 
        "max_supply": null, 
        "percent_change_1h": "0.32", 
        "percent_change_24h": "0.96", 
        "percent_change_7d": "-0.81", 
        "last_updated": "1526831959"
    }, 
    {
        "id": "ripple", 
        "name": "Ripple", 
        "symbol": "XRP", 
        "rank": "3", 
        "price_usd": "0.690149", 
        "price_btc": "0.00008245", 
        "24h_volume_usd": "237444000.0", 
        "market_cap_usd": "27046917390.0", 
        "available_supply": "39189968239.0", 
        "total_supply": "99992233977.0", 
        "max_supply": "100000000000", 
        "percent_change_1h": "0.37", 
        "percent_change_24h": "1.37", 
        "percent_change_7d": "-5.06", 
        "last_updated": "1526831943"
    }, 
    {
        "id": "bitcoin-cash", 
        "name": "Bitcoin Cash", 
        "symbol": "BCH", 
        "rank": "4", 
        "price_usd": "1237.36", 
        "price_btc": "0.147823", 
        "24h_volume_usd": "673992000.0", 
        "market_cap_usd": "21206138619.0", 
        "available_supply": "17138213.0", 
        "total_supply": "17138213.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.57", 
        "percent_change_24h": "4.24", 
        "percent_change_7d": "-16.23", 
        "last_updated": "1526831953"
    }, 
    {
        "id": "eos", 
        "name": "EOS", 
        "symbol": "EOS", 
        "rank": "5", 
        "price_usd": "13.688", 
        "price_btc": "0.00163526", 
        "24h_volume_usd": "1064690000.0", 
        "market_cap_usd": "11890362250.0", 
        "available_supply": "868670533.0", 
        "total_supply": "900000000.0", 
        "max_supply": "1000000000.0", 
        "percent_change_1h": "0.54", 
        "percent_change_24h": "4.3", 
        "percent_change_7d": "-7.29", 
        "last_updated": "1526831952"
    }, 
    {
        "id": "litecoin", 
        "name": "Litecoin", 
        "symbol": "LTC", 
        "rank": "6", 
        "price_usd": "137.365", 
        "price_btc": "0.0164105", 
        "24h_volume_usd": "314915000.0", 
        "market_cap_usd": "7777185640.0", 
        "available_supply": "56616938.0", 
        "total_supply": "56616938.0", 
        "max_supply": "84000000.0", 
        "percent_change_1h": "0.35", 
        "percent_change_24h": "0.64", 
        "percent_change_7d": "-4.25", 
        "last_updated": "1526831942"
    }, 
    {
        "id": "cardano", 
        "name": "Cardano", 
        "symbol": "ADA", 
        "rank": "7", 
        "price_usd": "0.247977", 
        "price_btc": "0.00002962", 
        "24h_volume_usd": "69773000.0", 
        "market_cap_usd": "6429317171.0", 
        "available_supply": "25927070538.0", 
        "total_supply": "31112483745.0", 
        "max_supply": "45000000000.0", 
        "percent_change_1h": "0.49", 
        "percent_change_24h": "0.77", 
        "percent_change_7d": "-11.84", 
        "last_updated": "1526831956"
    }, 
    {
        "id": "stellar", 
        "name": "Stellar", 
        "symbol": "XLM", 
        "rank": "8", 
        "price_usd": "0.323756", 
        "price_btc": "0.00003868", 
        "24h_volume_usd": "23230900.0", 
        "market_cap_usd": "6014443428.0", 
        "available_supply": "18577087153.0", 
        "total_supply": "103946502380", 
        "max_supply": null, 
        "percent_change_1h": "-0.1", 
        "percent_change_24h": "0.15", 
        "percent_change_7d": "-12.68", 
        "last_updated": "1526831943"
    }, 
    {
        "id": "iota", 
        "name": "IOTA", 
        "symbol": "MIOTA", 
        "rank": "9", 
        "price_usd": "1.79277", 
        "price_btc": "0.00021418", 
        "24h_volume_usd": "44741900.0", 
        "market_cap_usd": "4983058505.0", 
        "available_supply": "2779530283.0", 
        "total_supply": "2779530283.0", 
        "max_supply": "2779530283.0", 
        "percent_change_1h": "0.98", 
        "percent_change_24h": "-0.08", 
        "percent_change_7d": "-9.06", 
        "last_updated": "1526831952"
    }, 
    {
        "id": "tron", 
        "name": "TRON", 
        "symbol": "TRX", 
        "rank": "10", 
        "price_usd": "0.0756586", 
        "price_btc": "0.00000904", 
        "24h_volume_usd": "346193000.0", 
        "market_cap_usd": "4974410080.0", 
        "available_supply": "65748111645.0", 
        "total_supply": "100000000000", 
        "max_supply": null, 
        "percent_change_1h": "2.38", 
        "percent_change_24h": "8.81", 
        "percent_change_7d": "0.79", 
        "last_updated": "1526831955"
    }
    ];
    //pripojuji funkcni historii
    this._route();
    //startovani aplikace
    this._start(false);
  }
};

//metoda pro pristup k datum z API pro kryptomeny
Page.prototype._init = function(){
  var api_url = "https://api.coinmarketcap.com/v1/ticker/";
  var self = this;
  $.get(api_url, function(data, status) { 
    // console.log(status)
      //pokud data jsou, startuju aplikaci
      if (status === "success") { 
        self._route();
        self._cryptocoins = data;
        self._start(true)
       } else { 
        return;
        console.error("Data loading failed");
      }  
    });
};

//routovani - History API
Page.prototype._route = function(){
  const hash = window.location.hash;
  //zmenim path podle hashe stranky
    switch(hash) {
      case "#other-main": this._changePage(hash); break;
      case "#table-main": this._changePage(hash); break;
      default: this._changePage("#other-main"); break;
    }
};

//metoda pro zmenu path stranky; pridava se nebo odebira se trida s potrebnou funkcionalitou
Page.prototype._changePage = function(section){
  $(this._pages).each(function(){
    if ($(this).attr("data-route") == section) {
      $(this).addClass("is-visible");
    } else {
      $(this).removeClass("is-visible");
    }
  })
};

//start aplikace
Page.prototype._start = function(online){
  var self = this;
  //routovani
  $(window).on('popstate',  function(e) {
    self._route();
  })

  //pridavam marquee
  let m = new Marquee(this._cryptocoins);
  m.addMarquee();

  //pridavam svg - pie chart
  let svg = new SVG(this._cryptocoins);
  svg._paint();

  //pridavam converter
  let c = new Converter(this._cryptocoins);
  c._start(this._cryptocoins);

  //pridavam tabulku
  let t = new Table(this._cryptocoins);
  t._paint();
};




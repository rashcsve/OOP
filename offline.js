
//trida pro prototypovou dedicnost
function Online() {
 this._initGeo();
}

//pokud je pripojeni, pridam funkci geolokace, pokud neni, odeberu
Online.prototype._initGeo = function(){
   var condition = navigator.onLine;
   if(condition === true) {
        new Geo();
    } else {
        $("#popular-crypto").hide();
    }
};

//OOP
var off = new Online();
Online.prototype = new Page();
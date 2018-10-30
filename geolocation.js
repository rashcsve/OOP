//trida pro vyuziti pokrocilych APi - pouzivam Geolocation API pro zjisteni polohy
function Geo() {
	//nastavim promenne
	this._lat = null;
	this._lng = null;
	this._geocoder = null;
	//spustim
	this._init();
}

//metoda pro zjisteni geolokace
Geo.prototype._getLoc = function(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(this._getLocCallback.bind(this), this._getLocErrorCallback.bind(this));
	}
}

//inicialni metoda
Geo.prototype._init = function(){
	//nastavim geocoder
	this._geocoder = new google.maps.Geocoder();
	var self = this;
	//zjistuju poloho po stisknuti otazky "What Is The Most Popular Cryptocurrency In Your Country?"
	$("#popular-crypto").on('click', function() {
		self._getLoc();
	});
};

//Callback pri chybe
Geo.prototype._getLocErrorCallback = function (e) {
	$("#popular-crypto").hide();
	 console.log('Geocoder failed');
}
			
//Callback pri ziskani
Geo.prototype._getLocCallback = function (position) {
	this._lat = position.coords.latitude;
	this._lng = position.coords.longitude;
	this._codeLatLng(this._lat, this._lng);
}

//metoda pro zjisteni zeme
Geo.prototype._codeLatLng = function(lat, lng){
	var latlng = new google.maps.LatLng(lat, lng);
		var self = this;
		this._geocoder.geocode({'latLng': latlng}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[0]) {
				//prace s komponentami adresy
				for (var i = 0; i < results[0].address_components.length; i++) {
			        var shortname = results[0].address_components[i].short_name;
			        var longname = results[0].address_components[i].long_name;
			        var type = results[0].address_components[i].types;

			        let test = shortname.replace(/\s/gi, '').length < 1;
			        //vypisu zeme uzivatele a dalsi info
			        if (type.indexOf("country") != -1) {
			            $("#country").html("The most popular cryptocurrency in  " + longname + " is Bitcoin");
			            $("#popular-crypto").hide();
        			} 
  				}
			}
		} else {
			alert("Geocoder failed due to: " + status);
		}
	});
}
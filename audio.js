
//Ovládání medií - WEB Audio API js
var AudioApi = function() {
	this._ctx = null;
	this._osc = null;
	this._gain = null;
	this._init();
}

//inicialni metoda
AudioApi.prototype._init = function(){
	//metoda funguje na stisknuti nejake kryptomeny v pie chartu
	$(".buttons").click(function() {
		//vytvorim audio context
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		this._ctx = new (window.AudioContext || window.webkitAudioContext)();
		//vytvorim oscilator
		this._osc = this._ctx.createOscillator();
		//vytvorim gain pro praci s hlasitosti
		this._gain = this._ctx.createGain();
		//nastavim frekvenci
		this._osc.frequency.value = 440.0;
		//zapnu
		this._osc.start(0);
		//pripojim
		this._osc.connect(this._gain);
		this._gain.connect(this._ctx.destination);
		//nastavim delku a efekt
		this._gain.gain.setValueAtTime(0.0001, this._ctx.currentTime);
		this._gain.gain.exponentialRampToValueAtTime(0.1, this._ctx.currentTime);
		//zastavim
		this._osc.stop(this._ctx.currentTime + 0.1);
	});
}

new AudioApi();
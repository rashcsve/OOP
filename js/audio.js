// WEB Audio API
class AudioApi {
  constructor() {
    this._ctx = null;
    this._osc = null;
    this._gain = null;
    this._init();
  }

  _init() {
    const buttonsEl = document.querySelector(".buttons");
    buttonsEl.addEventListener("click", () => {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this._ctx = new (window.AudioContext || window.webkitAudioContext)();
      this._osc = this._ctx.createOscillator();
      this._gain = this._ctx.createGain();
      this._osc.frequency.value = 440.0;
      this._osc.start(0);
      this._osc.connect(this._gain);
      this._gain.connect(this._ctx.destination);
      this._gain.gain.setValueAtTime(0.0001, this._ctx.currentTime);
      this._gain.gain.exponentialRampToValueAtTime(0.1, this._ctx.currentTime);
      this._osc.stop(this._ctx.currentTime + 0.1);
    });
  }
}
new AudioApi();


class SimpleTimer {
  constructor(elem, msTick, onTick, msTotal, onElapsed) {
    this.elem = elem;
    this.msTotal = this.msLeft = msTotal;
    this.onTick = onTick;
    this.onElapsed = onElapsed;
    this.interval = msTick;
    this.running = false;
    this.paused = false;
    this.TO = null;
  }
  clear() { let elapsed = this.stop(); clearElement(this.elem); return elapsed; }
  continue() {
    if (!this.running) this.start();
    else if (!this.paused) return;
    else { this.paused = false; this.TO = setInterval(this.tickHandler.bind(this), this.interval); }
  }
  output() {
    this.elem.innerHTML = timeConversion(Math.max(this.msLeft, 0), 'msh');
  }
  pause() {
    if (this.paused || !this.running) return;
    clearInterval(this.TO);
    this.paused = true;
  }
  tickHandler() {
    this.msLeft -= this.interval;
    this.msElapsed = this.msTotal - this.msLeft;
    this.output();
    if (isdef(this.onTick)) this.onTick();
    if (this.msLeft <= 0) {
      this.stop();
      this.msLeft = 0;
      if (isdef(this.onElapsed)) {
        this.onElapsed(0);
      }
    }
  }
  togglePause() { if (this.paused) this.continue(); else this.pause(); }
  start() {
    if (this.running) this.stop();
    this.started = new Date().now;
    this.msLeft = this.msTotal;
    this.msElapsed = 0;
    this.running = true;
    this.output();
    this.TO = setInterval(this.tickHandler.bind(this), this.interval);
  }
  stop() {
    if (!this.running) return;
    clearInterval(this.TO);
    this.TO = null;
    this.running = false;
    return this.msLeft;
  }
}
function start_simple_timer(dtimer, msInterval, onTick, msTotal, onElapsed) {
	if (isdef(DA.timer)) { DA.timer.clear(); DA.timer = null; }
	let timer = DA.timer = new SimpleTimer(dtimer, msInterval, onTick, msTotal, onElapsed);
	timer.start();
}
function stop_simple_timer() { if (isdef(DA.timer)) { DA.timer.clear(); DA.timer = null; } }





